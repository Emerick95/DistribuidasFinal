import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resourceUsage } from 'process';
import { Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ClientenodepService {
  URL: string="https://distribuidasmongo.herokuapp.com/api/producto/"

  constructor(private httpc:HttpClient) { }

  getProductos(): Observable<Producto>{
    return this.httpc.get<Producto>(this.URL);
  }

  addProducto(nombreF:string,precioF:string,descripcionF:string,catF:string){
    let objetoProducto={
      nombre:nombreF,
      precioUni:precioF,
      descripcion:descripcionF,
      categoria:catF
    }
    return this.httpc.post(this.URL,objetoProducto);
  }

  editProducto(nombreF:string,idProducto:string){
    let obj={nombre:nombreF}

    return this.httpc.put(`${this.URL}/${idProducto}`,obj)
  }

  deleteProducto(idProducto:string){
    return this.httpc.delete(this.URL+idProducto)
  }

  getProductoById(idProducto:string){
    return this.httpc.get<Producto>(this.URL+idProducto);
  }
}
