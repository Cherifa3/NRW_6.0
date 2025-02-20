import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home', // Replace with your home component's selector
  templateUrl: './home.component.html', // Replace with your home component's template
  styleUrls: ['./home.component.scss'], // Replace with your home component's styles
})
export class HomeComponent {
  // List of speakers
  speakers = [
    { firstName: 'Abu' , lastName: 'Ruqaya', role: 'Lead Chahweni-Club', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'John' , lastName: 'Doe', role: 'Software Engineer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Jane' , lastName: ' Smith', role: 'Product Manager', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Alice' , lastName: ' Brown', role: 'UI Designer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Bob' , lastName: ' White', role: 'DevOps Engineer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Charlie' , lastName: ' Green', role: 'Marketing Lead', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'David' , lastName: ' Black', role: 'Backend Developer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Emma' , lastName: ' Blue', role: 'Frontend Developer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Frank' , lastName: ' Yellow', role: 'QA Engineer', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Grace' , lastName: ' Red', role: 'Scrum Master', imageSrc: '../../assets/test-pict.png' },
    { firstName: 'Grace' , lastName: ' Red', role: 'Scrum Master', imageSrc: '../../assets/test-pict.png' },
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
