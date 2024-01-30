import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommesComponent } from './hommes/hommes.component';
import { FemmesComponent } from './femmes/femmes.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';



const routes: Routes = [
  { path: 'Hommes', component: HommesComponent},
  { path: 'Femmes', component: FemmesComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'detailcommande', component: DetailcommandeComponent},
  { path: 'historiqueCommande/:id', component: HistoriqueCommandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
