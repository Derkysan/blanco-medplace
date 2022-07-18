import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ProfileImageIconComponent } from './profile-image-icon/profile-image-icon.component';
import { HeaderPageComponent } from './header-page/header-page.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuSidebarComponent,
    ProfileImageIconComponent,
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    FontAwesomeModule,
    MenuHeaderComponent,
    MenuSidebarComponent,
    ProfileImageIconComponent,
    HeaderPageComponent
  ]
})
export class SharedModule { }
