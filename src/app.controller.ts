import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova solicitação para aceitar',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
