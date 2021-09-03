import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesMeliService {

  constructor(private http: HttpClient) { }

  getMeli() {
    return this.http
      .get('https://api.mercadolibre.com/sites/MLA/search?q=hp#json')
      .toPromise();
  }

  getMeliFilter(filtrado:string) {
    return this.http
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${filtrado}`)
      .toPromise();
  }



}
