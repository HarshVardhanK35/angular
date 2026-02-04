import { Component, inject, OnInit } from '@angular/core';
import { ChatStateService } from '../../state/chat-state.service';
import { Message } from '../../core/models/message.model';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.css"
})
export class ChatComponent implements OnInit {

  messageText = '';
  messages$ = this.chatService.messages$;

  private USER_ID = 'user-b'; 

  constructor(private chatService: ChatStateService) { }

  ngOnInit(): void {
    this.chatService.init(this.USER_ID);
  }

  sendMessage(): void {
    if (!this.messageText.trim()) return;

    const message: Message = {
      id: crypto.randomUUID(),
      from: this.USER_ID,
      text: this.messageText,
      timestamp: new Date().toISOString()
    };

    this.chatService.sendMessage(message);
    this.messageText = '';
  }
}