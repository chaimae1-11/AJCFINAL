import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommesComponent } from './hommes/hommes.component';
import { FemmesComponent } from './femmes/femmes.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { WishlistComponent } from './wishlist/wishlist.component';



const routes: Routes = [
  { path: 'Hommes', component: HommesComponent},
  { path: 'Femmes', component: FemmesComponent},
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'detailcommande', component: DetailcommandeComponent},
  { path: 'historiqueCommande', component: HistoriqueCommandeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'wishlist', component: WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
