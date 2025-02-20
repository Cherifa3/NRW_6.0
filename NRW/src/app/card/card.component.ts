import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageSrc: string='';
  @Input() firstName: string='';
  @Input() lastName: string='';
  @Input() role: string='';
}

