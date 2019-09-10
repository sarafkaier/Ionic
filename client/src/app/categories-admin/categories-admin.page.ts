import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {ServiceCategorieService} from '../services/service-categorie.service';
import { Categorie } from '../services/categorie';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.page.html',
  styleUrls: ['./categories-admin.page.scss'],
})
export class CategoriesAdminPage implements OnInit {

  categories: Categorie[] = null;

  constructor(private categorieService: ServiceCategorieService, private router: Router) {
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
