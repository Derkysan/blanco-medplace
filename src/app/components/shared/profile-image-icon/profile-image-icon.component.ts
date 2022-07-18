import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image-icon',
  templateUrl: './profile-image-icon.component.html',
  styleUrls: ['./profile-image-icon.component.scss']
})
export class ProfileImageIconComponent implements OnInit {

  @Input() imgURL: string = 'https://via.placeholder.com/150';
  @Input() nameProfile: string = '';
  @Input() sizePX: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
