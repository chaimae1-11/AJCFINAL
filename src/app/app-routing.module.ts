import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommesComponent } from './hommes/hommes.component';
import { FemmesComponent } from './femmes/femmes.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



const routes: Routes = [
  { path: 'Hommes', component: HommesComponent},
  { path: 'Femmes', component: FemmesComponent},
  { path: 'acceuil', component: AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
