import { Notification } from '@application/entities/notification/notification';

export class PrismaNotificationMapper {
  //Definindo esse método como estático para que não seja necessário instanciar essa classe
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createAt: notification.createAt,
    };
  }
}
