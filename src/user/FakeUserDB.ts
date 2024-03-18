import { User } from "./User";
import { UserImage } from "./UserImage";

export class FakeUserDB {
  public readonly users: User[] = [
    new User('Harry Potter'),
    new User('Ron Weasley'),
    new User('Hermione Granger')
  ];

  public readonly userImages: UserImage[] = [];

  public addUserImage(userId: string, image: ArrayBuffer) {
    this.userImages.push(new UserImage(userId, image));
  }

  public updateUserImage(userId: string, image: ArrayBuffer) {
   const userImage = this.userImages.find(image => image.userId === userId);

   if(userImage) {
    userImage.image = image;
   }
  }

  public getUserImage(userId: string) {
    return this.userImages.find(image => image.userId === userId);
  }
}