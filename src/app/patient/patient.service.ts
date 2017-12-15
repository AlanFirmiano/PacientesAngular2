import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Patient } from 'app/_models/patient';
import { Report } from 'app/_models/report';
@Injectable()
export class PatientService {

  public paciente: Patient = null;
  private url:string = 'http://localhost:8080/patients';

  constructor(private http: Http) {}

  public salvarPaciente(paciente: Patient): Observable<string>{
    return this.http.post(this.url, paciente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }
  public editarPaciente(paciente: Patient): Observable<string>{
    return this.http.put(this.url, paciente).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public removerPaciente(paciente: Patient): Observable<string>{
    return this.http.delete(this.url + '/' + paciente.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public detalhesPaciente(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id).map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }

  public atividades (): Observable<any> {
    return this.http.get('http://localhost:8080/exercises').map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }
  public listaAtividades (id: number): Observable<Report[]> {
    return this.http.get('http://localhost:8080/report/byPatient/' + id).map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }

  public listaPaciente(): Observable<Patient[]>{
    return this.http.get(this.url).map(
      (res) => res.json()
      ,
      function(err){}
    );
  }

}
