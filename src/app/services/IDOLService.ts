import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// npm i rxjs-compat
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { ApplicationProperties } from './ApplicationProperties';

@Injectable()
export class IDOLService {

  constructor(private http: HttpClient) { }

  getQueryAllDocs(queryText: string): Observable<any> {
    console.log(ApplicationProperties.IDOLService + '/query/' + queryText);
    return this.http.get(ApplicationProperties.IDOLService + '/query/' + queryText);
  }

  /*search_word(queryText: string): Observable<any> {
    console.log(ApplicationProperties.IDOLService + '/termexpand/' + queryText);
    return this.http.get<any>(ApplicationProperties.IDOLService + '/termexpand/' + queryText);
  }*/

  getContentModal(id: string): Observable<any> {
    console.log(ApplicationProperties.IDOLService + '/getcontent/' + id);
    return this.http.get(ApplicationProperties.IDOLService + '/getcontent/' + id);
  }

  getSearchTerm(keyword: string): Observable<any> {
    console.log(ApplicationProperties.IDOLService + '/termexpand/' + keyword);
    return this.http.get<any>(ApplicationProperties.IDOLService + '/termexpand/' + keyword);
  }

}