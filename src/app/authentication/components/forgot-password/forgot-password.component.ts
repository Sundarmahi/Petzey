import { Component } from '@angular/core';
import { CognitoService, IUser } from '../../Service/cognito.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  user: IUser;
  constructor(private router: Router, private cognitoservice: CognitoService) {
    this.user = {} as IUser;
  }
  public toForgotPassword(): void {
    if (this.user.email && this.user.email.length > 0) {
      this.router.navigate(['/enter-email'], {
        queryParams: { email: this.user.email },
      });
    }
  }  
}
