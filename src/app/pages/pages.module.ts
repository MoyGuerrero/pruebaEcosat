import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { NopagefountComponent } from './nopagefount/nopagefount.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertamientoComponent } from './alertamiento/alertamiento.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FechaPipe } from '../pipes/fecha.pipe';
import { PalabraBuscadaPipe } from '../pipes/palabra-buscada.pipe';

@NgModule({
  declarations: [
    PagesComponent,
    NopagefountComponent,
    DashboardComponent,
    AlertamientoComponent,
    FechaPipe,
    PalabraBuscadaPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
