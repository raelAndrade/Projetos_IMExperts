import { Component, Input, OnInit, Output } from '@angular/core';

import { IDOLService } from '../services/IDOLService';
import { IDOLRequest } from '../models/idolRequest';
import { IDOLResponse } from '../models/idolResponse';
import { IDOLDocumentResponse } from '../models/idolDocumentResponse';
import { IDOLResponseTerm } from '../models/idolResponseTerm';
import { IdolContentResponse } from '../models/idolContentResponse';

@Component({
  selector: 'app-cu-search',
  templateUrl: './cu-search.component.html',
  styleUrls: ['./cu-search.component.css']
})
export class CuSearchComponent implements OnInit {

  @Input() idolRequest;
  documents: Array<IDOLDocumentResponse>;
  idolResponse: IDOLResponse;
  queryText: string;
  idolResponseTerm: IDOLResponseTerm;
  idolResponseContent: IdolContentResponse;

  isSpellcheck = true;
  isTable = true;

  // Auto complete com primeng
  results: any[];

  constructor(private idolService: IDOLService) {
    this.idolRequest = new IDOLRequest('');
    this.documents = new Array<IDOLDocumentResponse>();
    this.idolResponse = new IDOLResponse(0, null, null);
    this.idolResponseTerm = new IDOLResponseTerm(0, null);
    this.idolResponseContent = new IdolContentResponse(null);
  }

  ngOnInit() { }

  sendToIDOL() {

    console.log('Query Text: ' + this.idolRequest.queryText);

    /*if (this.idolRequest.queryText != "") {*/
    this.idolService.getQueryAllDocs(this.idolRequest.queryText).subscribe(data => {
      if (this.idolRequest.queryText != null) {
        this.isTable = !this.isTable;
      }
      if (data.autnresponse.responsedata.hits) {
        data.autnresponse.responsedata.hits.map(_doc => {
          let dretitle = 'SEM TITULO';
          if (_doc.title) {
            dretitle = _doc.title.$;
          }
          this.documents.push(new IDOLDocumentResponse(_doc.id.$, _doc.reference.$, dretitle, _doc.summary.$));
        });
      }
      this.idolResponse.documents = this.documents;
      if (data.autnresponse.responsedata.spellingquery) {
        this.isSpellcheck = !this.isSpellcheck;
        console.log('Total de spellcheck: ' + data.autnresponse.responsedata.spellingquery.$);
        this.idolResponse.spellcheck = data.autnresponse.responsedata.spellingquery.$;
      }
    });
    /*}*/

  }

  // Função de autocomplete com primeng
  search() {
    this.results = [];
    if (this.idolRequest.queryText.length > 1) {
      this.idolService.getSearchTerm(this.idolRequest.queryText).subscribe(
        data => {
          console.log(data.autnresponse.responsedata.terms);
          if (data.autnresponse.responsedata.terms) {
            console.log('Total de termos: ' + data.autnresponse.responsedata.numTerms.$);
            this.idolResponseTerm.total = data.autnresponse.responsedata.numTerms.$;
            this.results = data.autnresponse.responsedata.terms.map(_doc => {
              return _doc.$;
            });
          }
        });
    }
  }

  openModal(id: string) {
    this.idolResponseContent.drecontent = [];
    this.idolService.getContentModal(id).subscribe(data => {
      console.log('Hits' + data.autnresponse.responsedata.hits[0]);
      this.idolResponseContent.drecontent = data.autnresponse.responsedata.hits[0].content.document[0].drecontent.map(_contentValue => {
        console.log('Content' + data.autnresponse.responsedata.hits[0].content.document[0].drecontent.$);
        return _contentValue.$;
      });
    });
  }

}
