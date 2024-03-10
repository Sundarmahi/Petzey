import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CognitoService, IUser } from '../../Service/cognito.service';
import { EmailValidator, FormsModule } from '@angular/forms';
import { creds } from '../../models/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  cred: creds = new creds();
  user: IUser;

  role: string = '';
  id: number = 0;
  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    private http: HttpClient
  ) {
    this.user = {} as IUser;
  }
  public async signIn(): Promise<void> {
    this.cognitoService
      .signIn(this.user)
      .then(async () => {
        console.log(this.user.email);
        // localStorage.setItem("lname",this.user.name)
        await this.getdetails(this.user.email);
        console.log(this.cred.role);
        if (this.cred.role == 'PetOwner') {
          this.router.navigate(['/pets/dashboard']);
        } else if (this.cred.role == 'Vet') {
          this.router.navigate(['/header']);
        } else {
          console.log('running');
        }
        // } else {
        //   this.router.navigate(['/NewAppointmentComponent']);
        // }

        // this.router.navigate(['/receptionist']);
        console.log('signed in');
      })
      .catch(() => {
        console.log('something wrong with the sign in');
      });
  }
  getdetails(email: string) {
    return this.http
      .get<creds>(
        `https://account.bt.skillassure.com/credentials/getall/${email}`
      )
      .subscribe((data) => {
        this.cred = data;
      });
  }
}
