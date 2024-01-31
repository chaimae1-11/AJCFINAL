import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  utilisateur: Utilisateur;

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) { }

  connexion:Login = {
    login: '',
    password: ''
  }
  
  isUpdate = false
  showError = false;
  showErrorPasw = false;

  login(){

    const conex = JSON.stringify(this.connexion);
    console.log(conex);

    this.http.post<Utilisateur>("http://localhost:63685/api/login",conex,{
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }).subscribe(response => {
      
      this.authService.loginSuccess(response); 
     this.router.navigateByUrl('acceuil');
    
    },
      err => {    
         this.showError = false;
        this.showErrorPasw = true;
        console.log(err);
    });
  } 
}
  
