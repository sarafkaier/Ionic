import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavigationExtras } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { Question } from '../services/question';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {

  score = 0
  nombreQuestions = 0;
  categorieId = 0;

  constructor(private storage: Storage, private questionService: QuestionService, private router: Router) { 
  		storage.get('score').then( (val) => {
  			this.score = val
      })
      storage.get('categorieId').then( (val) => {
  			this.score = val
  		})
  }

  ngOnInit() {
  }

  retourMenu($event){
    this.storage.set('categorieId', this.categorieId);
    this.router.navigate(['quizz-page']);
  }

}
