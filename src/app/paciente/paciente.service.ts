import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Paciente } from 'app/_models/paciente';

@Injectable()
export class PacienteService {

  public paciente:Paciente = null;
  private url:string = "http://localhost:8080/pacientes";

  constructor(private http: Http) {}
  
  public salvarPaciente(paciente:Paciente) : Observable<string>{
    return this.http.post(this.url,paciente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    )
  }
  public editarPaciente(paciente:Paciente) : Observable<string>{
    return this.http.put(this.url,paciente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    )
  }

  public removerPaciente(paciente:Paciente) : Observable<string>{
    return this.http.delete(this.url+'/'+paciente.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public detalhesPaciente(id:number) : Observable<any>{
    return this.http.get(this.url+'/'+id).map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }

    public listaPaciente () : Observable<Paciente[]>{
      return this.http.get(this.url).map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }


}
