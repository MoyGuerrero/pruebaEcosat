import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefountComponent } from './pages/nopagefount/nopagefount.component';
import { LoginRoutingModule } from './login/login.routing';
import { AlertamientoRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: NopagefountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginRoutingModule,
    AlertamientoRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
