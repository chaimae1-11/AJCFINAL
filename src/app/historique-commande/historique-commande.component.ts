import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../commande';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent {

 id:number;
  commandes:Commande[];

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
    
    
    
    
  ngOnInit(): void {
  
  
    //partie 1
    this.route.params.subscribe(params => {
  
      this.id = params['id'];
      console.log(this.id);
  
    });
      
//partie 2
this.http.get<Commande[]>("http://localhost:63685/api/commande/"+this.id).subscribe(
  (response:Commande[]) => {
    this.commandes=response;
   
    console.log(response);
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


