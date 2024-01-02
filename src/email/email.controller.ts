// src/email/email.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/email.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('emails')
@ApiTags('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() mailOptions: SendEmailDto): Promise<string> {
    const result = await this.emailService.sendEmail(mailOptions);
    return result;
  }
}
