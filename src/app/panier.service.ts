import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  ajouterAuPanier(article: any): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, article];
    this.cartItemsSubject.next(updatedItems);
  }

  // Other methods for manipulating the cart...

  // Return the observable for cart items
  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }}