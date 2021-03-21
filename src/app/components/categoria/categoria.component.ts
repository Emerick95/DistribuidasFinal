import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  title: string="CATEGORIAS"
  categorias:any

  myFormCategoria: FormGroup;

  constructor(public servc:ClientenodeService) { 

  }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.myFormCategoria = new FormGroup({
      nombreF: new FormControl('')
    });
  }

  obtenerCategorias(){
    this.servc.getCategorias().subscribe((r)=>{
      console.log(r)
      this.categorias=r.categorias
    })
  }

  ingresarCategoria() {
    let nombre = this.myFormCategoria.value.nombreF;
    this.servc.addCategoria(nombre).subscribe((r) => {
      this.obtenerCategorias();
      this.myFormCategoria = new FormGroup({
        nombreF: new FormControl(''),
      });
    });
  }

  eliminarCategoria(id: string) {
    if (
      !confirm(
        'ALERTA!! va a proceder a eliminar este registro, si desea eliminarlo de click en ACEPTAR\n de lo contrario de click en CANCELAR.'
      )
    ) {
      return false;
    } else {
      this.servc.deleteCategoria(id).subscribe((r) => {
        console.log('Datos eliminados');

        this.obtenerCategorias();
      });
      return true;
    }
  }

  editarCategoria(id: string) {
    console.warn(id)
  }

}
