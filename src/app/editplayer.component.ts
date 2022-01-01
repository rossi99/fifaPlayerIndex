import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Location } from '@angular/common';

@Component({
  selector: 'editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditPlayerComponent {
  constructor(public webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder, public AuthService: AuthService, private location: Location) {}

  player: any = [];
  editPlayerForm: any;

  ngOnInit() {
    this.player = this.webService.getPlayer(this.route.snapshot.params['id']);

    this.editPlayerForm = this.formBuilder.group({
      // Card Input
      rating: ['', Validators.required],
      position: ['', Validators.required],
      name: ['', Validators.required],
      pace: ['', Validators.required],
      shooting: ['', Validators.required],
      passing: ['', Validators.required],
      dribbling: ['', Validators.required],
      defending: ['', Validators.required],
      physic: ['', Validators.required],

      // Stats Input
      // Pace
      acceleration: ['', Validators.required],
      speed: ['', Validators.required],

      // Shooting
      positioning: ['', Validators.required],
      finishing: ['', Validators.required],
      shotPower: ['', Validators.required],
      longShots: ['', Validators.required],
      volleys: ['', Validators.required],
      penalties: ['', Validators.required],

      // Passing
      vision: ['', Validators.required],
      crossing: ['', Validators.required],
      freeKickAccuracy: ['', Validators.required],
      shortPassing: ['', Validators.required],
      longPassing: ['', Validators.required],
      curve: ['', Validators.required],

      // Dribbling
      agility: ['', Validators.required],
      balance: ['', Validators.required],
      reactions: ['', Validators.required],
      ballControl: ['', Validators.required],
      skillDribbling: ['', Validators.required],
      composure: ['', Validators.required],

      // Defending
      interceptions: ['', Validators.required],
      headingAccuracy: ['', Validators.required],
      defensiveAwareness: ['', Validators.required],
      standingTackle: ['', Validators.required],
      slidingTackle: ['', Validators.required],

      // Physical
      jumping: ['', Validators.required],
      stamina: ['', Validators.required],
      strength: ['', Validators.required],
      aggression: ['', Validators.required],

      // Skill Moves:
      skillMoves: 5,

      // Weak Foot
      weakFoot: 5,

      // Club Joined
      clubJoined: ['', Validators.required],
    });
  }

  updatePlayer() {
    this.webService.editPlayer(this.route.snapshot.params['id'], this.editPlayerForm.value)
      .subscribe((response: any) => {
        this.back();
      });
  }

  back(): void {
    this.location.back()
  }

  isInvalid(control: any) {
    return this.editPlayerForm.controls[control].invalid && this.editPlayerForm.controls[control].touched;
  }

  isUnTouched() {
    return this.editPlayerForm.controls.rating.pristine || this.editPlayerForm.controls.position.pristine ||
    this.editPlayerForm.controls.name.pristine || this.editPlayerForm.controls.pace.pristine || this.editPlayerForm.controls.shooting.pristine ||
    this.editPlayerForm.controls.passing.pristine || this.editPlayerForm.controls.dribbling.pristine || this.editPlayerForm.controls.defending.pristine ||
    this.editPlayerForm.controls.physic.pristine || this.editPlayerForm.controls.acceleration.pristine || this.editPlayerForm.controls.speed.pristine ||
    this.editPlayerForm.controls.positioning.pristine || this.editPlayerForm.controls.finishing.pristine || this.editPlayerForm.controls.shotPower.pristine ||
    this.editPlayerForm.controls.longShots.pristine || this.editPlayerForm.controls.volleys.pristine || this.editPlayerForm.controls.penalties.pristine ||
    this.editPlayerForm.controls.vision.pristine || this.editPlayerForm.controls.crossing.pristine || this.editPlayerForm.controls.freeKickAccuracy.pristine ||
    this.editPlayerForm.controls.shortPassing.pristine || this.editPlayerForm.controls.longPassing.pristine || this.editPlayerForm.controls.curve.pristine ||
    this.editPlayerForm.controls.agility.pristine || this.editPlayerForm.controls.balance.pristine || this.editPlayerForm.controls.reactions.pristine ||
    this.editPlayerForm.controls.ballControl.pristine || this.editPlayerForm.controls.skillDribbling.pristine || this.editPlayerForm.controls.composure.pristine ||
    this.editPlayerForm.controls.interceptions.pristine || this.editPlayerForm.controls.headingAccuracy.pristine || this.editPlayerForm.controls.defensiveAwareness.pristine ||
    this.editPlayerForm.controls.standingTackle.pristine || this.editPlayerForm.controls.slidingTackle.pristine || this.editPlayerForm.controls.jumping.pristine ||
    this.editPlayerForm.controls.stamina.pristine || this.editPlayerForm.controls.strength.pristine || this.editPlayerForm.controls.aggression.pristine ||
    this.editPlayerForm.controls.clubJoined.pristine;
  }
}
