import { Component, OnInit } from '@angular/core';
import { Categorie } from '../services/categorie';
import {ServiceCategorieService} from '../services/service-categorie.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-categorie-for-admin',
  templateUrl: './categorie-for-admin.page.html',
  styleUrls: ['./categorie-for-admin.page.scss'],
})
export class CategorieForAdminPage implements OnInit {

  categories: Categorie[] = null;

  constructor (private categorieService: ServiceCategorieService, private router: Router) {
    this.getCategories();
   }

  ngOnInit() {
  }

  getCategories() {
    this.categories = this.categorieService.getAllCategories();
  }

  onClick(categorieId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: categorieId},
    };
    this.router.navigate(['home'], navigationExtras);
 
  }

}
