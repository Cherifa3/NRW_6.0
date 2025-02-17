import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home', // Replace with your home component's selector
  templateUrl: './home.component.html', // Replace with your home component's template
  styleUrls: ['./home.component.scss'], // Replace with your home component's styles
})
export class HomeComponent {
  // List of speakers
  speakers = [
    { name: 'Abu Ruqaya', role: 'Lead Chahweni-Club', imageSrc: '../../assets/test-pict.png' },
    { name: 'John Doe', role: 'Software Engineer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Jane Smith', role: 'Product Manager', imageSrc: '../../assets/test-pict.png' },
    { name: 'Alice Brown', role: 'UI Designer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Bob White', role: 'DevOps Engineer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Charlie Green', role: 'Marketing Lead', imageSrc: '../../assets/test-pict.png' },
    { name: 'David Black', role: 'Backend Developer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Emma Blue', role: 'Frontend Developer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Frank Yellow', role: 'QA Engineer', imageSrc: '../../assets/test-pict.png' },
    { name: 'Grace Red', role: 'Scrum Master', imageSrc: '../../assets/test-pict.png' },
    { name: 'Grace Red', role: 'Scrum Master', imageSrc: '../../assets/test-pict.png' },
  ];

  // Reference to the speakers container for scrolling
  @ViewChild('speakersContainer', { static: true }) speakersContainer!: ElementRef;

  // Scroll left
  scrollLeft(): void {
    this.speakersContainer.nativeElement.scrollBy({
      left: -300, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }

  // Scroll right
  scrollRight(): void {
    this.speakersContainer.nativeElement.scrollBy({
      left: 300, // Adjust scroll distance as needed
      behavior: 'smooth',
    });
  }
}
