export class IDOLResponseTerm {

    terms: string[];
    total: number;

    constructor(totalTerm: number, terms: string[]) {
        this.total = totalTerm;
        this.terms = terms;
    }
}
