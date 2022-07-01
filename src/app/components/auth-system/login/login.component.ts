import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faEye, faEyeSlash, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCircleNotch = faCircleNotch;

  hide = true;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigateByUrl('/dashboard');
    // Swal.fire({
    //   timer: 3000,
    //   showConfirmButton: false,
    //   padding: '5em 0 6em',
    //   iconHtml: `<img src="assets/images/loader.png" class="fa-spin" width="100" alt="" srcset="">`,
    //   customClass: {
    //     icon: 'custom-icon'
    //   }
    // })
  }

}
