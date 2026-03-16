import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { UserModule } from './user/user.module.js';
import { BillModule } from './bill/bill.module.js';

@Module({
  imports: [AuthModule, UserModule, BillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
