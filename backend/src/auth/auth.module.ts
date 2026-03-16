import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { PrismaService } from '../prisma.service.js';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy.js';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, PrismaService, JwtStrategy],
  controllers: [AuthController],

  imports:[
    PassportModule,
    JwtModule.register({
      secret: process.env['JWT_SECRET'],
      signOptions: {expiresIn: process.env['JWT_EXPIRES_IN'] as any},
    })
  ]
})
export class AuthModule {}
