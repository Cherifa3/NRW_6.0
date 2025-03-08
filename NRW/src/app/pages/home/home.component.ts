import { Component, ViewChild, ElementRef ,OnInit} from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home', // Replace with your home component's selector
  templateUrl: './home.component.html', // Replace with your home component's template
  styleUrls: ['./home.component.scss'], // Replace with your home component's styles
})
export class HomeComponent  implements OnInit {
    yourTargetDate = new Date('2025-06-27T23:59:59'); // Set your target date here
  
  constructor() { }

  ngOnInit(): void {
    this.calculateMarqueeWidth();
    this.setupInfiniteMarquee();
  }

  calculateMarqueeWidth() {
    const marqueeGroups = document.querySelectorAll('.marquee-group');
    marqueeGroups.forEach(group => {
      const htmlGroup = group as HTMLElement; // Cast to HTMLElement
      let totalWidth = 0;
      htmlGroup.querySelectorAll('img').forEach(img => {
        totalWidth += img.clientWidth + 32; // Add gap (2rem = 32px)
      });
      htmlGroup.style.width = `${totalWidth}px`; // Set explicit width
    });
  }

  setupInfiniteMarquee() {
    const marqueeContent = document.querySelector('.marquee-content') as HTMLElement; // Cast to HTMLElement
    const marqueeGroup = document.querySelector('.marquee-group') as HTMLElement; // Cast to HTMLElement
  
    if (marqueeContent && marqueeGroup) {
      // Calculate the total width of one marquee-group
      let totalWidth = 0;
      marqueeGroup.querySelectorAll('img').forEach(img => {
        totalWidth += img.clientWidth + 32; // Add gap (2rem = 32px)
      });
  
      // Calculate how many duplicates are needed to cover the viewport
      const viewportWidth = window.innerWidth;
      const numberOfDuplicates = Math.ceil((viewportWidth * 2) / totalWidth);
  
      // Duplicate the marquee group enough times
      for (let i = 0; i < numberOfDuplicates; i++) {
        const clone = marqueeGroup.cloneNode(true) as HTMLElement;
        marqueeContent.appendChild(clone);
      }
  
      // Set the width of the marquee-content to the total width of all duplicates
      marqueeContent.style.width = `${totalWidth * numberOfDuplicates}px`;
    }
  }

  faChevronRight = faChevronRight;
  faChevronLeft= faChevronLeft;
  // List of speakers
  speakers = [
    { firstName: 'JIM' , lastName: 'SCHMIEDELER', role: 'Professor at University of Notre Dame', imageSrc: '../../assets/speakers/James Schmiedeler.png' },
    { firstName: 'ANIS' , lastName: 'KOUBAA', role: 'Director of Robotics and Internet of Things Unit at Prince Sultan University', imageSrc: '../../assets/speakers/anis-koubaa.png' },
    { firstName: 'OUSSEMA' , lastName: 'CHELLY', role: 'ML Cloud Solution Architect , AWS Cloud Solution Architect , Microsoft AI & IoT Lab EMEA', imageSrc: '../../assets/speakers/oussema-chelli.png' },
    { firstName: 'CRISTINIA' , lastName: 'MONREAL', role: 'Full professor and head of the Department Intelligent Transport Systems at the Johannes Kepler University Linz, in Austria.', imageSrc: '../../assets/speakers/Dr. CristinaOlaverri.png' },
    { firstName: 'OUSSEMA' , lastName: 'KHATIB', role: ' Professor of Computer Science and the Director of the Robotics Laboratory at Stanford University', imageSrc: '../../assets/speakers/Khatib-Oussama.png' },
    { firstName: 'ANIS' , lastName: 'SAHBANI', role: 'Associate Professor at Sorbonne University - CEO & Founder of Enova Robotics S.A.', imageSrc: '../../assets/speakers/anis_sahbani.png' },
    { firstName: 'FIRAS' , lastName: 'BEN HASSEN', role: 'Deputy Head of Data Science Services Mentor , Entrepreneur (Data, Data and Data)', imageSrc: '../../assets/speakers/firas-ben-hassen.png' },
   
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
