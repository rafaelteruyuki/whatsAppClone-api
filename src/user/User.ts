import { v4 as uuid } from 'uuid';

export class User {
  private id: string;
  private name: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
  }
}
