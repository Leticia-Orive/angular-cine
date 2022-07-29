import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MoviesFormComponent } from './component/movie-form/movie-form.component';
import { MoviesListComponent } from './component/movie-list/movie-list.component';
import {MoviesService} from './services/movies.service'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesFormComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
