import { Component, OnInit } from '@angular/core';
import { MOVIE } from '../data/movie';
import { MOVIEDATA } from '../data/moviedataMOCK';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  moviedata: MOVIE[] = MOVIEDATA;
  movieInfo: MOVIE;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreInfo(movietitle: string) {
    this.movieInfo = this.moviedata.find(movie => movie.title === movietitle);
  }

}
