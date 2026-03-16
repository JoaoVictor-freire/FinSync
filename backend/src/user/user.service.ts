import { Injectable } from '@nestjs/common';
import { usuario, contas } from '../../generated/prisma/browser.js';
import { PrismaService } from '../prisma.service.js';


@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async findUsersBills (idUsuario: string) : Promise<contas[]>{
        const foundBills = await this.prisma.contas.findMany({
            where: {idusuario: idUsuario}
        })
        return foundBills;
    }
}
