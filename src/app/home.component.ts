import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ronaldoImagePath: string;
  messiImagePath: string;
  schweinsteigerImagePath: string;
  neymarImagePath: string;

  constructor() {
    this.ronaldoImagePath = 'assets/images/home-img/ronaldo.png'
    this.messiImagePath = 'assets/images/home-img/messi.png'
    this.schweinsteigerImagePath = 'assets/images/home-img/schweinsteiger.png'
    this.neymarImagePath = 'assets/images/home-img/neymar.png'
  }
}
