import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public AuthService: AuthService) {}
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private AuthService: AuthService) {}

  canActivate() {
    // Check to see if a user has a valid token
    if (this.AuthService.isAuthenticated$) {
      // If they do, return true and allow the user to load app
      return true;
    }

    // If not, they redirect them to the login page
    this.router.navigate(['/']);
    return false;
  }
}
