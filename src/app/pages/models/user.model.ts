export class UserModel {
  public userName: string;
  public userDescription: string;
  public lastVisited: string;
  public lastTested: string;


  constructor(userName: string, userDescription: string, lastVisited: string, lastTested: string) {
    this.userName = userName;
    this.userDescription = userDescription;
    this.lastVisited = lastVisited;
    this.lastTested = lastTested;
  }
}
