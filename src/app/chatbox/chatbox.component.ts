import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  constructor(public chatService: ChatService) {}

  sendMessage(message: string) {
    this.chatService.addMessage(message, 'Vous', true);
    
    switch(message.toLowerCase())
    {
      case"bonjour":case"salut":
        {
          this.chatService.addMessage('Je vous souhaite la bonne journée. Comment je peux vous aider?', 'Bot', false);
          break;
        }
      case"hi":case"hello":
      {
        this.chatService.addMessage("Ici c'est en français ! I'm sorry sir but this website only accpet french words.", 'Bot', false);
        break;
      }
      case"produit":case"produit?":case"comment on achete?":case"comment acheter?":case"comment acheter":case"acheter produit":case"acheter produit?":
      {
        this.chatService.addMessage("Naviguez à l'aide de l'en-tête et sélectionnez les articles qui vont s'ajouter directement à votre panier.", 'Bot', false);
        break;
      }
      case"panier":case"panier?":case"proceder a l'achat":case"acheter":case"acheter?":case"commander":case"commander?":case"finir":case"finir?":case"terminer":
      case"comment terminer":case"comment terminer?":case"comment finaliser":case"comment finaliser?":case"proceder a l'achat":
      {
        this.chatService.addMessage("Une fois votre panier rempli, cliquez sur le panier puis sur le bouton Commander pour procéder à l'achat.", 'Bot', false);
        break;
      }
      case"merci.":case"merci":case"je vous remercie":
      {
        this.chatService.addMessage("C'est avec plaisir ! je suis à votre disposition en cas de soucis.", 'Bot', false);
        break;
      }
      case"j'ai faim":
      {
        this.chatService.addMessage("Ce site ne vend pas de la nourriture.", 'Bot', false);
        break;
      }
      case"au revoir":case"bye":case"adieu":
      {
        this.chatService.addMessage("Merci. A bientôt.", 'Bot', false);
        break;
      }
      default:
      {
        this.chatService.addMessage('Je ne comprends pas votre message.', 'Bot', false);
        break;
      }




    }

  }
}
