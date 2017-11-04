export class Question {
  public title: string;
  public description: string;
  public required: boolean;
  public type: any;
  public points: any;

  constructor(title: string = 'Question', description: string = '', required: boolean = false, type: number = 0, points: any = 1) {
    this.title = title;
    this.description = description;
    this.required = required;
    this.type = type;
    this.points = points;
  }
}
