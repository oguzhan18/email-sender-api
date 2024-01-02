// src/email/dto/send-email.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto {
  @ApiProperty({
    example: 'jonesalemdar@gmail.com',
    description: 'Gönderen e-posta adresi',
  })
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @ApiProperty({
    example: 'recipient@example.com',
    description: 'Alıcı e-posta adresi',
  })
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @ApiProperty({ example: 'Test', description: 'E-posta konusu' })
  @IsNotEmpty()
  @IsString()
  subject: string;

  @ApiProperty({
    example: `<h1>Merhaba Dünya</h1>`,
    description: 'E-posta html içeriği',
  })
  @IsNotEmpty()
  @IsString()
  html: string;
}
