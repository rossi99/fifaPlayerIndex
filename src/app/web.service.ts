import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  playerID: any;
  reviewID: any;

  constructor(private http: HttpClient) {

  }

  player_list: any

  // API that gets data from 'fifaPlayerIndexBE' directory
  getPlayers() {
    return this.http.get('http://localhost:5000/api/v1.0/players');
  }

  getPlayer(id: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id);
  }

  postPlayer(player: any) {
    let postData = new FormData();

    // Card Input
    postData.append("rating", player.rating);
    postData.append("position", player.position);
    postData.append("club", player.club);
    postData.append("nation", player.nation);
    postData.append("image", player.image);
    postData.append("name", player.name);
    postData.append("pace", player.pace);
    postData.append("shooting", player.shooting);
    postData.append("passing", player.passing);
    postData.append("dribbling", player.dribbling);
    postData.append("defending", player.defending);
    postData.append("physic", player.physic);

    // Stats Input
    //  - Pace
    postData.append("acceleration", player.acceleration);
    postData.append("speed", player.speed);

    //  - Shooting
    postData.append("positioning", player.positioning);
    postData.append("finishing", player.finishing);
    postData.append("shotPower", player.shotPower);
    postData.append("longShots", player.longShots);
    postData.append("volleys", player.volleys);
    postData.append("penalties", player.penalties);

    //  - Passing
    postData.append("vision", player.vision);
    postData.append("crossing", player.crossing);
    postData.append("freeKickAccuracy", player.freeKickAccuracy);
    postData.append("shortPassing", player.shortPassing);
    postData.append("longPassing", player.longPassing);
    postData.append("curve", player.curve);

    //  - Dribbling
    postData.append("agility", player.agility);
    postData.append("balance", player.balance);
    postData.append("reactions", player.reactions);
    postData.append("ballControl", player.ballControl);
    postData.append("skillDribbling", player.skillDribbling);
    postData.append("composure", player.composure);

    //  - Defending
    postData.append("interceptions", player.interceptions);
    postData.append("headingAccuracy", player.headingAccuracy);
    postData.append("defensiveAwareness", player.defensiveAwareness);
    postData.append("standingTackle", player.standingTackle);
    postData.append("slidingTackle", player.slidingTackle);

    //  - Physical
    postData.append("jumping", player.jumping);
    postData.append("stamina", player.stamina);
    postData.append("strength", player.strength);
    postData.append("aggression", player.aggression);

    //  - Skill Moves
    postData.append("skillMoves", player.skillMoves);

    //  - Weak Foot
    postData.append("weakFoot", player.weakFoot);

    //  - Club joined
    postData.append("clubJoined", player.clubJoined);

    return this.http.post('http://localhost:5000/api/v1.0/players', postData);
  }

  editPlayer(id: any, player: any) {
    let postData = new FormData();

    // Card Input
    postData.append("rating", player.rating);
    postData.append("position", player.position);
    postData.append("club", player.club);
    postData.append("nation", player.nation);
    postData.append("image", player.image);
    postData.append("name", player.name);
    postData.append("pace", player.pace);
    postData.append("shooting", player.shooting);
    postData.append("passing", player.passing);
    postData.append("dribbling", player.dribbling);
    postData.append("defending", player.defending);
    postData.append("physic", player.physic);

    // Stats Input
    //  - Pace
    postData.append("acceleration", player.acceleration);
    postData.append("speed", player.speed);

    //  - Shooting
    postData.append("positioning", player.positioning);
    postData.append("finishing", player.finishing);
    postData.append("shotPower", player.shotPower);
    postData.append("longShots", player.longShots);
    postData.append("volleys", player.volleys);
    postData.append("penalties", player.penalties);

    //  - Passing
    postData.append("vision", player.vision);
    postData.append("crossing", player.crossing);
    postData.append("freeKickAccuracy", player.freeKickAccuracy);
    postData.append("shortPassing", player.shortPassing);
    postData.append("longPassing", player.longPassing);
    postData.append("curve", player.curve);

    //  - Dribbling
    postData.append("agility", player.agility);
    postData.append("balance", player.balance);
    postData.append("reactions", player.reactions);
    postData.append("ballControl", player.ballControl);
    postData.append("skillDribbling", player.skillDribbling);
    postData.append("composure", player.composure);

    //  - Defending
    postData.append("interceptions", player.interceptions);
    postData.append("headingAccuracy", player.headingAccuracy);
    postData.append("defensiveAwareness", player.defensiveAwareness);
    postData.append("standingTackle", player.standingTackle);
    postData.append("slidingTackle", player.slidingTackle);

    //  - Physical
    postData.append("jumping", player.jumping);
    postData.append("stamina", player.stamina);
    postData.append("strength", player.strength);
    postData.append("aggression", player.aggression);

    return this.http.put('http://localhost:5000/api/v1.0/players/' + id + '/edit', postData);
  }

  deletePlayer(id: any) {
    return this.http.delete('http://localhost:5000/api/v1.0/players/' + id);
  }

  getReviews(id: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id + '/reviews');
  }

  getReview(id: any, rid: any) {
    return this.http.get('http://localhost:5000/api/v1.0/players/' + id + '/reviews/' + rid);
  }

  postReview(id: any, review: any) {
    let postData = new FormData();
    postData.append("username", review.name);
    postData.append("comments", review.review);
    postData.append("rating", review.stars);

    return this.http.post('http://localhost:5000/api/v1.0/players/' + id + '/reviews', postData);
  }

  deletePlayerReview(id: any, rid: any) {
    return this.http.delete('http://localhost:5000/api/v1.0/players/' + id + '/reviews/' + rid);
  }

  getSkilledPlayers() {
    return this.http.get('http://localhost:5000/api/v1.0/skilled-players');
  }

  getLoyalPlayers() {
    return this.http.get('http://localhost:5000/api/v1.0/loyal-players');
  }
}
