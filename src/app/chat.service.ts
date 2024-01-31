import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: { text: string; sender: string; sentByUser: boolean }[] = [];

  addMessage(message: string, sender: string, sentByUser: boolean) {
    this.messages.push({ text: message, sender, sentByUser });
  }
}
