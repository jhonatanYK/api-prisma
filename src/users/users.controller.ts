import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(+id, data);
  }

  @Post(':id/favorites/:postId')
  async addFavorite(
    @Param('id') userId: string,
    @Param('postId') postId: string,
  ) {
    return this.usersService.addFavorite(+userId, +postId);
  }

  @Get(':id/favorites')
  async getFavorites(@Param('id') userId: string) {
    return this.usersService.getFavorites(+userId);
  }
}