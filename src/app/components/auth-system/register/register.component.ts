import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
