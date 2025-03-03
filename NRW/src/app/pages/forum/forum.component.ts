import { Component } from '@angular/core';
import { faShare  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  faShare  = faShare ;
}
