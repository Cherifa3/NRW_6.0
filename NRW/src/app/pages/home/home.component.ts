import { Component, ViewChild, ElementRef } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home', // Replace with your home component's selector
  templateUrl: './home.component.html', // Replace with your home component's template
  styleUrls: ['./home.component.scss'], // Replace with your home component's styles
})
export class HomeComponent {
  faChevronRight = faChevronRight;
  faChevronLeft= faChevronLeft;
  // List of speakers
  speakers = [
    { firstName: 'JIM' , lastName: 'SCHMIEDELER', role: 'Professor at University of Notre Dame', imageSrc: '../../assets/James Schmiedeler.png' },
    { firstName: 'ANIS' , lastName: 'KOUBAA', role: 'Director of Robotics and Internet of Things Unit at Prince Sultan University', imageSrc: '../../assets/anis-koubaa.png' },
    { firstName: 'OUSSEMA' , lastName: 'CHELLY', role: 'ML Cloud Solution Architect , AWS Cloud Solution Architect , Microsoft AI & IoT Lab EMEA', imageSrc: '../../assets/oussema-chelli.png' },
    { firstName: 'CRISTINIA' , lastName: 'MONREAL', role: 'Full professor and head of the Department Intelligent Transport Systems at the Johannes Kepler University Linz, in Austria.', imageSrc: '../../assets/Dr. CristinaOlaverri.png' },
    { firstName: 'OUSSEMA' , lastName: 'KHATIB', role: ' Professor of Computer Science and the Director of the Robotics Laboratory at Stanford University', imageSrc: '../../assets/Khatib-Oussama.png' },
    { firstName: 'ANIS' , lastName: 'SAHBANI', role: 'Associate Professor at Sorbonne University - CEO & Founder of Enova Robotics S.A.', imageSrc: '../../assets/anis_sahbani.png' },
    { firstName: 'FIRAS' , lastName: 'BEN HASSEN', role: 'Deputy Head of Data Science Services Mentor , Entrepreneur (Data, Data and Data)', imageSrc: '../../assets/firas-ben-hassen.png' },
   
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
