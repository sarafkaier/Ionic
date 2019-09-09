import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: Observer<Categorie[]>;

  constructor( private httpClient: HttpClient) {

  }


  getCategories(){
    this.httpClient.get<Categorie[]>('http://localhost:8080/api/categorie').subscribe((data) => {
      this.categories.next(data);
    });
  }

  getCategoriesObservable(): Observable<Categorie[]>{
    return new Observable(observer => {
      this.categories = observer;
    })
  }

 

  get(id: number) {

  	if (/*id < 0 || id >= this.categories.length*/ true) {
  		return null;
  	}
  	return this.categories[id];
  }

}
