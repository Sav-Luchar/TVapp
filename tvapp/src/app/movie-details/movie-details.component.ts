import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie
  constructor() { 
    this.movie = {
      name: 'Lion King',
      genre: 'Fantasy',
      image: '',
      summary: 'A story of overcoming past regrets and shame to rediscover true self-worth and belonging.',
      country: 'USA',
      runtime:120

    }
  }

  ngOnInit() {
  }

}
