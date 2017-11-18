export class Question {
  public title: string;
  public description: string;
  public required: boolean;
  public type: any;
  public image: string;
  public points: any;
  public answers: any[];

  constructor(title: string = 'Question', description: string = '', required: boolean = false, type: any = '', image: string = '', points: any = '') {
    this.title = title;
    this.description = description;
    this.required = required;
    this.type = type;
    this.image = image;
    this.points = points;
  }
}
