import { Component } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  message: string;
  constructor(private http: HttpClient) { }

  user : Utilisateur ={
    login: '',
    password: '',
    nom: '',
    prenom: '',
    adresse: '',
    isAdmin: false,
    date_naissance: undefined,
    e_mail: ''
  }

  confimPasword = '';
  showError = false;

   isValidDate(stringDate) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(stringDate);
  }

  isValidPw(Pw1,Pw2){
    if(Pw1 === Pw2 && Pw1 !==""){
      return true;
    }
    return false;
  }

  create(user : Utilisateur){
    const body = JSON.stringify(user);
    this.http.post("http://localhost:63685/api/Utilisateur/signup",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.message="personne créée"
      alert("Inscription reussie");
      window.location.href = "/login";
    },
    err => {    
      console.log(err);  
      this.message="erreur de creation personne"
      alert(this.message)
    });
  }

  save(){

    if(this.validationForm()){
      let saveUser : Utilisateur = new Utilisateur();
      saveUser.login = this.user.login;
      saveUser.password = this.user.password;
      saveUser.nom = this.user.nom;
      saveUser.prenom = this.user.prenom;
      saveUser.adresse = this.user.adresse;
      saveUser.isAdmin = this.user.isAdmin;
      saveUser.date_naissance = this.user.date_naissance;
      saveUser.e_mail = this.user.e_mail;

      console.log(saveUser),

      this.create(saveUser);

    }else{
      console.log("Ko");
    }
    
    
  }

  validationForm(){
    let flag =true;
    let validationDate = this.isValidDate(this.user.date_naissance);
    if(!validationDate){
      document.getElementById("dateNaissance").classList.add("is-invalid");
      flag = false;
    }else{
      document.getElementById("dateNaissance").classList.remove("is-invalid");
    }

    let ValPw= this.isValidPw(this.user.password, this.confimPasword);
    if(!ValPw){
      flag = false;
      document.getElementById("Password").classList.add("is-invalid");
      document.getElementById("passwordConfim").classList.add("is-invalid");
    }else{
      document.getElementById("Password").classList.remove("is-invalid");
      document.getElementById("passwordConfim").classList.remove("is-invalid");
    }
   
    if(this.user.login == ''){
      flag = false;document.getElementById("login").classList.add("is-invalid");
    }else{document.getElementById("login").classList.remove("is-invalid");}

    if(this.user.nom == ''){
      flag = false;document.getElementById("nom").classList.add("is-invalid");
    }else{document.getElementById("nom").classList.remove("is-invalid");}

    if(this.user.prenom == ''){
      flag = false;document.getElementById("prenom").classList.add("is-invalid");
    }else{document.getElementById("prenom").classList.remove("is-invalid");}

    if(this.user.adresse == ''){
      flag = false;document.getElementById("adresse").classList.add("is-invalid");
    }else{document.getElementById("adresse").classList.remove("is-invalid");}
    if(this.user.e_mail == ''){
      flag = false;document.getElementById("mail").classList.add("is-invalid");
    }else{document.getElementById("mail").classList.remove("is-invalid");}
    
    return flag;
  }
}
