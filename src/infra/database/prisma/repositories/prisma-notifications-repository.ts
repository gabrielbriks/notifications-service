import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaNotificationMapper } from '../mappers/prisma-notification.-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const prismaNotificationData =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification
      .create({
        data: prismaNotificationData,
      })
      .catch((error) => {
        const errorMessage = {
          msg: 'Erro ao salvar notificação.',
          error: error,
        };

        return errorMessage;
      });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
