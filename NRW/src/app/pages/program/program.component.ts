import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  days = [
    { id: 1, name: 'Day 1' },
    { id: 2, name: 'Day 2' },
    { id: 3, name: 'Day 3' }
  ];

  programs = [
    {
      id: 1,
      lineHeight: 720,
      day: 'Friday 27<sup>th</sup> of June 2025', // Day 1
      events: [
        { time: '09:00 - 12:00', title: 'Networking Session' },
        { time: '12:00 - 14:00', title: 'Check-in' },
        { time: '14:00 - 17:00', title: 'Exhibition & Job Fair' },
        { time: '17:00 - 19:00', title: 'Opening Ceremony & Launching Competitions' },
        { time: '19:00 - 20:30', title: 'Dinner' },
        { time: '20:30 - 23:00', title: '<strong>Ongoing Challenges:</strong> Mentoring Sessions and Technical requirements announcements' },
        { time: '23:00 - 01:00', title: 'Side Activities' }
      ]
    },
    {
      id: 2,
      day: 'Saturday 28<sup>th</sup> of June 2025', // Day 2
      lineHeight: 1120,
      events: [
        { time: '07:00 - 09:00', title: 'Breakfast' },
        { time: '09:00 - 10:45', title: '<strong>Keynote 1:</strong> Creating your AI Enabled Startup<br/><strong>Keynote 2:</strong> Continuous connectivity of the vehicular network for both road traffic fluidity and road safety' },
        { time: '11:15 - 13:00', title: '<strong>Keynote 3:</strong> Leveraging the unseen: The Future of Robotics with generative AI<br/><strong>Keynote 4:</strong> Next-Gen Robotics: Leveraging Generative AI for Unprecedented Innovation' },
        { time: '13:00 - 15:00', title: 'Lunch' },
        { time: '15:00 - 16:00', title: '<strong>Plenary Session:</strong> Putting People First in Managing Trade-offs within Wearable Robotics Research' },
        { time: '16:15 - 17:15', title: '<strong>Plenary Session:</strong> New Horizons: Robots Leveraging Human Skills: Deep-Sea Robotics Exploration' },
        { time: '17:30 - 18:30', title: '<strong>Plenary Session:</strong> Make the decision at sensor level with EdgeAI' },
        { time: '19:00 - 21:00', title: 'Dinner' },
        { time: '21:00 - 23:00', title: 'Networking + Ongoing challenges + Side Activities' }
      ]
    },
    {
      id: 3,
      day: 'Sunday 29<sup>th</sup> of June 2025', // Day 3
      lineHeight: 530,
      events: [
        { time: '07:00 - 09:00', title: 'Breakfast' },
        { time: '09:00 - 11:00', title: '<strong>Technical validation:</strong> Computer Vision Applied in Industry 4.0 + Embedded Competitive Programming Contest + Pre-selection + Pitching' },
        { time: '11:00 - 13:00', title: 'TOP 3 presentations (show)' },
        { time: '13:00 - 15:00', title: 'Lunch' },
        { time: '15:00 - 19:00', title: 'Closing Ceremony' }
      ]
    }
  ];

  selectedDayId = 1; // Default to Day 1

  // Function to handle button click
  selectDay(dayId: number): void {
    this.selectedDayId = dayId;
  }

  // Get the selected day's program
  get selectedProgram() {
    return this.programs.find(program => program.id === this.selectedDayId);
  }
}
