import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ChatBox } from '../_models/chatBox';

@Injectable()
export class ChatBoxService {
  private subject = new Subject<ChatBox>();
  private display: any = new Subject<any>();
  private close: any = new Subject<any>();

  constructor() {}

  // success(username: string, socket: any) {
  //   this.subject.next({ receiver: username, socket: socket, username: '', chats: [] });// , style: ''
  // }

  // displayMessage(data: any, socket: any) {
  //   this.display.next({ socket: socket, message: data.message, from: data.sender, sent_on: data.sent_on });
  // }

  // onLogoutCloseChatBoxes() {
  //   this.close.next({flag: true});
  // }

  openChatBox(): Observable<any> {
    return this.subject.asObservable();
  }

  // displayMessageInChatBox(): Observable<any> {
  //   return this.display.asObservable();
  // }

  // closeChatBoxes(): Observable<any> {
  //   return this.close.asObservable();
  // }
}
