import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Amplify,Auth } from 'aws-amplify';


export interface IUser {
  email: string;
  password: string;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;
  dataUrl = environment.DataUrl;
  constructor() {
    Amplify.configure({ Auth: environment.cognito });
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }
  public signup(user: IUser): Promise<any> {
    return Auth.signUp({ 
      username: user.email,
      password: user.password,
    });
  }

  public forgotPassword(user: IUser): Promise<any> {
    return Auth.forgotPassword(user.email);
  }

  public forgotPasswordSubmit(user: IUser): Promise<any> {
    return Auth.forgotPasswordSubmit(user.email, user.code, user.password);
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password).then(() => {
      this.authenticationSubject.next(true);
    });
  }
  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }
  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }
  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
        .catch(() => {
          return false;
        });
    }
  }
}
