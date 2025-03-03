import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) {}

  isSpecifiedRoute(): boolean {
    const specificRoutes = ['/forum']; // Add your specific routes here
    return specificRoutes.includes(this.router.url);
  }
}
