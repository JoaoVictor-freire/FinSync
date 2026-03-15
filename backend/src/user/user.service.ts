import { ConflictException, Injectable } from '@nestjs/common';
import { usuario } from '../../generated/prisma/browser.js';
import { PrismaService } from '../prisma.service.js';


export type User = usuario;

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService
    ) {}
}


