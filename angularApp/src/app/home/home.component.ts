import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.router.navigate(['dashboard'])
    }
  }

}
