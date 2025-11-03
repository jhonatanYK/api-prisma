import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostDto) {
    return this.prisma.post.create({
      data,
      include: { author: { include: { user: true } }, favoritedBy: true },
    });
  }

  async findAll(authorId?: number, date?: string) {
    const where: any = {};

    if (authorId) {
      where.authorId = authorId;
    }

    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      where.publishedAt = {
        gte: startOfDay,
        lt: endOfDay,
      };
    }

    return this.prisma.post.findMany({
      where,
      include: { author: { include: { user: true } }, favoritedBy: true },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async update(id: number, data: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data,
      include: { author: { include: { user: true } }, favoritedBy: true },
    });
  }
}
