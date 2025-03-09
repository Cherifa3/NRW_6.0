import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faXmark = faXmark;
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

  toggleMenu(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      document.body.classList.add('no-scroll'); // Disable scrolling
    } else {
      document.body.classList.remove('no-scroll'); // Enable scrolling
    }
  }
}
