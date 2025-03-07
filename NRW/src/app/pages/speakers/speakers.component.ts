import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  heads = [
    {
      firstName: 'ANIS',
      lastName: 'KOUBAA',
      role: `Executive Director of Innovation Centre <br>
      Director of Research and Initiative Center<br>
    Aide to the Rector of Research Governance<br>
    Full Professor in Computer Science at Prince Sultan University<br>
    Senior Researcher at CISTER/INESC-TEC research group in Portugal<br>
    Senior Fellow of Higher Education Academy (SFHEA)<br>
    Chair of ACM Chapter in Saudi Arabia<br>
    Director of Robotics and Internet of Things Unit at Prince Sultan University<br>
    Founder of ROS Community in Tunisia`,
      imageSrc: '../../assets/speakers/anis-koubaa.png',
      linkedinLink: 'https://www.linkedin.com/in/aniskoubaa/'
    },
    {
      firstName: 'james',
      lastName: 'Schmiedeler',
      role: `Professor of Aerospace and Mechanical Engineering and Associate Dean of Faculty Development and Diversity in the College of Engineering at the University of Notre Dame<br>
     Chaired the ASME International Design Engineering Technical Conferences (IDETC) and the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)<br>
    Recipient of the Presidential Early Career Award for Scientists and Engineers (PECASE) and a fellow of the American Society of Mechanical Engineers<br>
   `,
      imageSrc: '../../assets/speakers/James Schmiedeler.png',
      linkedinLink: 'https://www.linkedin.com/in/jim-schmiedeler-3135931/'
    },
    {
      firstName: 'Cristina',
      lastName: 'Olaverri-Monreal',
      role: `Full professor and Head of the Department Intelligent Transport Systems at the Johannes Kepler University Linz, in Austria. <br>
      Resident of the IEEE Intelligent Transportation Systems Society (IEEE ITSS) for the years 2022 and 2023.<br>
    Chair for the Technical Activities Committee (TAC) on Human Factors in Intelligent Transportation Systems<br>
    Founder and chair of the Austrian IEEE ITSS chapter<br>`,
      imageSrc: '../../assets/speakers/Dr. CristinaOlaverri.png',
      linkedinLink: 'https://www.linkedin.com/in/cristina-olaverri-monreal-06b41212/'
    },
    {
      firstName: 'ANIS',
      lastName: 'SAHBANI',
      role: `Associate Professor at Sorbonne University - Université Pierre & Marie Curie -  in Paris<br>
       CEO & Founder of Enova Robotics S.A. <br>`,
      imageSrc: '../../assets/speakers/anis_sahbani.png',
      linkedinLink: 'https://www.linkedin.com/in/aniss/'
    },
    
    {
      firstName: 'Oussema',
      lastName: 'KHATIB',
      role: `Professor-Department of Computer Science <br> Director of the Robotics Laboratory at Stanford University <br>
      President of the International Foundation of Robotics Research (IFRR) and an IEEE Fellow<br>
    Knight of the National Order of Merit and a member of the National Academy of Engineering<br>`,
      imageSrc: '../../assets/speakers/Khatib-Oussama.png',
      linkedinLink: 'https://www.linkedin.com/in/oussama-khatib-23469631b/'
    },
    {
      firstName: 'oussama',
      lastName: 'Chelly',
      role: `ML Cloud Solution Architect <br>
      AWS Cloud Solution Architect<br>
    Microsoft AI & IoT Lab EMEA<br>`,
      imageSrc: '../../assets/speakers/oussema-chelli.png',
      linkedinLink: 'https://www.linkedin.com/in/oussamachelly/'
    },
    {
      firstName: 'Firas',
      lastName: 'Ben Hassan',
      role: `Deputy Head of Data Science Services<br>
      Artificial Intelligence Speaker<br>
    Artificial Intelligence Guest Lecturer<br>
    Mentor - Entrepreneur (Data, Data and Data)<br>`,
      imageSrc: '../../assets/speakers/firas-ben-hassen.png',
      linkedinLink: 'https://www.linkedin.com/in/firas-ben-hassan-22bab3101/'
    }
  ];
}