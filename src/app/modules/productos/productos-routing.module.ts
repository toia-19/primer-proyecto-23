import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"collares",component:CollaresComponent
  },
  {
    path:"juguetes",component:JuguetesComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
