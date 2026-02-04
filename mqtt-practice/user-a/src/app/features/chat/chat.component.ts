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
  messageText = ""
  private USER_ID = 'user-a';

  // inject service
  // private chatState = inject(ChatStateService)

  // service constructor
  constructor(private chatService: ChatStateService) { }

  messages$ = this.chatService.messages$

  ngOnInit(): void {
    this.chatService.init(this.USER_ID);
  }

  sendMessage() {
    if (!this.messageText.trim()) {
      return
    }
    const message: Message = {
      id: Math.random().toString(),
      from: "user-A",
      text: this.messageText,
      timestamp: new Date().toISOString()
    }

    this.chatService.sendMessage(message)
    this.messageText = ""
  }
}
