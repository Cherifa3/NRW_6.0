import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval when the component is destroyed
    }
  }

  startCountdown(): void {
    const targetDate = new Date('2025-06-27T23:59:59').getTime(); // Set your target date here

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(this.intervalId); // Stop the interval when the countdown reaches zero
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      } else {
        this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      }
    };

    // Initial update
    updateCountdown();

    // Update every second
    this.intervalId = setInterval(updateCountdown, 1000);
  }
}