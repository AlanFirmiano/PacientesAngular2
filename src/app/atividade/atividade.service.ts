import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Atividade } from 'app/_models/atividade';

@Injectable()
export class AtividadeService {

  constructor(private http: Http) {}

public salvarAtividade(atividade:Atividade) : Observable<string>{
  return this.http.post('http://localhost:8080/atividades/',atividade).map(
    (res) => res.text()
    ,
    (err) => err.text()
  )
}

public removerAtividade(atividade:Atividade) : Observable<string>{
  return this.http.delete('http://localhost:8080/atividades/'+atividade.id).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );
}

  public listaAtividade () : Observable<any>{
    return this.http.get('http://localhost:8080/atividades').map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }


}
