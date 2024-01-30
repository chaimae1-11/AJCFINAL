import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { PanierService } from '../panier.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent  {
  orderLines: any[] | undefined;
  commandeId: string;
subTotal:number;
  constructor(private panierService: PanierService, private location: Location) {}

  ngOnInit(): void {

    this.orderLines =this.panierService.getCommandeDetails()
    this.commandeId = localStorage.getItem('commandeId')
    this.calculerSubTotal();
  }
   calculerSubTotal(): void {
    let subTotal = 0;

    // Logic to calculate the total price from the cart articles
    this.orderLines.forEach((orderline) => {
      subTotal += orderline.prix ; // Recalculat
    });
    
  }

  goToPrevious() {
    this.location.back();
  }

  viewOrderHistory(): void {
   
  }
}