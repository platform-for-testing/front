export class Question {
  public id: number;
  public title: string;
  public description: string;
  public required: boolean;
  public editable: boolean;
  public mulselItems: any;
  public mulselNumbers: any;

  constructor(id: number, title: string, description: string, required: boolean, editable: boolean, mulselItems: any, mulselNumbers: any) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.required = required;
    this.editable = editable;
    this.mulselItems = mulselItems;
    this.mulselNumbers = mulselNumbers
  }
}
