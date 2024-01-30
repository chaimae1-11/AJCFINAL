import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from './commande';
import { LigneCommande } from './ligne-commande';
import { Articles } from './articles';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {

 
  private apiUrl = 'http://localhost:63685/api/Commande';
  cartItems: any;

  constructor(private http: HttpClient) {}

  creerCommande(cartItems: any[]): Observable<any> {
    const commandeToCreate: Commande = {
      id: 0, // You may need to adjust this based on your backend logic for generating IDs
      idClient: 1, // You need to set the actual idClient here
      date: new Date(),
      prixTotal: this.calculerPrixTotal(cartItems),
      infos: 'done',
      ligneCommandes: this.addOrderLines(cartItems),
      
    };
 
    // debugger;
    console.log(commandeToCreate)
    return this.http.post<any>(`${this.apiUrl}/creer`, commandeToCreate);
  }

  private calculerPrixTotal(articles: any[]): number {
    let prixTotal = 0;

    // Logic to calculate the total price from the cart articles
    articles.forEach((article) => {
      prixTotal += article.prix * (article.quantite || 1); // Recalculat
    });

    return prixTotal;
  }

  addOrderLines(articles): LigneCommande[] {
    const orderLines: LigneCommande[] = [];
    articles.forEach((ar) => {
      orderLines.push({
        idArticle: ar.idArticle,
        prix: ar.prix ,
        quantite: ar.quantite || 1,
       nomArticle:ar.nom,
      });
    });
    return orderLines;
  }
}
