export class Test {
  public name: string;
  public description: string;
  public lastEdited: string;
  public numberOdQuestions: number;

  constructor(name: string, description: string, lastEdited: string, numberOdQuestions: number) {
    this.name = name;
    this.description = description;
    this.lastEdited = lastEdited;
    this.numberOdQuestions = numberOdQuestions;
  }
}
