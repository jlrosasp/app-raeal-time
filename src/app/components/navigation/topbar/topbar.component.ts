import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/core/search.service';

@Component({
  selector: 'navigation-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() menuProfileItems: any[] = [];
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();

  constructor(private searchSvc: SearchService) { }

  ngOnInit(): void {
  }

  onclick_menu(index: number, item: any) {
    this.onClickMenu.emit({
      index,
      name: item.title
    });
  }

  onclick_search(criterio: string) {
    this.searchSvc.sendCriterio(criterio);
  }

}
