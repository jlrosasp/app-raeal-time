import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const END_POINT = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  /**
   * Get All Countries
   */
  getAllPaises() {
    return this.http.get(`${END_POINT}/all`);
  }

  /**
   * 
   * @param region => Africa, Americas, Asia, Europe, Oceania
   * 
   */
  getPaisesByRegion(region: string) {
    return this.http.get(`${END_POINT}/region/${region}`);
  }

  /**
   * 
   * @param criterio => Cualquier criterio de busqueda (nombre o parte del nombre del país)
   */
  getPaisByCriterio(criterio:string) {
    return this.http.get(`${END_POINT}/name/${criterio}`);
  }

  /**
   * 
   * @param code 
   */
  getPaisByCode(code: string) {
    return this.http.get(`${END_POINT}/alpha/${code}`);
  }

}
