import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './shared/components/header/header.component';
import { ViewAppointmentComponent } from './appointments/components/view/view-appointment/view-appointment.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { LogoutComponent } from './authentication/components/logout/logout.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './authentication/components/home/home.component';
import { ResetPasswordComponent } from './authentication/components/reset-password/reset-password.component';
import { DoctorsComponent } from './pets/components/doctors/doctors.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, RouterOutlet,HeaderComponent,ViewAppointmentComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    SignUpComponent,
    LogoutComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordComponent,
    HeaderComponent,
    ViewAppointmentComponent,
    DoctorsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PetZey_App';
}
