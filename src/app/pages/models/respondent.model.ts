import {UserModel} from './user.model';
import {Test} from './test';

export class RespondentModel {
  public user: UserModel;
  public testName: Test;
  public tryCount: number;
  public points: number;
  public time: string;


  constructor(user: UserModel, testName: Test, tryCount: number, points: number, time: string) {
    this.user = user;
    this.testName = testName;
    this.tryCount = tryCount;
    this.points = points;
    this.time = time;
  }
}
