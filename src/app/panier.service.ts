import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  lignesCommandes: any[];

  constructor() {
    // Load the cart from local storage during the service creation
    this.loadCartFromLocalStorage();
  }

  ajouterAuPanier(article: any): void {
    const currentItems = this.cartItemsSubject.value;

    console.log(currentItems)
    console.log(article)
    const existingItemIndex = currentItems.findIndex((item) => this.articlesAreEqual(item, article));

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update the quantity
      currentItems[existingItemIndex].quantite += article.quantite || 1;
    } else {
      // If the item doesn't exist in the cart, add it with the specified quantity or 1 by default
      const updatedItems = [...currentItems, { ...article, quantite: article.quantite || 1 }];
      this.cartItemsSubject.next(updatedItems);
    }

    // Update the order lines
    // const existingLigneIndex = this.lignesCommandes.findIndex(ligne => ligne.idArticle === article.id);

    // if (existingLigneIndex !== -1) {
    //   // If the order line already exists, update the quantity
    //   this.lignesCommandes[existingLigneIndex].quantite += article.quantite || 1;
    // } else {
    //   // If the order line doesn't exist, add it with the specified quantity or 1 by default
    //   const updatedLignes = [...this.lignesCommandes, { idArticle: article.id, quantite: article.quantite || 1 }];
    //   this.lignesCommandes = updatedLignes; // Update the property
    // }

    // Update the cart in local storage or via your storage mechanism
    this.updateCartStorage();
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }

  getCommandeDetails() {
    // Assuming you have a method to get the latest command from your cart items
    return this.cartItemsSubject.value

  }
  


  private updateCartStorage(): void {
    // Update local storage with the cart items
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemsSubject.value));
  }

  private loadCartFromLocalStorage(): void {
    // Load the cart from local storage
    const storedCart = localStorage.getItem('cartItems');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.cartItemsSubject.next(cartItems);
  }

  private articlesAreEqual(article1: any, article2: any): boolean {
    return article1.id === article2.id && article1.nom === article2.nom;
  }
}