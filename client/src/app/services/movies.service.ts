import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movies'
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Metodos
  getMovies() {
    return this.http.get(`${this.API_URL}/movies`);
  }

  getMovie(id:string) {
    return this.http.get(`${this.API_URL}/movies/${id}`);
  }

  deleteMovie(id: string) {
    return this.http.delete(`${this.API_URL}/movies/${id}`);
  }

  saveMovie(movie: Movie) {
    return this.http.post(`${this.API_URL}/movies`, movie);
  }

  updateMovie(id:string|number, updatedMovie: Movie):Observable <Movie>{
    return this.http.put(`${this.API_URL}/movies/${id}`, updatedMovie);
  }
}
