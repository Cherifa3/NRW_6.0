import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent {
  @Input() imageSrc: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() role: string = '';
  @Input() linkedinLink: string = ''; 
}