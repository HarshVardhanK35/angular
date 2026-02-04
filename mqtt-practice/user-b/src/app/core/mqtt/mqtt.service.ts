import { Injectable } from '@angular/core';
import { connect, MqttClient } from 'mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private client!: MqttClient;

  connect(clientId: string): void {
    this.client = connect('wss://broker.hivemq.com:8884/mqtt', {
      clientId,
      protocol: 'wss'
    });

    this.client.on('connect', () => {
      console.log('✅ MQTT connected:', clientId);
    });

    this.client.on('error', (err) => {
      console.error('❌ MQTT error', err);
    });
  }

  subscribe(topic: string): Observable<string> {
    return new Observable(observer => {
      this.client.subscribe(topic);

      this.client.on('message', (_topic, message) => {
        observer.next(message.toString());
      });
    });
  }

  publish(topic: string, payload: string): void {
    this.client.publish(topic, payload);
  }
}
