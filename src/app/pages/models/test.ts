export class Test {
    public name: string;
    public lastEdited: number;
    public numberOfQuestions: number;

    constructor(name: string, lastEdited: number, numberOfQuestions: number) {
        this.name = name;
        this.lastEdited = lastEdited;
        this.numberOfQuestions = numberOfQuestions;
    }
}
