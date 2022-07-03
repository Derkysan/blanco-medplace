import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faEye, faEyeSlash, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCoffee = faCoffee;

  hide = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    Swal.fire({
      title: '¡Su cuenta ha sido creada exitosamente!',
      text: 'Ahora solo debes activar tu cuenta y completar tu perfil profesional.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#089BAB',
      showCloseButton: false,
      customClass: {
        title: 'popup-title'
      }
    }).then(() => {
      this.router.navigateByUrl('/')
    })
  }

}
