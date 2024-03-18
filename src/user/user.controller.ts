import { Controller, Get, Param, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  public readUsers() {
    return this.userService.getUsers();
  }

  @Put('/image/:id')
  @UseInterceptors(FileInterceptor('image'))
  public async addUpdateUserImage(@Param('id') id: string, @UploadedFile() image: Express.Multer.File) {
    const byteOffset = image.buffer.byteOffset;
    const byteLength = image.buffer.byteLength;
    const arrayBuffer = image.buffer.buffer.slice(byteOffset, byteOffset + byteLength);
    return this.userService.addUpdateImage(id, arrayBuffer);
  }
}
