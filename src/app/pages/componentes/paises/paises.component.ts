import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/services/core/paises.service';
import { SearchService } from 'src/app/services/core/search.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit, OnDestroy {

  // Variables Datos
  paisesList: any[] = [];
  // Variables Observables
  subscription$: Subscription;
  // Variables Paises
  defaultBindingsList = [
    { value: 0, label: 'Todos' },
    { value: 1, label: 'Africa' },
    { value: 2, label: 'Americas' },
    { value: 3, label: 'Asia' },
    { value: 4, label: 'Europe' },
    { value: 5, label: 'Oceania' }
  ];
  selectedRegion = null;

  constructor(private svcPaises: PaisesService, private svcSearch: SearchService) { 
    
    // get init all data
    this.getAllData();

    this.subscription$ = this.svcSearch.onListenCriterio().subscribe((criterio: string) => {
      
      if(criterio != '') {
        this.searchCriterio(criterio);
      } else {
        this.getAllData();
      }

    });
    
  }
  
  ngOnInit(): void {
    this.selectedRegion = this.defaultBindingsList[0];
  }
  
  getAllData() {
    this.svcPaises.getAllPaises().subscribe((data:any[]) => {
      this.paisesList = data
    });
  }

  getPaisesByRegion(region: string) {
    this.svcPaises.getPaisesByRegion(region).subscribe((data:any[]) => {
      this.paisesList = data;
    });
  }

  searchCriterio(criterio) {
    console.log('El criterio escrito es: ', criterio);
    // TO DO: 
    this.svcPaises.getPaisByCriterio(criterio).subscribe((data: any[]) => {
      this.paisesList = data;
    });
  }

  onChangeRegion() {
    console.log('La región seleccionada es: ', this.selectedRegion);

    if(this.selectedRegion.value == 0) {
      this.getAllData()
    } else {
      this.getPaisesByRegion(this.selectedRegion.label);
    }

  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
