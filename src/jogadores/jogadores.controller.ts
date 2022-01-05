import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDTO } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarJogador(@Body() CriarJogadorDTO: CriarJogadorDTO) {
    const { email } = CriarJogadorDTO;
    return JSON.stringify(`{
      nome: ${email}
    }`);
  }
}
