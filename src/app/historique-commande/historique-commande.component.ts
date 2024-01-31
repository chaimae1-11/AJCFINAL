import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../commande';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent {

 id:number;
  commandes:Commande[];
  userid:number

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
    
    
    
    
  ngOnInit(): void {
  
    const userid = JSON.parse(localStorage.getItem('user')).login
    //partie 1

  
//partie 2
this.http.get<Commande[]>("http://localhost:63685/api/commande/"+userid).subscribe(
  (response:Commande[]) => {
    this.commandes=response;
   
  }
  ,
 (err) => {
    console.log("*************KO")
    
  },

  () => {
    console.log("*********complete****")
    
  }

);
}
}