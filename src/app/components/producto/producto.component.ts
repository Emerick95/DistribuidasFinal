import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodepService } from 'src/app/service/clientenodep.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  title: string="PRODUCTOS"
  productos:any

  myFormProducto: FormGroup;

  constructor(public servc:ClientenodepService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.myFormProducto = new FormGroup({
      nombreF: new FormControl(''),
      precioF: new FormControl(''),
      descripcionF: new FormControl(''),
      catF: new FormControl(''),
    });
  }

  obtenerProductos(){
    this.servc.getProductos().subscribe((r)=>{
      console.log(r)
      this.productos=r.productos
    })
  }

  ingresarProducto() {
    let nombre = this.myFormProducto.value.nombreF;
    let precioUni=this.myFormProducto.value.precioF;
    let descripcion=this.myFormProducto.value.descripcionF;
    let categoria=this.myFormProducto.value.catF;
    this.servc.addProducto(nombre,precioUni,descripcion,categoria).subscribe((r) => {
      this.obtenerProductos();
      this.myFormProducto = new FormGroup({
        nombreF: new FormControl(''),
        precioF: new FormControl(''),
        descripcionF: new FormControl(''),
        catF: new FormControl(''),
      });
    });
  }

  eliminarProducto(id: string) {
    if (
      !confirm(
        'ALERTA!! va a proceder a eliminar este registro, si desea eliminarlo de click en ACEPTAR\n de lo contrario de click en CANCELAR.'
      )
    ) {
      return false;
    } else {
      this.servc.deleteProducto(id).subscribe((r) => {
        console.log('Datos eliminados');

        this.obtenerProductos();
      });
      return true;
    }
  }

  editarProducto(id: string) {
    console.warn(id)
  }

}
