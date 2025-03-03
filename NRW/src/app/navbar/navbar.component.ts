import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Function to check if the current route is the specified route
  isSpecifiedRoute(): boolean {
    const specifiedRoutes = ['/forum']; // Add your routes here
    return specifiedRoutes.includes(this.router.url);
  }
}