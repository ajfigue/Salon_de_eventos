import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='https://lunellys.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    console.log(this.http.get(`${this.url}getAll_clientes`))
    return this.http.get(`${this.url}getAll_clientes`);
  }
  //insertar
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_clientes`, contacto);    
  }
   //eliminar
  baja(id:number) {
    return this.http.delete(`${this.url}delete_clientes/${id}`);
  }

   //editar
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update_clientes/`+id, contacto);    
  } 
}
