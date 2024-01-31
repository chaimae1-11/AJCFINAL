import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-messageinput',
  templateUrl: './messageinput.component.html',
  styleUrls: ['./messageinput.component.css']
})
export class MessageinputComponent {
  @Output() messageSent = new EventEmitter<string>();
  userInput: string = '';

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messageSent.emit(this.userInput);
      this.userInput = '';
    }
  }
}
