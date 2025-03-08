import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NRW';
 
  constructor(private router: Router) {}

    isSpecifiedRoute() : boolean {
      const specificRoutes = [ '/Technical-challenges',  '/forum', '/speakers']; // Add your specific routes here
      return specificRoutes.includes(this.router.url);
    }

    isAnotherCondition(): boolean {
      return this.router.url === '/' || this.router.url === '';
    }
  

}
