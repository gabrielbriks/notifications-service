import { Notification } from '../entities/notification/notification';

//Esse é o nosso CONTRATO.
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;

  //Se a notificação não existir retornamos null
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientID(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
