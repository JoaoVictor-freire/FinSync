import { ApiProperty } from "@nestjs/swagger";

export class CreateBillDTO{
    @ApiProperty({example: 1200.50})
    valor: number

    @ApiProperty({example: 8})
    quantidadeparcela: number

    @ApiProperty({example: "PAGO"})
    status: string

    @ApiProperty({example: "ENTRADA"})
    tipo: string

    @ApiProperty({example: "Cartão"})
    categoria: string

    @ApiProperty({example: "2026-10-02T00:00:00.000Z"})
    datavencimento: Date
}