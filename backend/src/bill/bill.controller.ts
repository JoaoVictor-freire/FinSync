import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreateBillDTO } from './dto/create-bill.dto.js';
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

}
