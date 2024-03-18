export class UserImage {
  private _userId: string;
  private _image: ArrayBuffer;

  constructor(userId: string, image: ArrayBuffer) {
    this._userId = userId;
    this._image = image;
  }
  
  public get userId() {
    return this._userId;
  }

  public set image(image: ArrayBuffer) {
    this._image = image;
  }

  public get image() {
    return this._image
  }
}
