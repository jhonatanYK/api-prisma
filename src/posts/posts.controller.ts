import { Controller, Post, Body, Get, Put, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Body() data: CreatePostDto) {
    return this.postsService.create(data);
  }

  @Get()
  async findAll(
    @Query('authorId') authorId?: string,
    @Query('date') date?: string,
  ) {
    const authorIdNum = authorId ? +authorId : undefined;
    return this.postsService.findAll(authorIdNum, date);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return this.postsService.update(+id, data);
  }
}
