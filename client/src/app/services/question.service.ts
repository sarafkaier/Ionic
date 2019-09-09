import { Injectable } from '@angular/core';
import { Question } from './question';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../services/categorie';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Observer<Question[]>;

  constructor(private httpClient: HttpClient) { }

  getQuestions(){
    this.httpClient.get<Question[]>('http://localhost:8080/api/question').subscribe((data) => {
      this.questions.next(data);
    });
  }

  getQuestionsObservable(): Observable<Question[]>{
    return new Observable(observer => {
      this.questions = observer;
    })
  }

  get(id: number){
    return this.questions[id];
  }

  count(){
    /*return this.questions.length;*/
  }

  getRandom(categorieId: number, questions: Question[]) {
	let questionsTemp: Question[] = []
	let tableauIntermediaire: Question[] = []
	let tableauRandom: number[] = []
	questions.forEach(function(question){
		if(question.categorieId==categorieId){
			tableauIntermediaire.push(question);
		}
	})
  	for(let i=0; i < 3; i++){
  		let compteur = 0
  		let random = Math.floor(Math.random() * tableauIntermediaire.length);
  		while(compteur < tableauRandom.length){
  			if (tableauRandom[compteur]==random){
  				random = Math.floor(Math.random() * tableauIntermediaire.length);
  				compteur = -1;
  			}
  			compteur++;
  		}
  		tableauRandom.push(random);
  		tableauIntermediaire.forEach(function(question){
  			if(random==question.id){
  				questionsTemp.push(question);
  			}
  		})
  	}
  	return questionsTemp;
  }
}
