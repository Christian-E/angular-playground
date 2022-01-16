import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'movies', 
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) 
  }, 
  { 
    path: 'administration', 
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
