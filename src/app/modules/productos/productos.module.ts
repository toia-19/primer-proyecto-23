import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { CollaresComponent } from './pages/collares/collares.component';
import { CardCollaresComponent } from './components/card-collares/card-collares.component';

@NgModule({
  declarations: [
    ProductosComponent,
    CardComponent,
    IndumentariaComponent,
    JuguetesComponent,
    CollaresComponent,
    CardCollaresComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports: [
    CardComponent,
    CardCollaresComponent
  ]
})
export class ProductosModule { }
