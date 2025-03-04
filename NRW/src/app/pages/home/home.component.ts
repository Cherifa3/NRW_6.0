import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home', // Replace with your home component's selector
  templateUrl: './home.component.html', // Replace with your home component's template
  styleUrls: ['./home.component.scss'], // Replace with your home component's styles
})
export class HomeComponent {

  // List of speakers
  speakers = [
    { firstName: 'JIM' , lastName: 'SCHMIEDELER', role: 'Professor at University of Notre Dame', imageSrc: '../../assets/James Schmiedeler.png' },
    { firstName: 'ANIS' , lastName: 'KOUBAA', role: 'Director of Robotics and Internet of Things Unit at Prince Sultan University Founder of ROS Community in Tunisia', imageSrc: '../../assets/anis-koubaa.png' },
    { firstName: 'OUSSEMA' , lastName: 'CHELLY', role: 'ML Cloud Solution ArchitectAWS Cloud Solution ArchitectMicrosoft AI & IoT Lab EMEA', imageSrc: '../../assets/oussema-chelli.png' },
    { firstName: 'CRISTINIAOLAVERRI' , lastName: 'MONREAL', role: 'full professor and head of the Department Intelligent Transport Systems at the Johannes Kepler University Linz, in Austria.', imageSrc: '../../assets/Dr. CristinaOlaverri.png' },
    { firstName: 'OUSSEMA' , lastName: 'KHATIB', role: ' Professor of Computer Science and the Director of the Robotics Laboratory at Stanford UniversityPresident of the International Foundation of Robotics Research (IFRR) and an IEEE Fellow', imageSrc: '../../assets/Khatib-Oussama.png' },
    { firstName: 'ANIS' , lastName: 'SAHBANI', role: 'Associate Professor at Sorbonne University - CEO & Founder of Enova Robotics S.A.', imageSrc: '../../assets/anis_sahbani.png' },
    { firstName: 'FIRAS' , lastName: 'BEN HASSEN', role: 'Deputy Head of Data Science Services MentorEntrepreneur (Data, Data and Data)', imageSrc: '../../assets/firas-ben-hassen.png' },
   
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
