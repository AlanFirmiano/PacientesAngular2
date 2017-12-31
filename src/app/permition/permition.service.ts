import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Permition } from 'app/_models/permition';

@Injectable()
export class PermitionService {
  public permition: Permition = null;
  private url = 'http://localhost:8080/permitions';
  constructor(private http: Http) {}

  public salvarPermissao(permissao: Permition): Observable<string> {
    return this.http.post(this.url, permissao).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );

  }
  public editarPermition(permissao: Permition): Observable<string> {
    return this.http.put(this.url, permissao).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }
  public removerPermition(permissao: Permition): Observable<string> {
    return this.http.delete(this.url+'/'+permissao.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

  public listaPermition (): Observable<any> {
    return this.http.get(this.url).map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }
  public listaPatients (): Observable<any> {
    return this.http.get('http://localhost:8080/patients').map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }
  public listaGrasp (): Observable<any> {
    return this.http.get('http://localhost:8080/grasp').map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }

}
