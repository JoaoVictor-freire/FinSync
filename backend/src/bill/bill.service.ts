import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateBillDTO } from './dto/create-bill.dto.js';
import { UpdateBillDTO } from './dto/update-bill.dto.js';
import { contas } from '../../generated/prisma/browser.js';


@Injectable()
export class BillService {
    constructor(
        private readonly prismaService: PrismaService
    ){}

    async create(createBillDTO: CreateBillDTO, idUsuario: string) : Promise<contas>{
        const createdBill = await this.prismaService.contas.create({
            data: {
                ...createBillDTO,
                idusuario: idUsuario
            }
        });
        return createdBill;
    }

    async delete(idConta: string, idUsuario: string) : Promise<contas>{
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

    async update(idConta: string, idUsuario: string, updateBillDTO: UpdateBillDTO) : Promise<contas>{
        const billToUpdate = await this.prismaService.contas.findUnique({
            where: {idconta: idConta}
        });

        if(!billToUpdate){ 
            throw new NotFoundException('Conta não encontrada');
        } else if(billToUpdate.idusuario != idUsuario){
            throw new UnauthorizedException('Você não tem autorização para atualizar esta conta');
        }

        const updatedBill = await this.prismaService.contas.update({
            where: {idconta: idConta},
            data: {
                ...updateBillDTO
            }
        });

        return updatedBill;
    }
}
