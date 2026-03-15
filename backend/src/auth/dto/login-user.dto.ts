import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDTO{
    @ApiProperty({example: '12398745632'})
    cpf?: string

    @ApiProperty({example: 'seunome123@gmail.com'})
    email: string

    @ApiProperty({example: 'senhaforte123'})
    senha: string
}