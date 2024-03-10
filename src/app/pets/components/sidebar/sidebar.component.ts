import { Component } from '@angular/core';

import { RouterLink, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
constructor(private  router:Router) {}

  //  doctor(){
  //    this.router.navigate(['/pets/doctor'])
  //  }

  dashboardactiveColor: string = '#18385C';
  dashboardbg: string = '#ffffff';
  petsactiveColor: string = '#ffffff';
  petsbg: string = '';
  profileactiveColor: string = '#ffffff';
  profilebg: string = '';

  handleMenuItemClick(menuItem: string): void {
    this.resetMenuItems();

    switch (menuItem) {
      case 'dashboard':
        this.dashboardactiveColor = '#18385C';
        this.dashboardbg = '#ffffff';
        break;
      case 'vets':
        this.petsactiveColor = '#18385C';
        this.petsbg = '#ffffff';
        break;
      case 'profile':
        this.profileactiveColor = '#18385C';
        this.profilebg = '#ffffff';
        break;
    }
  }

  resetMenuItems(): void {
    this.dashboardactiveColor = '#ffffff';
    this.dashboardbg = '';
    this.petsactiveColor = '#ffffff';
    this.petsbg = '';
    this.profileactiveColor = '#ffffff';
    this.profilebg = '';
  }
} 
