import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

//O Partial deixa nosso tipo com todos os campos opcionais;
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Notificação de teste'),
    category: 'test',
    recipientId: 'recipient-2',
    ...override,
  });
}
