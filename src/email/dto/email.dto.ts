// src/email/dto/send-email.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto {
  @ApiProperty({
    example: 'jonesalemdar@gmail.com',
    description: 'Sender e-mail address',
  })
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @ApiProperty({
    example: 'recipient@example.com',
    description: 'Recipient e-mail address',
  })
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @ApiProperty({ example: 'Test', description: 'Email subject' })
  @IsNotEmpty()
  @IsString()
  subject: string;

  @ApiProperty({
    example: `<h1 style="color:red; text-align:center;">Hello World</h1>`,
    description: 'Email html content',
  })
  @IsNotEmpty()
  @IsString()
  html: string;
}
