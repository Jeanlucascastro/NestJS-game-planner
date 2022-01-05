import { Injectable,Logger } from '@nestjs/common';
import { CriarJogadorDTO } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import v4 as uuidv4 from './uuid';

@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];



  private readonly logger = new Logger(JogadoresService.name);

  async criarJogador(criaJogadorDTO: CriarJogadorDTO) Promise<void> {
        this.logger.log(`criaJogadorDTO: ${criaJogadorDTO}`);
  }

  private criar(criaJogadorDTO:CriarJogadorDTO); void{
    const { nome, telefone, email} = criaJogadorDTO
    const jogador:Jogador = {
        _id: uuidv4(),
        nome,
        email,

    },
  }


}
function uuidv4() {
    throw new Error('Function not implemented.');
}

