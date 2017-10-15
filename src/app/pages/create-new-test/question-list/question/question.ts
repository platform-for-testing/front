export class Question {
  public id: number;
  public title: string;
  public description: string;
  public required: boolean;
  public editable: boolean;

  constructor(id: number, title: string, description: string, required: boolean, editable: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.required = required;
    this.editable = editable;
  }
}
