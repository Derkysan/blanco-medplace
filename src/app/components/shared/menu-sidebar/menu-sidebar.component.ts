import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])

  faXmark = faXmark;

  opened = false;
  pathURL = 'assets/svg/'


  sideMenu = [
    {
      icon: "icon-dashboard",
      name: "Dashboard",
      url: "/admin"
    },
    {
      icon: "icon-profile-manage",
      name: "Gestión de perfiles",
      url: "/admin/profile-management"
    },
    // {
    //   icon: "icon-bill",
    //   name: "Facturación",
    //   url: "/"
    // },
    // {
    //   icon: "icon-clock",
    //   name: "Turnos",
    //   url: "/"
    // },
    // {
    //   icon: "icon-publish",
    //   name: "Publicar turnos",
    //   url: "/"
    // },
    // {
    //   icon: "icon-evaluation",
    //   name: "Evaluaciones",
    //   url: "/"
    // },
    // {
    //   icon: "icon-settings",
    //   name: "Configuración",
    //   url: "/"
    // },
    // {
    //   icon: "icon-info",
    //   name: "Ayuda",
    //   url: "/"
    // }
  ]

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.opened = true;
  }
  closeMenu() {
    this.opened = false;
  }

  logOut() {
    this.router.navigate(['/']);
  }

  onScroll(event: any) {
    alert('Scrolled!');
  }

}
