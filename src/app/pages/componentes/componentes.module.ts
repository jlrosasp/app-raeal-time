import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';

import { BotonesComponent } from './botones/botones.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';

import { ComponetesRouterModule } from './componentes.routes';

@NgModule({
  declarations: [
    ComponentesComponent, 
    BotonesComponent, 
    TarjetasComponent, 
    BusquedaComponent, 
    CancelacionComponent
  ],
  imports: [
    CommonModule,
    ComponetesRouterModule
  ]
})
export class ComponentesModule { }
