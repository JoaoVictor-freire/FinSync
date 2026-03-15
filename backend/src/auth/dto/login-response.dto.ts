import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDTO {
    @ApiProperty({ example: 'uuid-do-usuario' })
    idusuario: string;

    @ApiProperty({ example: '12345678901' })
    cpf: string;

    @ApiProperty({ example: 'João Silva' })
    nome: string;

    @ApiProperty({ example: 'joao@email.com' })
    email: string;

    @ApiProperty({ example: '2026-03-15T00:00:00.000Z', required: false })
    datacriacao?: Date | null;

    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
    access_token: string;
}
