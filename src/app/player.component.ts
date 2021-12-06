import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from './web.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(public webService: WebService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.player_list = this.webService.getPlayer(this.route.snapshot.params['id']);
  }

  player_list: any = [];
}
