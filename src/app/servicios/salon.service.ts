import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  url='https://lunellys.pythonanywhere.com/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    console.log(this.http.get(`${this.url}getAll_salon_evento`))
    return this.http.get(`${this.url}getAll_salon_evento`);
  }
  //insertar
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_salon_evento`, contacto);    
  }
   //eliminar
  baja(id:number) {
    return this.http.delete(`${this.url}delete_salon_evento/${id}`);
  }

   //editar
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update_salon_evento/`+id, contacto);    
  } 
}
