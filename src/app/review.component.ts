import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Location } from '@angular/common'

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class PlayerReviewComponent {
  constructor(public webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder, public AuthService: AuthService, private location: Location) {}

  player: any = [];
  player_review: any = [];

  ngOnInit() {
    this.player = this.webService.getPlayer(this.route.snapshot.params['id']);
    this.player_review = this.webService.getReview(this.route.snapshot.params['id'], this.route.snapshot.params['rid']);
  }

  back(): void {
    this.location.back()
  }

  deleteAPlayerReview() {
    this.webService.deletePlayerReview(this.route.snapshot.params['id'], this.route.snapshot.params['rid'])
      .subscribe((response: any) => {
        this.back();
      });
  }

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
}
