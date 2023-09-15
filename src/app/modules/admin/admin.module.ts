import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule
  ],
  exports:[
    AdminComponent,
    TableComponent,
    MatIconModule
  ]
})
export class AdminModule { }
