import { Component } from '@angular/core';

interface TimelineEvent {
  time: string;
  title: string;
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html', 
  styleUrls: ['./program-list.component.scss'], 
})
export class ProgramListComponent {
  lineHeight = 'calc(100% - 6rem)';
  
  events: TimelineEvent[] = [
    { time: '09:00 - 12:00', title: 'Networking Session' },
    { time: '12:00 - 14:00', title: 'Check-in' },
    { time: '14:00 - 17:00', title: 'Exhibition & Job Fair' },
    { time: '17:00 - 19:00', title: 'Opening Ceremony & Launching Competitions' },
    { time: '19:00 - 20:30', title: 'Dinner' },
    { time: '20:30 - 23:00', title: 'Ongoing Challenges: Mentoring Sessions and Technical requirements announcements' },
    { time: '23:00 - 01:00', title: 'Side Activities' }
  ];
}
