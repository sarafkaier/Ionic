import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: Categorie[];

  constructor( private httpClient: HttpClient) {
    this.getAll();
  }

  getAll() {
  	return this.httpClient.get<Categorie[]>('http://localhost:8080/api/categorie').subscribe((data) => {
      this.categories = data;
;    });
  }

 

  get(id: number) {

  	if (id < 0 || id >= this.categories.length) {
  		return null;
  	}
  	return this.categories[id];
  }

}
