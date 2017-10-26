export class Question {
  public title: string;
  public description: string;
  public required: boolean;
  public type: any;
  public points: any;

  constructor(title: string = 'Question', description: string = '', required: boolean = false, type: any = '', points: any = '') {
    this.title = title;
    this.description = description;
    this.required = required;
    this.type = type;
    this.points = points;
  }
}
