import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IMovieData {
  show :{
    name: string,
    genres:string,
    premiered: Date,
    image: {},
    summary: string,
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient : HttpClient) { }
}
