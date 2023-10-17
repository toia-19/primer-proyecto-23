import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSlideToggleModule
  ]
})
export class NosotrosModule { }
