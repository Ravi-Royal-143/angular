import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AutoUnsubscribeComponent } from 'src/app/shared/auto-unsubscribe/auto-unsubscribe.component';
import { WebsocketRes } from './model/interface';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent extends AutoUnsubscribeComponent implements OnInit, OnDestroy {
  @ViewChild('textRef', { static: false }) textRef: ElementRef;

  chat: string;
  welcomeAndleftMsg: string[] = [];
  chats: ({ type: string } & WebsocketRes)[] = [];

  constructor(private chatService: ChatService) {
    super();
  }

  ngOnInit() {
    this.chatService.setupSocketConnection();
    const sub$ = this.chatService.latestChat.subscribe((data: WebsocketRes) => {
      this.addToChat('recieved', data.content, data.sender);
    });
    const sub2$ = this.chatService.welcomeAndLeftMsg.subscribe((data: string) => {
      this.welcomeAndleftMsg.push(data);
    });
    this.addsub(sub$, sub2$);
  }

  ngOnDestroy() {
    this.chatService.disconnectSocket();
  }

  onSend() {
    this.chatService.SendMessage(this.chat);
    this.addToChat('sent', this.chat, 'YOU');
    this.textRef.nativeElement.focus();
    this.chat = '';
  }

  addToChat(type: 'recieved' | 'sent', content: string = '', sender: string = ' ANONYMOUS') {
    this.chats.push({
      type,
      content,
      sender
    });
  }
}
