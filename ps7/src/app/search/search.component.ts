import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieInfo: any;
  movieControl: FormControl = new FormControl('', Validators.required);

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }

  getMovie() {
    this.movieService.getMovie(this.movieControl.value).subscribe(
      response => {
        this.movieInfo = response["movieData"];
        console.log(`This came from cache: ${response["cached"]}`);
      }
    );
  }

}
