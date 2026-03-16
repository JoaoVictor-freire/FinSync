import { Body, Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guards.js';

@ApiTags('Usuários')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({summary: "Resgata todas as contas de um usuário"})
  @Get('mybills')
  async findMyBills(@Request() req) {
    return await this.userService.findUsersBills(req.user.sub);
  }
}
