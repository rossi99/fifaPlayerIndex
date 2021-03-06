// Angular Imports
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

// Custom Imports
import { AppComponent } from './app.component';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player.component';
import { PlayerReviewComponent } from './review.component';
import { HomeComponent } from './home.component';
import { EditPlayerComponent } from './editplayer.component';
import { EditReviewComponent } from './editreview.component';
import { SkillComponent } from './skill.component';
import { LoyalComponent } from './loyal.component';
import { CreatePlayerComponent } from './create.component';
import { WebService } from './web.service';
import { FilterPipe } from './filter.pipe';

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
    path: 'players/:id/edit',
    component: EditPlayerComponent
  },
  {
    path: 'players/:id/reviews/:rid',
    component: PlayerReviewComponent
  },
  {
    path: 'players/:id/reviews/:rid/edit',
    component: EditReviewComponent
  },
  {
    path: 'skilled-players',
    component: SkillComponent
  },
  {
    path: 'loyal-players',
    component: LoyalComponent
  },
  {
    path: 'create-player',
    canActivate: [AuthGuard],
    component: CreatePlayerComponent
  },
];

@NgModule({
  declarations: [
    AppComponent, PlayersComponent, HomeComponent, PlayerComponent, PlayerReviewComponent, EditPlayerComponent,
    SkillComponent, LoyalComponent, CreatePlayerComponent, EditReviewComponent, FilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), ReactiveFormsModule, NgxPaginationModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev--jll02il.us.auth0.com',
      clientId: 'ZrG6YWJINFIbxakggQ9lVDhQy6NAJapz'
    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
