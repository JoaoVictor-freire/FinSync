import { Body, Controller, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service.js';
import { CreateUserDTO } from './dto/create-user.dto.js';
import { LoginUserDTO } from './dto/login-user.dto.js';


@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    @ApiOperation({ summary: 'Criar novo usuário' })
    @ApiCreatedResponse({ description: 'Usuário criado com sucesso' })
    @ApiConflictResponse({ description: 'Email e/ou CPF já cadastrados' })
    create(@Body() CreateUserDTO: CreateUserDTO){
        return this.authService.create(CreateUserDTO);
    }

    @Post('login')
    @ApiOperation({summary: 'Login de usuário'})
    @ApiConflictResponse({description: 'Credenciais inválidas'})
    login(@Body() LoginUserDTO: LoginUserDTO){
        return this.authService.login(LoginUserDTO)
    }
}
