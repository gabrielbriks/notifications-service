import { Content } from '@application/entities/notification/content';
import { Notification } from '@application/entities/notification/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  //Definindo métodos estáticos para que não seja necessário instanciar essa classe

  //# Conversão da camada de domínio para camada de persistência
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      canceledAt: notification.canceledAt,
      readAt: notification.readAt,
      createAt: notification.createAt,
    };
  }

  //# Conversão da camada de persistência para camada de domínio
  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createAt: raw.createAt,
      },
      raw.id,
    );
  }
}
