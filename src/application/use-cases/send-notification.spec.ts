import { randomUUID } from 'crypto';
import { Notification } from '../entities/notification/notification';
import { SendNotification } from './send-notification';

const notificationsInMemory: Notification[] = [];

//Criando um repository fake para "SendNotification"
const notificationsRepository = {
  async create(notification: Notification) {
    notificationsInMemory.push(notification);
  },
};

describe('Send Notification', () => {
  test('it should be able send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: randomUUID(),
      content: 'Você recebeu uma notificação teste',
      category: 'test',
    });

    console.log(notificationsInMemory);

    expect(notificationsInMemory).toHaveLength(1);
  });
});
