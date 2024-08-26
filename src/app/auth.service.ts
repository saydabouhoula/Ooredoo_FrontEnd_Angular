import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  private validUsername = 'admin';
  private validPassword = 'admin';

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'fake-jwt-token');
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token'); // Supprime le jeton de l'utilisateur
    this.router.navigate(['/login']); // Redirige vers la page de connexion après déconnexion
    // Efface l'historique de navigation
    history.replaceState(null, '', '/login');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
