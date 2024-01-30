import { Component, Injectable } from '@angular/core';
import { WishlistService } from '../wishlist.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist:any;
  constructor (private  wishlistService: WishlistService) {}


  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((items) => {
      this.wishlist = items;
      console.log(this.wishlist)
    });
   
    // Other methods to manipulate the cart (add, remove articles, etc.)
  
   
  }

}
