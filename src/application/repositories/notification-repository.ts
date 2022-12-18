import { Notification } from '../entities/notification/notification';

//Esse é o nosso CONTRATO.
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
