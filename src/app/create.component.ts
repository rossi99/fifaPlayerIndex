import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreatePlayerComponent {
  constructor(public webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  playerForm: any;
  dateTime = new Date();

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      // Card Input
      rating: ['', Validators.required],
      position: ['', Validators.required],
      club: "assets/images/player-badge.png",
      nation: "assets/images/player-nation.png",
      image: "assets/images/player-face.png",
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

  createPlayer() {
    this.webService.postPlayer(this.playerForm.value)
      .subscribe((response: any) => {
        this.playerForm.reset();
      });

      console.log(this.playerForm)
  }

  isInvalid(control: any) {
    return this.playerForm.controls[control].invalid && this.playerForm.controls[control].touched;
  }

  isUnTouched() {
    return this.playerForm.controls.rating.pristine || this.playerForm.controls.position.pristine ||
    this.playerForm.controls.name.pristine || this.playerForm.controls.pace.pristine || this.playerForm.controls.shooting.pristine ||
    this.playerForm.controls.passing.pristine || this.playerForm.controls.dribbling.pristine || this.playerForm.controls.defending.pristine ||
    this.playerForm.controls.physic.pristine || this.playerForm.controls.acceleration.pristine || this.playerForm.controls.speed.pristine ||
    this.playerForm.controls.positioning.pristine || this.playerForm.controls.finishing.pristine || this.playerForm.controls.shotPower.pristine ||
    this.playerForm.controls.longShots.pristine || this.playerForm.controls.volleys.pristine || this.playerForm.controls.penalties.pristine ||
    this.playerForm.controls.vision.pristine || this.playerForm.controls.crossing.pristine || this.playerForm.controls.freeKickAccuracy.pristine ||
    this.playerForm.controls.shortPassing.pristine || this.playerForm.controls.longPassing.pristine || this.playerForm.controls.curve.pristine ||
    this.playerForm.controls.agility.pristine || this.playerForm.controls.balance.pristine || this.playerForm.controls.reactions.pristine ||
    this.playerForm.controls.ballControl.pristine || this.playerForm.controls.skillDribbling.pristine || this.playerForm.controls.composure.pristine ||
    this.playerForm.controls.interceptions.pristine || this.playerForm.controls.headingAccuracy.pristine || this.playerForm.controls.defensiveAwareness.pristine ||
    this.playerForm.controls.standingTackle.pristine || this.playerForm.controls.slidingTackle.pristine || this.playerForm.controls.jumping.pristine ||
    this.playerForm.controls.stamina.pristine || this.playerForm.controls.strength.pristine || this.playerForm.controls.aggression.pristine ||
    this.playerForm.controls.clubJoined.pristine;
  }

  isIncomplete() {
    return this.isInvalid('rating') || this.isInvalid('position') || this.isInvalid('name') || this.isInvalid('pace') || this.isInvalid('shooting') ||
    this.isInvalid('passing') || this.isInvalid('dribbling') || this.isInvalid('defending') || this.isInvalid('physic') || this.isInvalid('acceleration') ||
    this.isInvalid('speed') || this.isInvalid('positioning') || this.isInvalid('finishing') || this.isInvalid('shotPower') || this.isInvalid('longShots') ||
    this.isInvalid('volleys') || this.isInvalid('penalties') || this.isInvalid('vision') || this.isInvalid('crossing') || this.isInvalid('freeKickAccuracy') ||
    this.isInvalid('shortPassing') || this.isInvalid('longPassing') || this.isInvalid('curve') || this.isInvalid('agility') || this.isInvalid('balance') ||
    this.isInvalid('reactions') || this.isInvalid('ballControl') || this.isInvalid('skillDribbling') || this.isInvalid('composure') || this.isInvalid('interceptions') ||
    this.isInvalid('headingAccuracy') || this.isInvalid('defensiveAwareness') || this.isInvalid('standingTackle') || this.isInvalid('slidingTackle') || this.isInvalid('jumping') ||
    this.isInvalid('stamina') || this.isInvalid('strength') || this.isInvalid('aggression') || this.isInvalid('clubJoined') || this.isUnTouched();
  }
}
