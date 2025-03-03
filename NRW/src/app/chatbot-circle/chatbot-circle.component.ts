import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot-circle.component.html',
  styleUrls: ['./chatbot-circle.component.scss']
})
export class ChatbotComponent {
  isOpen = false;
  
  toggleChat() {
    this.isOpen = !this.isOpen;
    // For now, this doesn't do anything but toggle the state
    console.log('Chat toggled:', this.isOpen);
  }
}