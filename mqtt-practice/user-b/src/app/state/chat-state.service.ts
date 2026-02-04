import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Message } from "../core/models/message.model";
import { MqttService } from "../core/mqtt/mqtt.service";

const CHAT_TOPIC = 'angular/chat/global';

@Injectable({
  providedIn: "root"
})
export class ChatStateService {

  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor(private mqtt: MqttService) { }

  init(userId: string): void {
    this.mqtt.connect(userId);

    this.mqtt.subscribe(CHAT_TOPIC).subscribe(raw => {
      const message: Message = JSON.parse(raw);
      this.addMessage(message);
    });
  }

  sendMessage(message: Message): void {
    this.mqtt.publish(CHAT_TOPIC, JSON.stringify(message));
  }

  private addMessage(message: Message): void {
    const current = this.messagesSubject.value;
    this.messagesSubject.next([...current, message]);
  }
}