import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BotonesComponent } from './botones/botones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { ComponentesComponent } from './componentes.component';
import { PaisesComponent } from './paises/paises.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentesComponent,
        children: [
            { path: 'paises', component: PaisesComponent },
            { path: 'buttons', component: BotonesComponent },
            { path: 'cards', component: TarjetasComponent },
            { path: 'busqueda', component: BusquedaComponent },
            { path: 'cancelacion', component: CancelacionComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponetesRouterModule { }