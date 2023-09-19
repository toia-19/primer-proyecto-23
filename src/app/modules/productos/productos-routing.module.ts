import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  // TODAS LAS CATEGORÍAS DE LOS PRODUCTOS -> RUTAS
  {
    path:"collares",component:CollaresComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"juguetes",component:JuguetesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
