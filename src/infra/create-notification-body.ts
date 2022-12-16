//Nessa class vou estar dizendo quais são os campos que a nossa requisição deve ter.
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;

  @IsNotEmpty({
    message: 'A content é obrigatório.',
  })
  @Length(5, 240, {
    message: 'O content deve ser ter no mínimo 5 e no maximo 240 caracteres.',
  })
  content!: string;

  @IsNotEmpty({
    message: 'A category é obrigatório.',
  })
  category!: string;
}
