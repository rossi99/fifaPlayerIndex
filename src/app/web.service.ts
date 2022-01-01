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
    let addPlayer = new FormData();

    // Card Input
    addPlayer.append("rating", player.rating);
    addPlayer.append("position", player.position);
    addPlayer.append("club", player.club);
    addPlayer.append("nation", player.nation);
    addPlayer.append("image", player.image);
    addPlayer.append("name", player.name);
    addPlayer.append("pace", player.pace);
    addPlayer.append("shooting", player.shooting);
    addPlayer.append("passing", player.passing);
    addPlayer.append("dribbling", player.dribbling);
    addPlayer.append("defending", player.defending);
    addPlayer.append("physic", player.physic);

    // Stats Input
    //  - Pace
    addPlayer.append("acceleration", player.acceleration);
    addPlayer.append("speed", player.speed);

    //  - Shooting
    addPlayer.append("positioning", player.positioning);
    addPlayer.append("finishing", player.finishing);
    addPlayer.append("shotPower", player.shotPower);
    addPlayer.append("longShots", player.longShots);
    addPlayer.append("volleys", player.volleys);
    addPlayer.append("penalties", player.penalties);

    //  - Passing
    addPlayer.append("vision", player.vision);
    addPlayer.append("crossing", player.crossing);
    addPlayer.append("freeKickAccuracy", player.freeKickAccuracy);
    addPlayer.append("shortPassing", player.shortPassing);
    addPlayer.append("longPassing", player.longPassing);
    addPlayer.append("curve", player.curve);

    //  - Dribbling
    addPlayer.append("agility", player.agility);
    addPlayer.append("balance", player.balance);
    addPlayer.append("reactions", player.reactions);
    addPlayer.append("ballControl", player.ballControl);
    addPlayer.append("skillDribbling", player.skillDribbling);
    addPlayer.append("composure", player.composure);

    //  - Defending
    addPlayer.append("interceptions", player.interceptions);
    addPlayer.append("headingAccuracy", player.headingAccuracy);
    addPlayer.append("defensiveAwareness", player.defensiveAwareness);
    addPlayer.append("standingTackle", player.standingTackle);
    addPlayer.append("slidingTackle", player.slidingTackle);

    //  - Physical
    addPlayer.append("jumping", player.jumping);
    addPlayer.append("stamina", player.stamina);
    addPlayer.append("strength", player.strength);
    addPlayer.append("aggression", player.aggression);

    //  - Skill Moves
    addPlayer.append("skillMoves", player.skillMoves);

    //  - Weak Foot
    addPlayer.append("weakFoot", player.weakFoot);

    //  - Club joined
    addPlayer.append("clubJoined", player.clubJoined);

    return this.http.post('http://localhost:5000/api/v1.0/players', addPlayer);
  }

  editPlayer(id: any, player: any) {
    let editPlayer = new FormData();

    // Card Input
    editPlayer.append("rating", player.rating);
    editPlayer.append("position", player.position);
    editPlayer.append("club", player.club);
    editPlayer.append("nation", player.nation);
    editPlayer.append("image", player.image);
    editPlayer.append("name", player.name);
    editPlayer.append("pace", player.pace);
    editPlayer.append("shooting", player.shooting);
    editPlayer.append("passing", player.passing);
    editPlayer.append("dribbling", player.dribbling);
    editPlayer.append("defending", player.defending);
    editPlayer.append("physic", player.physic);

    // Stats Input
    //  - Pace
    editPlayer.append("acceleration", player.acceleration);
    editPlayer.append("speed", player.speed);

    //  - Shooting
    editPlayer.append("positioning", player.positioning);
    editPlayer.append("finishing", player.finishing);
    editPlayer.append("shotPower", player.shotPower);
    editPlayer.append("longShots", player.longShots);
    editPlayer.append("volleys", player.volleys);
    editPlayer.append("penalties", player.penalties);

    //  - Passing
    editPlayer.append("vision", player.vision);
    editPlayer.append("crossing", player.crossing);
    editPlayer.append("freeKickAccuracy", player.freeKickAccuracy);
    editPlayer.append("shortPassing", player.shortPassing);
    editPlayer.append("longPassing", player.longPassing);
    editPlayer.append("curve", player.curve);

    //  - Dribbling
    editPlayer.append("agility", player.agility);
    editPlayer.append("balance", player.balance);
    editPlayer.append("reactions", player.reactions);
    editPlayer.append("ballControl", player.ballControl);
    editPlayer.append("skillDribbling", player.skillDribbling);
    editPlayer.append("composure", player.composure);

    //  - Defending
    editPlayer.append("interceptions", player.interceptions);
    editPlayer.append("headingAccuracy", player.headingAccuracy);
    editPlayer.append("defensiveAwareness", player.defensiveAwareness);
    editPlayer.append("standingTackle", player.standingTackle);
    editPlayer.append("slidingTackle", player.slidingTackle);

    //  - Physical
    editPlayer.append("jumping", player.jumping);
    editPlayer.append("stamina", player.stamina);
    editPlayer.append("strength", player.strength);
    editPlayer.append("aggression", player.aggression);

    return this.http.put('http://localhost:5000/api/v1.0/players/' + id + '/edit', editPlayer);
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
    let addReview = new FormData();
    addReview.append("username", review.name);
    addReview.append("comments", review.review);
    addReview.append("rating", review.stars);

    return this.http.post('http://localhost:5000/api/v1.0/players/' + id + '/reviews', addReview);
  }

  editReview(id: any, rid: any, review: any) {
    let editReview = new FormData();
    editReview.append("username", review.name);
    editReview.append("comments", review.review);
    editReview.append("rating", review.stars);

    return this.http.put('http://localhost:5000/api/v1.0/players/' + id + '/reviews/' + rid + '/edit', editReview);
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
