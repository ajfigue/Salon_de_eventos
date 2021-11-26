import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url='https://lunellys.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    console.log(this.http.get(`${this.url}getAll`))
    return this.http.get(`${this.url}getAll`);
  }
  //insertar
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_alquiler`, contacto);    
  }
   //eliminar
  baja(id:number) {
    return this.http.delete(`${this.url}delete_alquiler/${id}`);
  }

   //editar
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update/`+id, contacto);    
  } 
}
