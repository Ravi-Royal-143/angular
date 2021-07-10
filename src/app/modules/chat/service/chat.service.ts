import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { myurlnodeUrl } from 'src/app/urls/url';
import { WebsocketRes } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket;
  latestChat = new Subject();
  myMessage = new Subject();
  leftMessage = new Subject<string>();

  constructor() { }

  setupSocketConnection() {
    this.socket = io(myurlnodeUrl, { transports: ['websocket', 'polling', 'flashsocket'] });
    this.socket.on('message-broadcast', (data: WebsocketRes) => {
      this.latestChat.next(data);
    });
    this.socket.on('message', (data: WebsocketRes) => {
      this.myMessage.next(data);
    });
    this.socket.on('disconnected', (data: WebsocketRes) => {
      this.leftMessage.next(data.content);
    });
  }

  SendMessage(message) {
    this.socket.emit('message', message);
  }

  disconnectSocket() {
    this.socket.disconnect();
  }

}
