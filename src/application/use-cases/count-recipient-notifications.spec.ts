import { Content } from '@application/entities/notification/content';
import { Notification } from '@application/entities/notification/notification';
import { InMemoryNotificationsRepository } from '@test/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';

describe('Count Recipient Notifications', () => {
  test('it should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Notificação de teste'),
        category: 'test',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Notificação de teste'),
        category: 'test',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Notificação de teste'),
        category: 'test',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
