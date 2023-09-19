import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CollaresComponent } from './pages/collares/collares.component';

@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    IndumentariaComponent,
    JuguetesComponent,
    CollaresComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
