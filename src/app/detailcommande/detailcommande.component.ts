import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { PanierService } from '../panier.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import * as Toastify from 'toastify-js'


@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent  {
  orderLines: any[] | undefined;
  cartItems: any[] = []; 
  commandeId: string;
subTotal:number = 0;
isAuth:boolean;
commandeEffectuee: boolean = false;
  constructor(private location: Location,private commandeService: CommandeService,private authService: AuthService,private panierService: PanierService) {}

  ngOnInit(): void {
    this.authService.getIsAuthenticated()
    this.orderLines =this.panierService.getCommandeDetails()
    this.commandeId = localStorage.getItem('commandeId')
    this.calculerSubTotal();
  }
  
  creerCommande() {
debugger
    if (!this.isAuth) {
      console.error('L\'utilisateur n\'est pas connecté. La commande ne peut pas être créée.');
      // Vous pouvez afficher un message à l'utilisateur ou prendre d'autres mesures nécessaires
      return;
    }

    // Call the service to create the command with the cart items
    this.commandeService.creerCommande(this.cartItems).subscribe(
      (response) => {
         Toastify({
          text: "Arti ajouté au panier",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();// Response of the command creation
        console.log(response)
        localStorage.setItem('commandeId',response.id)
        console.log('Commande créée avec succès:', response);
    
        // You can perform other actions after creating the command if necessary
      },
      (error) => {
        // Error handling during the creation of the command
        console.error('Erreur lors de la création de la commande:', error);
      }
    );
    this.commandeEffectuee = true;
  }
   calculerSubTotal(): void {
    // Logic to calculate the total price from the cart articles
    this.orderLines.forEach((orderline) => {
      this.subTotal += orderline.prix * orderline.quantite; // Recalculat
    });
    
  }

  goToPrevious() {
    this.location.back();
  }

  viewOrderHistory(): void {
   
  }
}