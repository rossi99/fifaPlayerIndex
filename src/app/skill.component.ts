import { Component } from "@angular/core";
import { WebService } from './web.service';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  constructor(public webService: WebService) {}

  ngOnInit() {
    this.player_list = this.webService.getSkilledPlayers();
  }

  player_list: any = [];
}
