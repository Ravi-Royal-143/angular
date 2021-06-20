import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { defaultToast } from './defaultToastValues';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private messageService: MessageService) { }

  addToast(data): void {
    this.messageService.add({ severity: data.severity, summary: data.summary, detail: data.detail });
  }

  multiplyToast(toasts: Message[]) {
    const toast = toasts.map(singleToast => ({
      ...defaultToast,
      ...singleToast
    }));

    if (toast.length > 0) {
      this.messageService.addAll(toast);
    }
  }

  clear(): void {
    this.messageService.clear();
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
