import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Utilisateur connecté, autorise l'accès à la route demandée
      return true;
    } else {
      // Utilisateur non connecté, redirige vers la page de connexion
      this.router.navigate(['/login']);
      return false;
    }
  }
}
