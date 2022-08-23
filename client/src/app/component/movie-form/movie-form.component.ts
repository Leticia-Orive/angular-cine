import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MoviesFormComponent implements OnInit {

  @HostBinding('class') clasees = 'row';

  movie: Movie = {
    id: '',
    image: '',
    title: '',
    description: '',
    director: '',
    actor: '',
    genre: '',
    created_at: new Date(),
  };
  edit: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']){
      this.moviesService.getMovie(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.movie = res;
            this.edit = true

          },
          err => console.error(err)
        )
    }
  }
  // Metodo
  saveNewMovie() {
    delete this.movie.created_at,
    delete this.movie.id,
    this.moviesService.saveMovie(this.movie)
     .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/movies']) 
      },
      err => console.log(err)
     )
  }

  updateMovie(){
   //delete this.movie.created_at,
   //this.moviesService.updateMovie(this.movie.id, this.movie)
    //.subscribe(
     // res => {
      //  console.log(res);
      //},
      //err => console.log(err)
    //)
  }
  
}
