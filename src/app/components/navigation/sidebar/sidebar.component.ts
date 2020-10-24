import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() titleMenu: string = "";
  @Input() subtitleMenu: string = "";
  @Input() mainIconMenu: string = "fa-cogs";
  @Input() menuItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
