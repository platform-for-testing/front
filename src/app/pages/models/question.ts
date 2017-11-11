export class Question {
  public title: string;
  public description: string;
  public required: boolean;
  public type: any;
  public image: string;
  public points: any;

<<<<<<< HEAD:src/app/pages/create-new-test/question-list/question/question.ts
  constructor(title: string = 'Question', description: string = '', required: boolean = false, type: any = '', image: string = '', points: any = '') {
=======
  constructor(title: string = 'Question', description: string = '', required: boolean = false, type: number = 0, points: any = 1) {
>>>>>>> d018cb02958d97dcbe96e31d9072139be62d79fe:src/app/pages/models/question.ts
    this.title = title;
    this.description = description;
    this.required = required;
    this.type = type;
    this.image = image;
    this.points = points;
  }
}
