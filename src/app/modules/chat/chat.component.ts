import { AfterContentChecked, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AutoUnsubscribeComponent } from 'src/app/shared/components/auto-unsubscribe/auto-unsubscribe.component';
import { WebsocketRes } from './model/interface';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent extends AutoUnsubscribeComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('textRef', { static: false }) textRef: ElementRef;
  @ViewChild('scrollMe') chatBox: ElementRef;

  chat: string;
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
      this.addToChat('pplDetail', data);
    });
    this.addsub(sub$, sub2$);
  }

  ngAfterContentChecked() {
    this.scrollToBottom();
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

  addToChat(type: 'recieved' | 'sent' | 'pplDetail', content: string = '', sender: string = ' ANONYMOUS') {
    this.chats.push({
      type,
      content,
      sender
    });
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
