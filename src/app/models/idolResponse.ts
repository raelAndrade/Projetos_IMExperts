import { IDOLDocumentResponse } from './idolDocumentResponse';

export class IDOLResponse {

    total: number;
    spellcheck: string;
    documents: IDOLDocumentResponse[];

    constructor(total: number, documents: IDOLDocumentResponse[], spell: string) {
        this.total = total;
        this.spellcheck = spell;
        this.documents = documents;
    }
    //constructor() { }
}
