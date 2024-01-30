import { Injectable } from '@angular/core';
import { Articles } from './articles';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist: Articles[] = [];
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();
  constructor() {
    // Load the cart from local storage during the service creation
    this.loadCartFromLocalStorage();
  }
  addToWishlist(article: Articles): void {
    // Add the product to the wishlist
    

    const currentItems = this.wishlistSubject.value;

    console.log(currentItems)
    console.log(article)
    const existingItemIndex = currentItems.findIndex((item) => this.articlesAreEqual(item, article));

    if (existingItemIndex == -1) {
      // If the item already exists in the cart, update the quantity
      const updatedItems = [...currentItems, { ...article}];
      this.wishlistSubject.next(updatedItems);
    } 
    
    this.updatewishlist();
  }
  private updatewishlist(): void {
    // Update local storage with the cart items
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistSubject.value));
  }

  getWishlist(): Observable<any[]> {
    return this.wishlist$;
  }
  private articlesAreEqual(article1: any, article2: any): boolean {
    return article1.id === article2.id && article1.nom === article2.nom;
  }
  private loadCartFromLocalStorage(): void {
    // Load the cart from local storage
    const storedCart = localStorage.getItem('wishlist');
    const wishlist = storedCart ? JSON.parse(storedCart) : [];
    this.wishlistSubject.next(wishlist);
  }
  
}
