import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editProfile(event: Event) {
    console.log('editProfile', event);
  }
  deleteProfile(event: Event) {
    console.log('deleteProfile', event);
  }

}
