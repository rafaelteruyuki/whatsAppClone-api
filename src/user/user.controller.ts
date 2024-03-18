import { Controller, Get, NotFoundException, Param, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { getContentType } from 'src/helpers/content-type.helper';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  public readUsers() {
    return this.userService.getUsers();
  }

  @Get('/image/:userId')
  public async getUserImage(@Param('userId') id: string, @Res() res: Response<Buffer>) {
    const userImage = this.userService.getUserImage(id);

    if(!userImage) {
      throw new NotFoundException(`Image for user with ID: ${id} not found`);
    }
    const imageAsBuffer = Buffer.from(userImage.image);

    const contentType = getContentType(imageAsBuffer) || '';

    res.set('Content-Type', contentType);
    res.send(imageAsBuffer);
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
