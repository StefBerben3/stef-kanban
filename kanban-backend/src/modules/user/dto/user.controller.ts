import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from 'src/modules/user/dto/user';
import { UserService } from './user.service';

@Controller()
export class Usercontroller {
  public constructor(private readonly userservice: UserService) {}

  @Post('/api/user')
  @ApiOkResponse({
    type: () => User,
  })
  createUser(
    @Body()
    userData: User,
  ): Promise<User> {
    return this.userservice.createUser(userData);
  }

  @Get('/api/getUsers')
  @ApiOkResponse({
    type: () => User,
    isArray: true,
  })
  getUsers(): Promise<User[]> {
    return this.userservice.getUsers();
  }
}
