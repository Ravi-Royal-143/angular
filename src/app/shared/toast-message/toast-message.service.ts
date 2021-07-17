import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { defaultToast } from './defaultToastValues';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  messageDispalyed: Message[] = [];

  constructor(private messageService: MessageService) { }

  addToast(data, key: string = defaultToast.key): void {
    this.messageService.add({ key, severity: data.severity, summary: data.summary, detail: data.detail });
  }

  getIcon(serverity: string): string {
    let iconClass = 'fas';
    switch (serverity) {
      case 'warn':
      case 'error':
        iconClass += ' fa-exclamation-circle';

      case 'success':
        iconClass += ' fa-check-circle';

      default:
        iconClass += ' fa-info-circle';
    }

    return iconClass;

  }

  clearMessage(): void {
    this.messageDispalyed = [];
    this.messageService.clear();
  }

  isMessageSame(firstMes: Message, secondMes: Message): boolean {
    return Object.keys(firstMes).every(propName => firstMes[propName] === secondMes[propName]);
  }

  isMessageShowing(latestMes: Message): boolean {
    return this.messageDispalyed.some(showingMes => this.isMessageSame(showingMes, latestMes));
  }

  removeMesInMessageDispalyed(removeMes: Message): void {
    this.messageDispalyed = this.messageDispalyed.filter(showingMes => !this.isMessageSame(showingMes, removeMes));
  }

  mesToShown(mes: Message[]) {
    return mes.filter((latesMes, index) =>
      (mes.findIndex(msg => this.isMessageSame(latesMes, msg)) === index && !this.isMessageShowing(latesMes))
    );
  }

  singleToast(toastMes: Message) {
    const toast = {
      ...defaultToast,
      icon: this.getIcon(toastMes.severity),
      ...toastMes
    };

    if (!this.isMessageShowing(toast)) {
      this.messageService.add(toast);
      this.messageDispalyed.push(toast);
    }
  }

  multiplyToast(toastMes: Message[]) {
    const toasts = this.mesToShown(
      toastMes.map(singleToast => ({
        ...defaultToast,
        icon: this.getIcon(singleToast.severity),
        ...singleToast
      }))
    );

    if (toasts.length > 0) {
      this.messageDispalyed.push(...toasts)
      this.messageService.addAll(toasts);
    }
  }

  showSuccessToast(details: string[], key: string = defaultToast.key) {
    const toastMes = details.map(detail => ({ key, severity: 'success', summary: '', detail }));
    this.multiplyToast(toastMes);
  }

  showErrorToast(details: string[], key: string = defaultToast.key) {
    const toastMes = details.map(detail => ({ key, severity: 'error', summary: '', detail }));
    this.multiplyToast(toastMes);
  }

}
