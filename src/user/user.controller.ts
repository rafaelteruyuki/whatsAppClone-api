import { Controller, Get } from '@nestjs/common';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  public readUsers(): User[] {
    return this.userService.getUsers();
  }
}
