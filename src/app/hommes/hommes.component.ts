import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from '../articles'
import { PanierService } from '../panier.service';
import { WishlistService } from '../wishlist.service';
import * as Toastify from 'toastify-js'
@Component({
  selector: 'app-hommes',
  templateUrl: './hommes.component.html',
  styleUrls: ['./hommes.component.css']
})
export class HommesComponent  {
  categorie: string;
  articles: any
  cartItems: any[] = [];
 
  constructor(private http: HttpClient, private panierService: PanierService,private wishlistService:WishlistService) {  console.log('PanierService:', this.panierService);}


  ngOnInit(): void {

    this.http.get("http://localhost:63685/api/Article").subscribe(
      (response) => {
        this.articles=response;
       
        console.log(response);
      }
      ,
     (err) => {
        console.log("*************KO")
        
      },

      () => {
        console.log("*********complete****")
        
      }

    );
}

ajouterAuPanier(article: any) {
  console.log('Avant appel à ajouterAuPanier');

  this.panierService.ajouterAuPanier(article);
  this.panierService.getCartItems().subscribe(
    (items) => {
      Toastify({
        text: "Article ajouté au panier",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    },
    (error) => {
      console.error('Erreur lors de l\'ajout au panier:', error);
    }
  );

  console.log('Après appel à ajouterAuPanier');
}
addToWishlist(article: Articles): void {
  // Implement logic to add the product to the wishlist
  this.wishlistService.addToWishlist(article);
}
}