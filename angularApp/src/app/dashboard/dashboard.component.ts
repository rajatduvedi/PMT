import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ProjectService } from '../service/project.service'
import { Router,ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef} from '@angular/material';
import{ User } from '../user';
import{ Project } from '../project';

@Component({
  moduleId:module.id,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService ,ProjectService ]
})
export class DashboardComponent implements OnInit {
  selectedOption:any='';
  public projects:Project[];
  public user : User;
  constructor(private userservice: UserService , private router: Router, public dialog: MdDialog ,private projectservice:ProjectService) { }

  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem('currentUser'));
    // this.user.id=this.user.id;
    console.log(this.user);
    this.projectservice.getproject(this.user.id).subscribe(data=>{
    this.projects = data;
    console.log(data);
    console.log("getproject")
    });

  }
  click(){
    this.userservice.logout();

      this.router.navigate(['login',-1]);
  }
  chat(){
      this.router.navigate(['chat']);
  }
  projectdiv(projid){
      console.log(projid);
      this.router.navigate(['project',projid]);
  }
  openCreateBoxDialog() {
    let dialogRef = this.dialog.open(DialogCreateBox);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.selectedOption = result;
     }
      // console.log(this.selectedOption);
      // console.log(result);
      // console.log();
    });
  }
}
@Component({
  selector: 'dialog-create-box',
  templateUrl: 'dialog-create-box.html',
  providers: [ ProjectService ],
})
export class DialogCreateBox{
  public user : User;
  public dialogData = {
          projName : '',
          id: '',
  };
  constructor(public dialogRef:MdDialogRef<DialogCreateBox> , private projectservice: ProjectService , private router: Router){
    // console.log(this.dialogData.ProjName);
  }
submit(){
  // alert("hello");if()
  if(this.dialogData.projName){
    // console.log(this.dialogData.projName);
      this.user= JSON.parse(localStorage.getItem('currentUser'));
      // console.log(this.user.id);
      this.dialogData.id=this.user.id;
      // console.log(this.dialogData.projName);
      // console.log(this.dialogData.id);
      this.projectservice.userProject(this.dialogData).subscribe(data=>{
      console.log(data);
      console.log("userProject")
      // this.router.navigate(['dashboar'])
      // method().subscribe(
      location.reload();
      // )

    });
}
}

}
