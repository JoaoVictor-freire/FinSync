import { ApiProperty } from "@nestjs/swagger";

export class UpdateBillDTO {
    @ApiProperty({example: 785.00})
    valor?: number

    @ApiProperty({example: 'SAIDA'})
    tipo?: string

    @ApiProperty({example: 'Transporte'})
    categoria?: string

    @ApiProperty({example: 4})
    quantidadeparcela: number

    @ApiProperty({example: '2026-10-02T00:00:00.000Z'})
    datavencimento?: string

    @ApiProperty({example: '2025-12-15T00:00:00.000Z'})
    datacriacao?: string
}