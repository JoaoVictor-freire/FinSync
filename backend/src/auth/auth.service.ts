import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateUserDTO } from './dto/create-user.dto.js';
import { LoginUserDTO } from './dto/login-user.dto.js';
import { LoginResponseDTO } from './dto/login-response.dto.js';
import { usuario } from '../../generated/prisma/browser.js';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor (
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService
    ){}

    async create(createUserDTO: CreateUserDTO) : Promise<Omit<usuario, 'senha'>>{
        const [existingCPF, existingEmail] = await Promise.all([
            this.prismaService.usuario.findUnique({ where: {cpf: createUserDTO.cpf} }),
            this.prismaService.usuario.findUnique({ where: {email: createUserDTO.email}})
        ]);

        if (existingCPF || existingEmail){
            throw new ConflictException('Email ou CPF já cadastrados')
        }

        const user = await this.prismaService.usuario.create({
            data:{
                ...createUserDTO,
                senha: await this.encryptPassword(createUserDTO.senha)
            }
            
        });

        const {senha, ...result} = user;

        return result;
    }

    async login(loginUserDTO: LoginUserDTO) : Promise<LoginResponseDTO>{
        const user = await this.prismaService.usuario.findUnique({where: loginUserDTO.cpf ? {cpf: loginUserDTO.cpf} : {email: loginUserDTO.email}})
        if(!user|| !loginUserDTO.senha){
            throw new UnauthorizedException('Credenciais inválidas')
        }

        const matchPassword = await bcrypt.compare(loginUserDTO.senha, user.senha);
        if(!matchPassword){
            throw new UnauthorizedException('Credenciais inválidas'); 
        }
        const {senha, ...result} = user

        const payload = {sub: user.idusuario, email: user.email, cpf: user.cpf}
        const access_token = this.jwtService.sign(payload)

        return {...result, access_token};
    }

    async encryptPassword(senha: string) : Promise<string>{
        const salt =  bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);
        return hash;
    }
}
