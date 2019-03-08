import { Component, OnInit, Input } from '@angular/core';
import { IDOLService } from '../services/IDOLService';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  /*@Input() idolRequest;
  documents: Array<IDOLDocumentResponse>;
  idolResponse: IDOLResponse;
  queryText: string;
  idolResponseContent: IdolContentResponse;*/

  constructor() { }

  ngOnInit() {
  }

  /*sendToIDOL() {
    this.idolService.getQueryAllDocs(this.idolRequest.queryText).subscribe(data => {
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
      this.idolResponse.total = data.autnresponse.responsedata.numhits.$;
      if (data.autnresponse.responsedata.spellingquery) {
        //this.isSpellcheck = !this.isSpellcheck;
        console.log('Total de spellcheck: ' + data.autnresponse.responsedata.spellingquery.$);
        this.idolResponse.spellcheck = data.autnresponse.responsedata.spellingquery.$;
        this.idolRequest.queryText = this.idolResponse.spellcheck;
      }
    });
  }*/

}
