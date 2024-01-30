import { LigneCommande } from "./ligne-commande";

export class Commande {
    id: number;
    idClient: number;
    date: Date;
    prixTotal: number;
   infos:string;
   ligneCommandes:LigneCommande[];

}
