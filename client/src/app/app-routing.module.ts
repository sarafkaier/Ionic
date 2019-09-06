import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  { path: 'quizz-page', loadChildren: './quizz-page/quizz-page.module#QuizzPagePageModule' },
  { path: 'result-page', loadChildren: './result-page/result-page.module#ResultPagePageModule' },
  { path: 'categorie-page', loadChildren: './categorie-page/categorie-page.module#CategoriePagePageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

