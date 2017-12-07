import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import * as io from "socket.io-client";
import { ChatBox } from '../_models/chatBox';
import { ChatBoxService } from '../service/chat-box.service';
// import{ chat}
@Component({
  moduleId: module.id,
  selector: 'chatbox',
  templateUrl: 'chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers:[ChatBoxService]
})
export class ChatBoxComponent {
  chatBoxes: ChatBox[]=[];
  constructor(
    private chatBoxService:ChatBoxService){}
    ngOnInit(){
      this.chatBoxService.openChatBox().subscribe((chatBox:ChatBox)=>{
        chatBox.username = JSON.parse(localStorage.getItem("currentUser")).username;
      });
    }
}
