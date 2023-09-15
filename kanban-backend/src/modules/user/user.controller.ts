import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from 'src/modules/user/dto/user';
import { UserService } from './user.service';

@Controller()
export class Usercontroller {
  public constructor(private readonly userservice: UserService) {}

  @Get('/api/getUsers')
  @ApiOkResponse({
    type: () => User,
    isArray: true,
  })
  getUsers(): Promise<User[]> {
    return this.userservice.getUsers();
  }
}
