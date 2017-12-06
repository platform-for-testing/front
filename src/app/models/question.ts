export class Question {
  public title: string;
  public description: string;
  public required: boolean;
  public options: any;
  public type: any;
  public image: string;
  public points: any;

  constructor( title: string = 'Question',
               description: string = '',
               required: boolean = false,
               options: any = [],
               type: any = '',
               image: string = '',
               points: any = '' ) {
    this.title = title;
    this.description = description;
    this.required = required;
    this.options = options;
    this.type = type;
    this.image = image;
    this.points = points;
  }
}
