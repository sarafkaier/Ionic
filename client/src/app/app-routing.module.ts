import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'quiz/:categorieId', loadChildren: './quizz-page/quizz-page.module#QuizzPagePageModule' },
  { path: 'result/:score/:categorieId', loadChildren: './result-page/result-page.module#ResultPagePageModule' },
  { path: 'categorie', loadChildren: './categorie-page/categorie-page.module#CategoriePagePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

