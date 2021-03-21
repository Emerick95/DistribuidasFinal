import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  
  {path: 'categoria', component: CategoriaComponent},
  {path: 'producto', component: ProductoComponent},
  {path: '',pathMatch:'full', redirectTo: 'home' },
  {path: '**',pathMatch:'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
