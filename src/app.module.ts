import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
