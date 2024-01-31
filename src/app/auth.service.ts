import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  utilisateur: any;
 
  constructor() {
    // Initialise l'état d'authentification au chargement du service (par exemple, en fonction des informations stockées dans le localStorage)
    this.isAuthenticatedSubject.next(this.isUserAuthenticated());
    
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isUserAuthenticated(): boolean {
    // Implémentation de la logique pour vérifier l'authentification (par exemple, en vérifiant si un jeton d'accès est présent)
    // Vous devrez adapter cela en fonction de votre mécanisme d'authentification
    // Retourne true si l'utilisateur est authentifié, false sinon
    const user = localStorage.getItem('user');

    // Return true if the user is authenticated, false otherwise
    return !!user;
  
  }
  // Méthode pour effectuer le processus d'authentification
  loginSuccess (user:Utilisateur) {
    // Implémentation de la logique pour l'authentification (par exemple, appel à un service d'authentification côté serveur)
    // Émet un événement lorsque l'authentification réussit ou échoue
    localStorage.setItem("user",JSON.stringify(user));
    this.utilisateur = user;
    this.isAuthenticatedSubject.next(true)
  }
  getUtilisateur(): Utilisateur {
    return this.utilisateur;
}

getIsAuthenticated() {
  return this.isAuthenticatedSubject.asObservable()
}
  // Méthode pour déconnecter l'utilisateur
  logoutUser(): void {
    // Implémentation de la logique pour la déconnexion (par exemple, effacer le jeton d'accès)
    // Émet un événement pour signaler la déconnexion
    localStorage.removeItem('user');
    localStorage.removeItem('wishlist');
    this.isAuthenticatedSubject.next(false)
  }

 
}
