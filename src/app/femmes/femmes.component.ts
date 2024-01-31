import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Articles } from '../articles';
import { WishlistService } from '../wishlist.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-femmes',
  templateUrl: './femmes.component.html',
  styleUrls: ['./femmes.component.css']
})
export class FemmesComponent {
  categorie: string;
  articles: any

  constructor(private http: HttpClient, private panierService: PanierService,private wishlistService:WishlistService) { }

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
      console.log(`Article ajouté au panier: ${article.nom}`);
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
