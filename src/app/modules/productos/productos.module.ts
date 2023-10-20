import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { CardCollaresComponent } from './components/card-collares/card-collares.component';

@NgModule({
  declarations: [
    CardComponent,
    ProductosComponent,
    CollaresComponent,
    JuguetesComponent,
    IndumentariaComponent,
    CardCollaresComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    CardComponent,
    ProductosComponent,
    CollaresComponent,
    JuguetesComponent,
    IndumentariaComponent
  ]
})
export class ProductosModule { }
