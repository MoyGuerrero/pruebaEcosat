import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertamientoComponent } from './alertamiento/alertamiento.component';
import { RouterModule, Routes } from '@angular/router';

const hijasrutas: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alertamiento', component: AlertamientoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(hijasrutas)],
  exports: [RouterModule]
})
export class RutashijasModule { }
