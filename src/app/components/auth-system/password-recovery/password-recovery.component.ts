import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  recover() {
    Swal.fire({
      title: 'El correo ha sido enviado',
      text: 'Revise el correo franciscog@davila.cl y complete los pasos para recuperar su contraseña.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#089BAB',
      showCloseButton: false,
      buttonsStyling: false,
      customClass: {
        htmlContainer: 'text-center my-3',
        confirmButton: 'btn btn-primary text-white w-100',
      },
    }).then(() => {
      this.router.navigateByUrl('/')
    })
  }

}
