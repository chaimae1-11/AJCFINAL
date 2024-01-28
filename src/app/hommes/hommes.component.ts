import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from '../articles'
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-hommes',
  templateUrl: './hommes.component.html',
  styleUrls: ['./hommes.component.css']
})
export class HommesComponent  {
  categorie: string;
  articles: any
  cartItems: any[] = [];
 
  constructor(private http: HttpClient, private panierService: PanierService) {  console.log('PanierService:', this.panierService);}


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
}