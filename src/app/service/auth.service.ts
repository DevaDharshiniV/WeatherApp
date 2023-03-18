import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (email === user.email && password === user.password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }
}

