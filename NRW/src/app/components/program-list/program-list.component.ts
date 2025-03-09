import { Component, Input } from '@angular/core';

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
  @Input() day: string = ''; // Input for the day
  @Input() events: TimelineEvent[] = []; // Input for the events
  @Input() lineHeight: number = 1400; // Default line height with a fallback value
  
  // Add these properties and methods for hover functionality
  hoveredIndex: number = -1;

  setHoverState(index: number, isHovered: boolean): void {
    this.hoveredIndex = isHovered ? index : -1;
  }

  isHovered(index: number): boolean {
    return this.hoveredIndex === index;
  }
}