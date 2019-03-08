export class IDOLDocumentResponse {

    id: string;
    reference: string;
    summary: string;
    title: string;

    constructor(id: string, reference: string, title: string, summary: string) {
        this.id = id;
        this.reference = reference;
        this.summary = summary;
        this.title = title;
    }
}
