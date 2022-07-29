import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesListComponent} from './components/movies-list/movies-list.component'
import {MoviesFormComponent} from './components/movies-form/movies-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesListComponent,
  },

  {
    path: 'movies/add',
    component: MoviesFormComponent,
  },
  {
    path: 'movies/edit/add:id',
    component: MoviesFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
