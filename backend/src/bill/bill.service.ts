import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

    async delete(idConta: string, idUsuario: string){
        const billToDelete = await this.prismaService.contas.findUnique({
            where: {idconta: idConta}
        });

        if(!billToDelete){ 
            throw new NotFoundException('Conta não encontrada');
        } else if(billToDelete.idusuario != idUsuario){
            throw new UnauthorizedException('Você não tem autorização para deletar esta conta');
        }

        await this.prismaService.contas.delete({
            where: {idconta: idConta}
        })
        return billToDelete;
    }
}
