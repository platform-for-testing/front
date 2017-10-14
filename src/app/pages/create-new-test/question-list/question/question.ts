export class Question {
  public id: number;
  public title: string;
  public description: string;
  public required: boolean;

  constructor(id: number, title: string, description: string, required: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.required = required;
  }
}