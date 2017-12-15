import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Responsible } from 'app/_models/responsible';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public salvar(usuario: Responsible) : Observable<string>{
    return this.http.post('http://localhost:8080/users/',usuario).map(
      (res) => res.text()
      ,
      (err) => err.text()
    )
  }

  public remover(usuario: Responsible) : Observable<string>{
    return this.http.delete('http://localhost:8080/users/'+usuario.id).map(
      (res) => res.text()
      ,
      (err) => err.text()
    );
  }

    public listar () : Observable<any>{
      return this.http.get('http://localhost:8080/users').map(
        (res) => res.json()
        ,
        function(err){

        }
      );
    }
}
