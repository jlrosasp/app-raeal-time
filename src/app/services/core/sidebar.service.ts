import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'assets/json/sideBar.json';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getItemsSideBar() {
    return this.http.get(endPoint);
  }

}
