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

  getQuestions(categorieId){
    this.httpClient.get<Question[]>('http://localhost:8080/api/question/categorie/' + categorieId).subscribe((data) => {
      this.questions.next(data);
    });
  }

  getQuestionsObservable(): Observable<Question[]>{
    return new Observable(observer => {
      this.questions = observer;
    })
  }


  
}
