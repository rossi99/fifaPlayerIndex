import { Component } from "@angular/core";
import { WebService } from './web.service';

@Component({
  selector: 'loyal',
  templateUrl: './loyal.component.html',
  styleUrls: ['./loyal.component.css']
})
export class LoyalComponent {
  constructor(public webService: WebService) {}

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }

    this.player_list = this.webService.getLoyalPlayers(this.page);
  }

  backPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.player_list = this.player_list = this.webService.getLoyalPlayers(this.page);
    }
  }

  nextPage() {
    this.page = this.page + 1;
    sessionStorage['page'] = this.page;
    this.player_list = this.player_list = this.webService.getLoyalPlayers(this.page);
  }

  player_list: any = [];
  page: number = 1;
}
