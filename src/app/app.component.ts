// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services Imports
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
import { SidebarService } from './services/core/sidebar.service';

// JQuery Variables
declare var App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private menuSvc: MainTopBarMenuService, private sidebarSvc: SidebarService) {
    
  }

  title = 'app-real-time';
  miEmpresa: string = 'Grupo Flecha Amarilla';
  periodo: number = 2020;

  menuItems:any[] = [];
  sidebarItems: any[] = [];

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

    this.sidebarSvc.getItemsSideBar().subscribe((data: any) => {
      //Async
      this.sidebarItems = data;
    });

  }

  listenChildMenuEvent(eventArgs: any) {
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice seleccionado en el Papa es: ', eventArgs.index);
    console.log('El item seleccionado en el Papa es: ', eventArgs.name);
  }

}
