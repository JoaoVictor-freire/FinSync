import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateBillDTO } from './dto/create-bill.dto.js';


@Injectable()
export class BillService {
    constructor(
        private readonly prismaService: PrismaService
    ){}

    async create(createBillDTO: CreateBillDTO, idUsuario: string){
        const bill = await this.prismaService.contas.create({
            data: {
                ...createBillDTO,
                idusuario: idUsuario
            }
        });
        return bill
    }
}
