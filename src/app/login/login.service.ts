import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from 'app/_models/usuario';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public salvar(usuario:Usuario) : Observable<string>{
    return this.http.post('http://localhost:8080/usuarios/',usuario).map(
      (res) => res.text()
      ,
      (err) => err.text()
    )
  }

  public remover(usuario:Usuario) : Observable<string>{
    return this.http.delete('http://localhost:8080/usuarios/'+usuario.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

    public listar () : Observable<any>{
      return this.http.get('http://localhost:8080/usuarios').map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }
}
