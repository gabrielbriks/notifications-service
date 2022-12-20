import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipient Notifications', () => {
  test('it should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notifications } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);

    /**
     * Espero que as notificações retornadas sejam igual a um array que contenha
     * dois objetos que cada um contenham um recipientId especifico.
     */
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
