import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
    providers: [UserService  ]
})
export class ChatPageComponent implements OnInit {
  socket = io('http://localhost:8000', { query: "username=" + JSON.parse(localStorage.getItem("currentUser")).username });
  msgData = { username: '', message: '', sentOn: '', userTextColor: '' };
  constructor(private router: Router , private userservice: UserService ) {
    this.msgData.username = "rajat";
    this.msgData.message="hello";

  }

  ngOnInit() {
    // this.sendMessage();
  }
  click(){
    this.userservice.logout();

      this.router.navigate(['login',-1]);
  }
  chat(){
      this.router.navigate(['dashboard']);
  }
  sendMessage(){
        this.socket.emit('chat message', "result.data");
  }

}
