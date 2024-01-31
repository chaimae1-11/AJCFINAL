import { Component, NgModule } from '@angular/core';
import { PanierService } from '../panier.service';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../utilisateur';
 

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
isAuth:boolean;
totalPanier:number;
utilisateur:Utilisateur;
commandeEffectuee: boolean = false;

  constructor(private panierService: PanierService, private commandeService: CommandeService , private authService: AuthService) {}

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  // Subscribe to changes in the cartItems when the component initializes
  ngOnInit(): void {
    this.panierService.getCartItems().subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
   
    // Other methods to manipulate the cart (add, remove articles, etc.)
    this.authService.getIsAuthenticated().subscribe((res) => {
      this.isAuth=res
      this.utilisateur = this.authService.getUtilisateur();
    })

      
    
  }



  //  calculerPrixTotal(): number {
  //  // Logic to calculate the total price from the cart articles
  //   let totalPanier=0;
  //  this.articles.forEach((article)=>{
    
  //  totalPanier += article.prix;
   
  // })
  // return totalPanier;
  //  }
     calculerPrixTotal(): number {
     // Assurez-vous que articles est défini avant d'essayer de le parcourir
     let totalPanier=0;
    if (this.articles && this.articles.length > 0) {
      this.articles.forEach((article)=>{// Logique pour calculer le total du panier à partir des articles du panier
    totalPanier+= article.prix* article.quantite ;
       } )
      
       return totalPanier;
      } else {
        // Retournez une valeur par défaut appropriée si articles est undefined ou vide
        return 0;
      }
     }
    


  
  removeItem(article: any): void {
    // Logique pour supprimer l'article du panier
    const index = this.cartItems.indexOf(article);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.panierService.updateCartItems(this.cartItems) 
    }
  }

  deconnexion(){
   
    this.authService.logoutUser();
    this.ngOnInit();
    this.commandeEffectuee = false;
    this.panierService.viderPanier();
  }


}






