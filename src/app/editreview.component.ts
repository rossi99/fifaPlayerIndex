import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Location } from '@angular/common';

@Component({
  selector: 'editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditReviewComponent {
  constructor(public webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder, public AuthService: AuthService, private location: Location) {}

  player_review: any = [];
  editPlayerReviewForm: any;

  ngOnInit() {
    this.editPlayerReviewForm = this.formBuilder.group({
      name: ['', Validators.required],
      review: ['', Validators.required],
      stars: 5
    });

    this.player_review = this.webService.getReview(this.route.snapshot.params['id'], this.route.snapshot.params['rid']);
  }

  back(): void {
    this.location.back()
  }

  updateReview() {
    this.webService.editReview(this.route.snapshot.params['id'], this.route.snapshot.params['rid'], this.editPlayerReviewForm.value)
      .subscribe((response: any) => {
        this.back();
      });
  }

  isInvalid(control: any) {
    return this.editPlayerReviewForm.controls[control].invalid && this.editPlayerReviewForm.controls[control].touched;
  }

  isUnTouched() {
    return this.editPlayerReviewForm.controls.name.pristine || this.editPlayerReviewForm.controls.review.pristine;
  }
}
