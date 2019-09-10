import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {

  private score = this.route.snapshot.params['score'];
  private categorieId = this.route.snapshot.params['categorieId'];


  constructor(private route: ActivatedRoute,
              private navCtrl: NavController) { 
  		
  }

  ngOnInit() {
  }



  goToCategorie(){
    this.navCtrl.navigateForward('categorie');
  }



}
