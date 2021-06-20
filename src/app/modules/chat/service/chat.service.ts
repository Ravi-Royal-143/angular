import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { websockerUrl } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket;
  latestChat = new Subject();

  constructor() { }

  setupSocketConnection() {
    this.socket = io(websockerUrl, { transports: ['websocket', 'polling', 'flashsocket'] });
    this.socket.on('message-broadcast', (data: string) => {
      console.log(data);
      this.latestChat.next(data);
    });
  }

  SendMessage(message) {
    this.socket.emit('message', message);
  }

  disconnectSocket() {
    this.socket.disconnect();
  }

}
