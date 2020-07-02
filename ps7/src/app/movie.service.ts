import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie(movietitle: string) {
    console.log(`In getMovie`);
    console.log(`MOVIETITLE =${movietitle}`);
    return this.http.post('http://localhost:3000', {movietitle});
  }
}
