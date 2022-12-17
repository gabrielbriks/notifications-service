import { randomUUID } from 'crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new Content('New content test'),
      category: 'test',
    });

    expect(notification).toBeTruthy();
  });
});
