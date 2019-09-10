import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategorieForAdminPage } from './categorie-for-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieForAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategorieForAdminPage]
})
export class CategorieForAdminPageModule {}
