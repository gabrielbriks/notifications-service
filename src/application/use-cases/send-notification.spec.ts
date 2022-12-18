import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '../../../test/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  test('it should be able send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      recipientId: randomUUID(),
      content: 'Você recebeu uma notificação teste',
      category: 'test',
    });

    console.log(notificationRepository.notifications);

    expect(notificationRepository.notifications).toHaveLength(1);

    //Espero que a notificação "in memory" seja igual o retorno da SendNotification
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
