using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projetfinal.Models
{
  public class Utilisateurs
  {
    private int id;
    private string password;
    private string nom;
    private string prenom;
    private string adresse;
    private string isAdmin;
    private DateTime date_naissance;
    private string e_mail;
    public Utilisateurs()
    {

    }
    public Utilisateurs(int id, string password, string nom, string prenom, string adresse, string isAdmin, DateTime date_naissance, string e_mail)
    {
      this.id = id;
      this.password = password;
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.isAdmin = isAdmin;
      this.date_naissance = date_naissance;
      this.e_mail = e_mail;
    }
    public string E_mail
    {
      get { return e_mail; }
      set { e_mail = value; }
    }
    public string IdAdmin
    {
      get { return isAdmin; }
      set { isAdmin = value; }
    }
    public DateTime Date_naissance
    {
      get { return date_naissance; }
      set { date_naissance = value; }
    }
    public int Id
    {
      get { return id; }
      set { id = value; }
    }
    public string Password
    {
      get { return password; }
      set { password = value; }
    }
    public string Nom
    {
      get { return nom; }
      set { nom = value; }
    }
    public string Prenom
    {
      get { return prenom; }
      set { prenom = value; }
    }
    public string Adresse
    {
      get { return adresse; }
      set { adresse = value; }
    }
  }
  }
