import { Component } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ChatMessage } from '../../models/chat-message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink],
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.css'
})
export class NewChatComponent {
  messageInput: string = '';
  userId: string = '';
  messageList: any[] = [];
 
  constructor(private chatService: ChatService, private route: ActivatedRoute) {
    console.log(this.messageList);
  }
 
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.chatService.joinRoom('petzy');
    this.lisenerMessage();
  }
 
  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      user: this.userId,
    } as ChatMessage;
    this.chatService.sendMessage('petzy', chatMessage);
    this.messageInput = '';
  }
 
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.user === this.userId ? 'sender' : 'receiver',
      }));
    });
  }
}
