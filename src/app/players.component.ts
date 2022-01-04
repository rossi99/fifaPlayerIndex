import { WebService } from './web.service';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  subscriptions: Subscription[] = [];

  searchText: string = '';
  player_list: any = [];
  page: number = 1;

  config = {
    itemsPerPage: 18,
    currentPage: 1
  }

  constructor(public webService: WebService) {}

  ngOnInit() {
    this.subscriptions.push(this.webService.getPlayers().subscribe((response: any) => {
      this.player_list = response;
    }));
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}

