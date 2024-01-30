import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Articles } from '../articles';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-femmes',
  templateUrl: './femmes.component.html',
  styleUrls: ['./femmes.component.css']
})
export class FemmesComponent {
  categorie: string;
  articles: any

  constructor(private http: HttpClient,private wishlistService:WishlistService) { }

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
addToWishlist(article: Articles): void {
  // Implement logic to add the product to the wishlist
  this.wishlistService.addToWishlist(article);
}
}
