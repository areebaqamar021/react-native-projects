import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    var users=null
    users= this.userService.findAll();

    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    var users=null
console.log(users.profileID)
    users= this.userService.findOne(id);
return users.profile
}

  @Post()
  create(@Body() user: Partial<User>): Promise<User> {
    return this.userService.create(user);
  }
}
