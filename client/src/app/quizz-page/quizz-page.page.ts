import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavigationExtras } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';
import { QuestionService } from '../services/question.service';
import { Question } from '../services/question';

@Component({
  selector: 'app-quizz-page',
  templateUrl: './quizz-page.page.html',
  styleUrls: ['./quizz-page.page.scss'],
})
export class QuizzPagePage implements OnInit {

  selected = 0;
  categorie = null;
  question = null;
  questions: Question[] = [];
  score = 0;
  compteur = 1;
  categorieId = 0;

  constructor(private storage: Storage, private questionService: QuestionService, private categorieService: CategorieService, private router: Router) {
    
   }

  ngOnInit() {
    this.storage.get('categorieId').then( (val) => {
      this.categorieId = val;
      this.categorie = this.categorieService.get(this.categorieId);
      this.questions = this.questionService.getRandom(this.categorieId, this.questions);
      this.question = this.questions[0];
    });
  }

  onChange($event){
  	console.log($event.detail.value);
  	this.selected = $event.detail.value;
  }

  onValidate($event) {
  	if(this.selected == this.question.bonneReponse){
  		this.score++;
  	}
  	if(this.compteur < (this.questions.length)){
  		this.question = this.questions[this.compteur];
  		this.compteur++;
  	}
  	else {
      this.storage.set('score', this.score);
      this.storage.set('categorieId', this.categorieId);
  		this.router.navigate(['result-page']);
  	}
  }

}
