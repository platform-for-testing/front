import {Question} from './question';

export class Test {
    public id?: string;
    public title: string;
    public description: string;
    public questions: Question[];

    constructor(quiz) {
      const { _id, title, description, questions } = quiz;
        this.id = _id;
        this.title = title;
        this.description = description;
        this.questions = questions;
    }
}
