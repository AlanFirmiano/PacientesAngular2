import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Paciente } from 'app/_models/paciente';

@Injectable()
export class PacienteService {

  constructor(private http: Http) {}
  public salvarPaciente(paciente:Paciente) : Observable<string>{
    return this.http.post('http://localhost:8080/pacientes/',paciente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    )
  }

  public removerPaciente(paciente:Paciente) : Observable<string>{
    return this.http.delete('http://localhost:8080/pacientes/'+paciente.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

    public listaPaciente () : Observable<any>{
      return this.http.get('http://localhost:8080/pacientes').map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }


}
