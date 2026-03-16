import { Module } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { BillController } from './bill.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  providers: [BillService, PrismaService],
  controllers: [BillController]
})
export class BillModule {}
