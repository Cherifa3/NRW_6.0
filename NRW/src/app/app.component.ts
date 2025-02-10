import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NRW';

  cards = [
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

 
}
