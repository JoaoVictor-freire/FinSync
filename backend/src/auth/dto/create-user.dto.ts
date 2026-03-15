import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiProperty({ example: 'João Silva' })
    nome: string;

    @ApiProperty({ example: '12345678901' })
    cpf: string;

    @ApiProperty({ example: 'joao@email.com' })
    email: string;

    @ApiProperty({ example: 'senhaSegura123' })
    senha: string;
}