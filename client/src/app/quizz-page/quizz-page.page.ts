import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../services/question';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../services/categorie';
import { CategorieService } from '../services/categorie.service';

import { ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-quizz-page',
  templateUrl: './quizz-page.page.html',
  styleUrls: ['./quizz-page.page.scss'],
})
export class QuizzPagePage implements OnInit {

  private categorieId = this.route.snapshot.params['categorieId'];

  private categorie: Categorie = new Categorie;
  private questions: Question[] = [];

  private compteur: number = 1;

  private score: number = 0;

  @ViewChild('slides', {read: '', static: true}) ionSlides: IonSlides;

  

  constructor(private questionService: QuestionService,
              private categorieService: CategorieService,
              private route: ActivatedRoute,
              private navCtrl: NavController) {
    
   }

  ngOnInit() {

    this.categorieService.getCategorie(this.categorieId);
    this.categorieService.getCategorieObservable().subscribe((data) => {
      this.categorie = data;
    });


    this.questionService.getQuestions(this.categorieId);
    this.questionService.getQuestionsObservable().subscribe(data => {
      this.questions = data
    });

    this.score = 0;
  }

  onChange(event, goodAnswer){



    parseInt(event.detail.value) === goodAnswer ? this.score += 1 : this.score+=0 ;

    this.ionSlides.isEnd().then((result) =>{
       if(result){
        this.navCtrl.navigateForward('result/' + this.score + "/" + this.categorieId);
       } else {
        this.ionSlides.slideNext();
       }
      });
    
    
    
 

    
  }
  

  

}
