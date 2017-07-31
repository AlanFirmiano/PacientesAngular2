import { Paciente } from './paciente';
import { Atividade } from './atividade';

export class pacienteAtividade{
  id:number;
  duracaoTotal:number;
  status:boolean;
  mensagem:string;
  escala:number;
  Data:Date;
  paciente:Paciente = new Paciente();
  atividade:Atividade = new Atividade();
}