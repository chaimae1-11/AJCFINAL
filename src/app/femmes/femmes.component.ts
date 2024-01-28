import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-femmes',
  templateUrl: './femmes.component.html',
  styleUrls: ['./femmes.component.css']
})
export class FemmesComponent {
  categorie: string;
  articles: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:63685/api/Article").subscribe(
      (response) => {
        this.articles=response;
       
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
