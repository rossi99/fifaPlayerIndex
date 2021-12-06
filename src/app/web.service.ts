import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {

  }

  player_list: any

  // API that gets data from 'fifaPlayerIndexBE' directory
  getPlayers(page: number) {
    return this.http.get('http://localhost:5000/api/v1.0/players?pn=' + page);
  }

  getPlayer(id: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id);
  }

  getPlayerReview(id: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id + '/reviews');
  }
}
