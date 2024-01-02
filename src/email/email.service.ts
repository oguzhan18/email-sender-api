// src/email/email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(mailOptions: any): Promise<string> {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'jonesalemdar@gmail.com',
          pass: 'lbmkvbydvsgkxfrv',
        },
      });

      const info = await transporter.sendMail(mailOptions);
      return `E-posta başarıyla gönderildi: ${info.messageId}`;
    } catch (error) {
      throw new Error(`E-posta gönderme işlemi başarısız: ${error.message}`);
    }
  }
}
