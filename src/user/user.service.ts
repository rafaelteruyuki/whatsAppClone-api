import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: uuid(),
      name: 'Harry Potter'
    },
    {
      id: uuid(),
      name: 'Hermione Granger'
    },
    {
      id: uuid(),
      name: 'Ron Weasley'
    }
  ];

  public getUsers(): User[] {
    return [...this.users];
  }
}
