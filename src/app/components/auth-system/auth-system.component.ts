import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-system',
  templateUrl: './auth-system.component.html',
  styleUrls: ['./auth-system.component.scss']
})
export class AuthSystemComponent implements OnInit {

  constructor( public router: Router){
    console.log(router.url);

  }

  ngOnInit(): void {}


}
