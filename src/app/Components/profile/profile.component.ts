import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(){}
  ngOnInit(): void{}

  // Tabs
  id:any = "profile";
  tabChange(ids:any){
    this.id = ids;
  }

  // Edit Profile Data
  isEdit = false;
  edit(){
    this.isEdit = !this.isEdit;
  }

  // Overlay (Change Password)
  toggleOverlay=false;

  toggleClose(): void {
    this.toggleOverlay=false;
  }

  addOverlay():void{
    this.toggleOverlay=true;  
  }
}
