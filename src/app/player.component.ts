import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  // string vars to hold image path
  guy1 = 'assets/images/avatars/guy1.png'
  guy2 = 'assets/images/avatars/guy2.png'
  girl1 = 'assets/images/avatars/girl1.png'
  girl2 = 'assets/images/avatars/girl2.png'

  // Create a list to hold reviewer images
  reviewer_img = [this.guy1, this.guy2, this.girl1, this.girl2]

  // get random image for review
  random_img = Math.floor(Math.random() * this.reviewer_img.length)
  selected_img = this.reviewer_img[this.random_img]

  constructor(public webService: WebService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.player_list = this.webService.getPlayer(this.route.snapshot.params['id']);
    this.reviews = this.webService.getReviews(this.route.snapshot.params['id']);
  }

  player_list: any = [];
  reviews: any = [];
}
