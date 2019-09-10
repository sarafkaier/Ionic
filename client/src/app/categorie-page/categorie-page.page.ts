import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';

import { NavController } from '@ionic/angular';







@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.page.html',
  styleUrls: ['./categorie-page.page.scss'],
})
export class CategoriePagePage implements OnInit {

  private categories: Categorie[] = [];

  constructor( private categorieService: CategorieService, 
               private navCtrl: NavController) {

  }



  ngOnInit() {
    this.categorieService.getCategories();
    this.categorieService.getCategoriesObservable().subscribe((data) => {
      this.categories = data;
    });

  }


  goToQuiz(id){
    this.navCtrl.navigateForward('quiz/' + id);

  }
  

  

}
