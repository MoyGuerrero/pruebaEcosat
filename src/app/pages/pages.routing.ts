import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
    {
        path: 'principal',
        component: PagesComponent,
        canActivate: [LoginGuard],
        loadChildren: () => import('./rutashijas.module').then(m => m.RutashijasModule)
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlertamientoRoutingModule { }
