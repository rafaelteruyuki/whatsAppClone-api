import { Injectable } from '@nestjs/common';
import { FakeUserDB } from './FakeUserDB';

@Injectable()
export class UserService {
  private fakeUserDB = new FakeUserDB();

  public getUsers() {
    return [...this.fakeUserDB.users];
  }

  public addUpdateImage(userId: string, image: ArrayBuffer) {
    const userImage = this.fakeUserDB.userImages.find(
      image => image.userId === userId
    );

    if(!userImage) {
      this.fakeUserDB.addUserImage(userId, image);
    } else {
      this.fakeUserDB.updateUserImage(userId, image);
    }

    return { 
      message: 'Upload completed.'
    };
  }

  public getUserImage(userId: string) {
    return this.fakeUserDB.getUserImage(userId);
  }
}
