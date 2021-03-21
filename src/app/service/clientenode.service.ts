import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resourceUsage } from 'process';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {

  URL: string="https://distribuidasmongo.herokuapp.com/api/categoria/"

  constructor(private httpc:HttpClient) { }

  getCategorias(): Observable<Categoria>{
    return this.httpc.get<Categoria>(this.URL);
  }

  addCategoria(nombreF:string){
    let objetoCategoria={nombre:nombreF}
    return this.httpc.post(this.URL,objetoCategoria);
  }

  editCategoria(nombreF:string,idCategoria:string){
    let obj={nombre:nombreF}

    return this.httpc.put(`${this.URL}/${idCategoria}`,obj)
  }

  deleteCategoria(idCategoria:string){
    return this.httpc.delete(this.URL+idCategoria)
  }

  getCategoriaById(idCategoria:string){
    return this.httpc.get<Categoria>(this.URL+idCategoria);
  }
}
