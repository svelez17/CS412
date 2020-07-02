import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { omdb } from '../../configs/omdbAPI';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(movietitle: string) {
    console.log(`In getMovie`);
    console.log(`MOVIETITLE =${movietitle}`);
    // returns an observable
    // return this.http.get('http://omdbapi.com/?apikey=2b105dde&t=' + movietitle);
    return this.http.post('http://localhost:3000', {movietitle});
  }
}
