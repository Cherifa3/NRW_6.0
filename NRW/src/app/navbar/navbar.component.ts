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
    const specifiedRoutes = [ '/Technical-challenges',  '/forum', '/speakers'];
    return specifiedRoutes.includes(this.stripTrailingSlash(this.router.url));
  }

  // Function to check if the current route matches the link's route
  isActiveRoute(route: string): boolean {
    // Special case for the home route ('/'), handle it without trailing slash
    const currentUrl = this.stripTrailingSlash(this.router.url);
    const targetUrl = this.stripTrailingSlash(route);
    return currentUrl === targetUrl || (route === '/' && currentUrl === '/');
  }

  // Helper function to strip trailing slashes from the route
  private stripTrailingSlash(url: string): string {
    return url.endsWith('/') ? url.slice(0, -1) : url;
  }
}
