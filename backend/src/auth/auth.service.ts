import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateUserDTO } from './dto/create-user.dto.js';
import { LoginUserDTO } from './dto/login-user.dto.js';
import { usuario } from '../../generated/prisma/browser.js';
import bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor (
        private readonly prisma: PrismaService
    ){}

    async create(createUserDTO: CreateUserDTO) : Promise<Omit<usuario, 'senha'>>{
        const [existingCPF, existingEmail] = await Promise.all([
            this.prisma.usuario.findUnique({ where: {cpf: createUserDTO.cpf} }),
            this.prisma.usuario.findUnique({ where: {email: createUserDTO.email}})
        ]);

        if (existingCPF || existingEmail){
            throw new ConflictException('Email ou CPF já cadastrados')
        }

        const user = await this.prisma.usuario.create({
            data:{
                ...createUserDTO,
                senha: await this.encryptPassword(createUserDTO.senha)
            }
            
        });

        const {senha, ...result} = user;

        return result;
    }

    async login(loginUserDTO: LoginUserDTO) : Promise<Omit<usuario, 'senha'>>{
        const user = await this.prisma.usuario.findUnique({where: loginUserDTO.cpf ? {cpf: loginUserDTO.cpf} : {email: loginUserDTO.email}})
        if(!user|| !loginUserDTO.senha){
            throw new UnauthorizedException('Credenciais inválidas')
        }

        const matchPassword = await bcrypt.compare(loginUserDTO.senha, user.senha);
        if(!matchPassword){
            throw new UnauthorizedException('Credenciais inválidas'); 
        }
        const {senha, ...result} = user

        return result;
    }

    async encryptPassword(senha: string) : Promise<string>{
        const salt =  bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);
        return hash;
    }
}
