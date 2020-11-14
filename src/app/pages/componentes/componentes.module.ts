import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { BotonesComponent } from './botones/botones.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { PaisesComponent } from './paises/paises.component';

import { ComponetesRouterModule } from './componentes.routes';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

@NgModule({
  declarations: [
    ComponentesComponent, 
    BotonesComponent, 
    TarjetasComponent, 
    BusquedaComponent, 
    CancelacionComponent, 
    PaisesComponent, PaisDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ComponetesRouterModule
  ]
})
export class ComponentesModule { }
