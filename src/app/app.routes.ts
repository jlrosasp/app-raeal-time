import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', loadChildren: () => import('./pages/tableros/tableros.module').then(module => module.TablerosModule) },
    { path: 'components', loadChildren: () => import('./pages/componentes/componentes.module').then(module => module.ComponentesModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(modules => modules.LoginModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouterModule { }