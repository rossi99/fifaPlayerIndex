import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  constructor(public webService: WebService) {}

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.player_list = this.webService.getPlayers(this.page);
  }

  backPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.player_list = this.player_list = this.webService.getPlayers(this.page);
    }
  }

  nextPage() {
    this.page = this.page + 1;
    sessionStorage['page'] = this.page;
    this.player_list = this.player_list = this.webService.getPlayers(this.page);
  }

  player_list: any = [];
  page: number = 1;
}
