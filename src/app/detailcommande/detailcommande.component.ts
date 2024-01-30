import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent  {
  orderLines: any[] | undefined;
  commandeId: string;

  constructor(private panierService: PanierService, router: Router) {}

  ngOnInit(): void {

    this.orderLines =this.panierService.getCommandeDetails()
    this.commandeId = localStorage.getItem('commandeId')
  }

  viewOrderHistory(): void {
   
  }
}