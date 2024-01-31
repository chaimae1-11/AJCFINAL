import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HommesComponent } from './hommes/hommes.component';
import { FemmesComponent } from './femmes/femmes.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';

import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { MessageComponent } from './message/message.component';
import { MessageinputComponent } from './messageinput/messageinput.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HommesComponent,
    FemmesComponent,
    AcceuilComponent,
    DetailcommandeComponent,
 
    HistoriqueCommandeComponent,
      LoginComponent,
      InscriptionComponent,
      WishlistComponent,
      ChatboxComponent,
      MessageComponent,
      MessageinputComponent,
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
