import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFoundError } from './errors/notification-not-found-error';

//Para cancelar uma notificação só precisamos saber o id dela
export interface CancelNotificationRequest {
  notificationId: string;
}

//Como ele não vai retornar nada mudamos a tipagem para void
// Por esse mesmo fator, utilizamos o type para conseguir passar o void
type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFoundError();
    }

    //Cancelo a notification
    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
