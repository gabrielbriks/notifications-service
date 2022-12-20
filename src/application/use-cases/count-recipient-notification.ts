import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';

//Para contarmos todas as notificações de um recipient precisamos saber o id dele
export interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientID(
      recipientId,
    );

    return {
      count,
    };
  }
}
