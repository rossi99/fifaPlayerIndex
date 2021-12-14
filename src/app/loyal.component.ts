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
    if (sessionStorage['loyalPage']) {
      this.page = Number(sessionStorage['loyalPage']);
    }

    this.player_list = this.webService.getLoyalPlayers(this.page);
  }

  loyalBackPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['loyalPage'] = this.page;
      this.player_list = this.player_list = this.webService.getLoyalPlayers(this.page);
    }
  }

  loyalNextPage() {
    this.page = this.page + 1;
    sessionStorage['loyalPage'] = this.page;
    this.player_list = this.player_list = this.webService.getLoyalPlayers(this.page);
  }

  player_list: any = [];
  page: number = 1;
}
