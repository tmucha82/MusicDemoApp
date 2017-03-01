import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('username');
  }

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS = [
  {provide: AuthService, useClass: AuthService},
];
