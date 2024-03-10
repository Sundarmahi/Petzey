import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessage } from '../models/chat-message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<
    ChatMessage[]
  >([]);
  constructor() {
    this.initConnenctionSocket();
  }

  initConnenctionSocket() {
    //code to build the connection with backend using end point as "chat-socket"
    const url = 'https://chatservice.bt.skillassure.com/chat-socket'; //we've to give this url to stomp to build the connection and start transferring the data
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    //this method is used to create a connection
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);
        this.messageSubject.next(currentMessage);
      });
    });
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    //console.log(chatMessage);
    this.stompClient.send(
      `/app/chat/${roomId}`,
      {},
      JSON.stringify(chatMessage)
    );
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }
}
