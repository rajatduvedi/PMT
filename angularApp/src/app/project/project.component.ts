import { Component, OnInit } from '@angular/core';
import { LabelService } from '../service/label.service';
import { UserService } from '../service/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef} from '@angular/material';
import{ Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [LabelService, UserService]
})
export class ProjectComponent implements OnInit {
  private sub : any;
  id:any;
  public label:Project[];
  constructor(private userservice: UserService ,private labelservice: LabelService , private router: Router, public dialog: MdDialog, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
        this.id = +params['projid'];
        console.log(this.id)
        });
    this.labelservice.getproject(this.id).subscribe(data=>{
        this.label = data;
        console.log(this.label)
    })
    }
    click(){
      this.userservice.logout();

        this.router.navigate(['login',-1]);
    }
  openCreateBoxDialog() {
    let dialogRef = this.dialog.open(DialogCreateBoxLabel);
    dialogRef.afterClosed().subscribe(result => {
    });
    dialogRef.componentInstance.projid = this.id;
  }
}
@Component({
  selector: 'dialog-create-box-label',
  templateUrl: 'dialog-create-box-label.html',
  providers: [ LabelService ],
})
export class DialogCreateBoxLabel{
  // public user : User;
  public projid:any;
  public dialogData = {
          labelName : '',
          projid: '',
  };
  constructor( public dialogRef:MdDialogRef<DialogCreateBoxLabel> , private labelservice: LabelService , private router: Router){
  }

  submit(){
    // alert("hello");if()
    if(this.dialogData.labelName){
      this.dialogData.projid = this.projid;
      console.log(this.dialogData.projid);
      console.log(this.dialogData.labelName);
      this.labelservice.userProjectLabel(this.dialogData).subscribe(data=>{
      console.log("dataout");
      this.router.navigate(['project',this.dialogData.projid])
    });

      }
    }
}
