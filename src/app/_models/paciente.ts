import { Usuario } from './usuario';

export class Paciente {
  id: number;
  matricula: string;
  nome: string;
  telefone: string;
  parente: string;
  contatoParente: string;
  progresso: number;
  responsavel: Usuario;
}
