import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Post()
  async create(@Body() data: CreateAuthorDto) {
    return this.authorsService.create(data);
  }

  @Get()
  async findAll() {
    return this.authorsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateAuthorDto) {
    return this.authorsService.update(+id, data);
  }
}
