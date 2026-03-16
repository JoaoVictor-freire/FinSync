import { Controller, Post, Delete, Body, Param, Request, UseGuards, Patch } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreateBillDTO } from './dto/create-bill.dto.js';
import { UpdateBillDTO } from './dto/update-bill.dto.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guards.js';

@Controller('bill')
export class BillController {
    constructor(
        private readonly billService: BillService
    ){}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Post("createbill")
    @ApiOperation({summary: "Cadastrar conta"})
    create(@Body() createBillDTO: CreateBillDTO, @Request() req){
        return this.billService.create(createBillDTO, req.user.sub)
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Delete('deletebill/:idConta')
    @ApiOperation({summary: "Deletar conta"})
    delete(@Param('idConta') idConta: string, @Request() req){
        return this.billService.delete(idConta, req.user.sub);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Patch('updatebill/:idConta')
    @ApiOperation({summary: 'Atualizar conta'})
    update(@Body() updateBillDTO: UpdateBillDTO, @Param('idConta') idConta: string, @Request() req){
        return this.billService.update(idConta, req.user.sub, updateBillDTO);
    }
}
