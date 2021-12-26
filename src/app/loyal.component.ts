import { WebService } from './web.service';
import { Component } from "@angular/core";
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loyal',
  templateUrl: './loyal.component.html',
  styleUrls: ['./loyal.component.css']
})
export class LoyalComponent {
  subscriptions: Subscription[] = [];

  loyal_player_list: any = [];
  page: number = 1;

  config = {
    itemsPerPage: 10,
    currentPage: 1
  }

  constructor(public webService: WebService) {}

  ngOnInit() {
    this.subscriptions.push(this.webService.getLoyalPlayers().subscribe((response: any) => {
      this.loyal_player_list = response;
    }));
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
