import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Message } from "../core/models/message.model";
import { MqttService } from "../core/mqtt/mqtt.service";

// shared topic: both publishing and subscribing
const CHAT_TOPIC = 'angular/chat/global';

@Injectable({
  providedIn: "root"
})
export class ChatStateService {

  // private state holder
  private messagesSubject = new BehaviorSubject<Message[]>([])

  // public observable for UI
  messages$ = this.messagesSubject.asObservable()

  // mqtt service injection
  private mqtt = inject(MqttService)

  init(userId: string) {
    this.mqtt.connect(userId);

    this.mqtt.subscribe(CHAT_TOPIC).subscribe(raw => {
      const message: Message = JSON.parse(raw);
      this.addMessage(message);
    });
  }

  sendMessage(message: Message): void {
    this.mqtt.publish(CHAT_TOPIC, JSON.stringify(message));
  }


  private addMessage(message: Message) {
    const currentMessages = this.messagesSubject.value
    const updatedMessages = [...currentMessages, message]

    this.messagesSubject.next(updatedMessages)
    // console.log(updatedMessages);
  }
}