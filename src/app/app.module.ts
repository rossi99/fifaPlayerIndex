import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player.component';
import { HomeComponent } from './home.component';
import { SkillComponent } from './skill.component';
import { ReactiveFormsModule } from '@angular/forms';

import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'players/:id',
    component: PlayerComponent
  },
  {
    path: 'skilled-players',
    component: SkillComponent
  },

];

@NgModule({
  declarations: [
    AppComponent, PlayersComponent, HomeComponent, PlayerComponent, SkillComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
