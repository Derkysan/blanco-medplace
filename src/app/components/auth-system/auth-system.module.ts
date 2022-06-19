import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSystemRoutingModule } from './auth-system-routing.module';
import { AuthSystemComponent } from './auth-system.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthSystemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthSystemRoutingModule
  ]
})
export class AuthSystemModule { }
