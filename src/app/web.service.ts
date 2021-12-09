import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  private playerID: any;

  constructor(private http: HttpClient) {

  }

  player_list: any

  // API that gets data from 'fifaPlayerIndexBE' directory
  getPlayers(page: number) {
    return this.http.get('http://localhost:5000/api/v1.0/players?pn=' + page);
  }

  getPlayer(id: any) {
    this.playerID = id;
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id);
  }

  getReviews(id: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id + '/reviews');
  }

  postReview(review: any) {
    let postData = new FormData();
    postData.append("username", review.name);
    postData.append("comments", review.review);
    postData.append("rating", review.stars);

    return this.http.post('http://localhost:5000/api/v1.0/players/' + this.playerID + '/reviews', postData);
  }

  getSkilledPlayers() {
    return this.http.get('http://localhost:5000/api/v1.0/skilled-players');
  }
}
