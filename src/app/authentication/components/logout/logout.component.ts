import { Component } from '@angular/core';
import { CognitoService } from '../../Service/cognito.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private cognitoservice: CognitoService,private router:Router) {}
  public ngOnInit(): void {
    this.cognitoservice.signOut().then(() => {
      this.router.navigate(['/home']);
      console.log('loggedout');
    });
  }
}
