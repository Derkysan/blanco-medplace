import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSystemComponent } from './auth-system.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path: '',
    component: AuthSystemComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'password-recovery',
        component: PasswordRecoveryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthSystemRoutingModule { }
