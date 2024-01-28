import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { LigneCommande } from '../ligne-commande';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isCartOpen: boolean = false;
  cartItems: any[] = [];  // Adjust the type according to the actual structure of your articles in the cart
  articles: any;
  commande: Commande | null = null;

  constructor(private panierService: PanierService, private commandeService: CommandeService) {}

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  // Subscribe to changes in the cartItems when the component initializes
  ngOnInit(): void {
    this.panierService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
    // Other methods to manipulate the cart (add, remove articles, etc.)
  }

  creerCommande() {
    // Create the LigneCommandes from the cartItems
    const lignesCommande: LigneCommande[] = this.cartItems.map((article) => {
      return {
        id: 0,  // You may need to adjust this based on your backend logic for generating IDs
        quantite: 1,  // You can adjust this based on your business logic
        prix: article.prix,
        idCommande: 0,  // This will be set by the server when the LigneCommande is created
        idArticle: article.id,  // Adjust this property based on your actual structure
      };
    });


    // Call the service to create the command with the cart items
    this.commandeService.creerCommande(this.commande,this.cartItems).subscribe(
      (response) => {
        // Response of the command creation
        console.log('Commande créée avec succès:', response);

        // You can perform other actions after creating the command if necessary
      },
      (error) => {
        // Error handling during the creation of the command
        console.error('Erreur lors de la création de la commande:', error);
      }
    );
  }

  private calculerPrixTotal(articles: any[]): number {
    // Logic to calculate the total price from the cart articles
    return articles.reduce((total, article) => total + article.prix, 0);
  }
}

