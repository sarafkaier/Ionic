import { Injectable } from '@angular/core';
import {Categorie} from './categorie';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategorieService {
  categories: Categorie[] = [
    // tslint:disable-next-line:max-line-length
    {id: 0, title: 'Littérature', description: 'Venez relever le défis sur la littérature contemporaine et passée ! ', image: 'https://picsum.photos/id/100/800/300'},
    // tslint:disable-next-line:max-line-length
    {id: 1, title: 'Histoire – Géographie', description: 'Mettez à l\'épreuve vos connaissance tant sur l\'histoire mondiale que sur la géographie. ', image: 'https://picsum.photos/id/1022/800/300'},
    // tslint:disable-next-line:max-line-length
    {id: 2, title: 'Sciences', description: 'Vous êtes passionnés par les sciences? Découvrez notre quiz général en la matière. ', image: 'https://picsum.photos/id/102/800/300'},
    // tslint:disable-next-line:max-line-length
    {id: 3, title: 'Cinéma', description: 'Pour les fans de films en tout genre, cinéphiles ou simple amateur, ce quiz est pour vous ! Bonne chance.', image: 'https://picsum.photos/id/1044/800/300'},
    // tslint:disable-next-line:max-line-length
    {id: 4, title: 'Actualités', description: 'Vous êtes un féru d\'actualités? Vous êtes à l\'affut des dernières news? Relevez notre défis actualités ! ', image: 'https://picsum.photos/id/1079/800/300'},
    // tslint:disable-next-line:max-line-length
    {id: 5, title: 'Célébrités', description: 'Vous êtes fan de people? Ce quiz est fait pour vous. Mettez à l\'épreuve vos connaissances en la matière!', image: 'https://picsum.photos/id/1035/800/300'},
  ];

  constructor() { }

  getAllCategories() {
    return this.categories;
  }
  get(id: any) {
    if (id < 0 || id >= this.categories.length) {
      return null;
    }
    return this.categories[id];
  }

}
