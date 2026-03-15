import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateUserDTO } from './dto/create-user.dto.js';
import { LoginUserDTO } from './dto/login-user.dto.js';
import { usuario } from '../../generated/prisma/browser.js';


@Injectable()
export class AuthService {
    constructor (
        private readonly prisma: PrismaService
    ){}

    async create(createUserDTO: CreateUserDTO) : Promise<usuario>{
        const [existingCPF, existingEmail] = await Promise.all([
            this.prisma.usuario.findUnique({ where: {cpf: createUserDTO.cpf} }),
            this.prisma.usuario.findUnique({ where: {email: createUserDTO.email}})
        ]);

        if (existingCPF || existingEmail){
            throw new ConflictException('Email ou CPF já cadastrados')
        }

        return this.prisma.usuario.create({
            data: {
                nome: createUserDTO.nome,
                email: createUserDTO.email,
                senha: createUserDTO.senha,
                cpf: createUserDTO.cpf
            }}
            
        );
    }

    async login(loginUserDTO: LoginUserDTO) : Promise<Omit<usuario, 'senha'>>{
        const user = await this.prisma.usuario.findUnique({where: loginUserDTO.cpf ? {cpf: loginUserDTO.cpf} : {email: loginUserDTO.email}})

        if(!user || user.senha != loginUserDTO.senha || !loginUserDTO.senha){
            throw new UnauthorizedException('Credenciais inválidas')
        }
        const {senha, ...result} = user

        return result;
    }
}
