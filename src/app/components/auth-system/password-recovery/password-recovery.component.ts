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
      title: '¡Su contraseña ha sido restaurada exitosamente!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#089BAB',
      showCloseButton: false,
      customClass: {
        confirmButton: 'btn btn-primary text-white w-100',
      },
      buttonsStyling: false
    }).then(() => {
      this.router.navigateByUrl('/')
    })
  }

}
