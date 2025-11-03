import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAuthorDto) {
    return this.prisma.author.create({
      data,
      include: { user: true, posts: true },
    });
  }

  async findAll() {
    return this.prisma.author.findMany({
      include: { user: true, posts: true },
      orderBy: { id: 'asc' },
    });
  }

  async update(id: number, data: UpdateAuthorDto) {
    return this.prisma.author.update({
      where: { id },
      data,
      include: { user: true, posts: true },
    });
  }
}
