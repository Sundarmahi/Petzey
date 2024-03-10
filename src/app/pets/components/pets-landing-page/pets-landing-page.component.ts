import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-pets-landing-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, NavbarComponent],
  templateUrl: './pets-landing-page.component.html',
  styleUrl: './pets-landing-page.component.css',
})
export class PetsLandingPageComponent {}
