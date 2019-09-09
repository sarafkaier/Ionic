import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';
import { Question } from '../services/question';
import { QuestionService } from '../services/question.service';


/*test*/
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-categorie-page',
  templateUrl: './categorie-page.page.html',
  styleUrls: ['./categorie-page.page.scss'],
})
export class CategoriePagePage implements OnInit {

  private categories: Categorie[] = [];
  private categoriesTemp: Categorie[] = [];
  private questions: Question[] = [];

  constructor(/*test*/ private httpClient: HttpClient, private categorieService: CategorieService, private questionService : QuestionService, private storage: Storage, private router: Router) {

  }



  ngOnInit() {
    
    /*this.questionService.getAll(this.questions).then((result) => {
      this.categorieService.getAll(this.categories);
    }).then((result) => {
      this.getCategories();
    });*/
    

    /*this.httpClient.get<Question[]>('http://localhost:8080/api/question').subscribe((data) => {
      this.questions = data;
      console.log(this.questions);
    });*/

    /*this.httpClient.get<Categorie[]>('http://localhost:8080/api/categorie').subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });*/


    this.categorieService.getCategories();
    this.categorieService.getCategoriesObservable().subscribe((data) => {
      this.categories = data;
    });

    this.questionService.getQuestions();
    this.questionService.getQuestionsObservable().subscribe((data) => {
      this.questions = data;
    });

    //this.getCategories();

    
    
  }

  getCategories(){
    //let categoriesTemp: Categorie[] = [];
    //categoriesTemp = this.categories;
    console.log(this.categories);
    this.categories.forEach(function(categorie){
      let compteur = 0;
      this.questions.forEach(function(question){
        if(categorie.id == question.categorieId){
          compteur++;
        }
      })
      if(compteur >= 5){
        this.categoriesTemp.push(categorie)
      }
    })
  	
  }

  onClickCategorie(categorieId) {
  	let navigationExtras: NavigationExtras = {
  		queryParams: { id: categorieId }
    }
    this.storage.set('categorieId', this.categories[categorieId].id);
  	this.router.navigate(['quizz-page'], navigationExtras)
  }

}
