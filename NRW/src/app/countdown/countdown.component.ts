import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() targetDate: Date = new Date(); // Initialize with a default date
  days: number = 0; // Initialize with 0
  hours: number = 0; // Initialize with 0
  minutes: number = 0; // Initialize with 0
  seconds: number = 0; // Initialize with 0

  ngOnInit(): void {
    this.calculateTimeDifference();

    setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  calculateTimeDifference(): void {
    const timeRemaining = this.targetDate.getTime() - Date.now();

    this.seconds = Math.floor((timeRemaining / 1000) % 60);
    this.minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    this.hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  }

  formatTwoDigits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}