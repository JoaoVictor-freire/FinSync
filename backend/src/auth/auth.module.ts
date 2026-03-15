import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { PrismaService } from '../prisma.service.js';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, PrismaService],
  controllers: [AuthController],

  imports:[
    JwtModule.register({
      secret: process.env['JWT_SECRET'],
      signOptions: {expiresIn: process.env['JWT_EXPIRES_IN'] as any},
    })
  ]
})
export class AuthModule {}
