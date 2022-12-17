import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }

  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(value: Content) {
    this.props.content = value;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(value: string) {
    this.props.category = value;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createAt(): Date {
    return this.props.createAt;
  }
}
