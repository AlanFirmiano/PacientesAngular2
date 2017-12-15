import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Exercise } from 'app/_models/exercise';
import {Object} from "../_models/object";
import {Grasp} from "../_models/grasp";

@Injectable()
export class ExerciseService {
  public atividade: Exercise = null;
  private url = 'http://localhost:8080/exercises';
  private urlGrasp = 'http://localhost:8080/grasp';
  constructor(private http: Http) {}

public salvarAtividade(atividade: Exercise): Observable<string> {
  return this.http.post(this.url, atividade).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );

}
public editarAtividade(atividade: Exercise): Observable<string> {
  return this.http.put(this.url, atividade).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );
}
public removerAtividade(atividade: Exercise): Observable<string> {
  return this.http.delete(this.url+'/'+atividade.id).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );
}
  public getAtividade (atividade: Exercise): Observable<any> {
    return this.http.get(this.url+'/'+atividade.title).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public listaAtividade (): Observable<any> {
    return this.http.get(this.url).map(
      (res) => res.json()
      ,
      (err) => err.text()
    );
  }
  public salvarGrasp(grasp: Grasp): Observable<string> {
    return this.http.post(this.urlGrasp, grasp).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public listarGrasp (): Observable<any> {
    return this.http.get(this.urlGrasp).map(
      (res) => res.json()
      ,
      (err) => err.text()
    );
  }

}
