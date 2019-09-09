import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';
import { Question } from '../services/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.page.html',
  styleUrls: ['./categorie-page.page.scss'],
})
export class CategoriePagePage implements OnInit {

  categories: Categorie[];
  questions: Question[] = null;

  constructor(private categorieService: CategorieService, private questionService : QuestionService, private storage: Storage, private router: Router) {

  }

  getCategories(){
    let categoriesTemp: Categorie[] = null;
    categoriesTemp = this.categorieService.categories;
    categoriesTemp.forEach(function(categorie){
      let compteur = 0;
      this.questions.forEach(function(question){
        if(categorie.id == question.categorieId){
          compteur++;
        }
      })
      if(compteur >= 5){
        this.categories.push(categorie)
      }
    })
  	
  }

  ngOnInit() {
    
    this.questions = this.questionService.getAll();
    this.getCategories();
    console.log(this.categories);
  }

  onClickCategorie(categorieId) {
  	/*let navigationExtras: NavigationExtras = {
  		queryParams: { id: categorieId }
    }
    this.storage.set('categorieId', this.categories[categorieId].id);
  	this.router.navigate(['quizz-page'], navigationExtras)*/
  }

}
