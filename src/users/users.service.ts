import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: { author: true, favorites: { include: { post: true } } },
      orderBy: { id: 'asc' },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async addFavorite(userId: number, postId: number) {
    return this.prisma.favorite.create({
      data: {
        userId,
        postId,
      },
      include: { post: true, user: true },
    });
  }

  async getFavorites(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: {
        post: {
          include: {
            author: { include: { user: true } },
          },
        },
      },
      orderBy: { id: 'desc' },
    });
  }
}