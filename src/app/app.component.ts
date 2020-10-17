import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private menuSvc: MainTopBarMenuService) {
    
  }

  title = 'app-real-time';
  miEmpresa: string = 'Grupo Flecha Amarilla';
  periodo: number = 2020;

  menuItems:any[] = [];

  ngOnInit() {
    // Load SideBar Script
    App.init();
    // Load Data
    this.getData();
  }

  getData() {
    this.menuSvc.getItemsMenu().subscribe((data: any) => {
      //Async
      this.menuItems = data;
    });
  }

  listenChildMenuEvent(eventArgs: any) {
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice seleccionado en el Papa es: ', eventArgs.index);
    console.log('El item seleccionado en el Papa es: ', eventArgs.name);
  }

}
