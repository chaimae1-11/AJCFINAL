import { Articles } from "./articles";

export class LigneCommande {
 id?:number;
 quantite:number;
 prix:number;
 idCommande?:number;
 idArticle:number;  
  static findIndex: any;
  nomArticle:Articles["nom"];
  Article?: any;

}
