import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Atividade } from 'app/_models/atividade';

@Injectable()
export class AtividadeService {
  public atividade:Atividade = null;
  private url:string = "http://localhost:8080/atividades"
  constructor(private http: Http) {}

public salvarAtividade(atividade:Atividade) : Observable<string>{
  return this.http.post(this.url,atividade).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );

}
public editarAtividade(atividade:Atividade) : Observable<string>{
  return this.http.put(this.url,atividade).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );
}
public removerAtividade(atividade:Atividade) : Observable<string>{
  return this.http.delete(this.url+'/'+atividade.id).map(
    (res) => res.text()
    ,
    (err) => err.text()
  );
}

  public listaAtividade () : Observable<any>{
    return this.http.get(this.url).map(
      (res) => res.json()
      ,
      function(err){

      }
    );
  }


}
