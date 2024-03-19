import { v4 as uuid } from 'uuid';

export class User {
  private id: string;
  private name: string;
  private initials: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
    this.initials = name.split(' ').reduce((prev, curr) => {
      const initial = curr.split('')[0].toUpperCase();
      return `${prev}${initial}`
    }, '');
  }
}
