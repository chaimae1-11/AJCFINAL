using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projetfinal.Models
{
 public class Article
    {
        private int idArticle;
        private string nom;
        private string description;
        private double prix;
        private string categorie;
        public Article()
        {

        }
        public Article(string nom, double prix,  string categorie)
        {
      
            this.nom = nom;
            this.prix = prix;
         
            this.categorie = categorie;

        }
        public Article(int idArticle, string nom, string description, double prix)
        {
            this.idArticle = idArticle;
            this.nom = nom;
            this.description = description;
            this.prix = prix;
        }
        public string Categorie
        {
            get { return categorie; }
            set { categorie = value; }
        }
        public int IdArticle
        {
            get { return idArticle; }
            set { idArticle = value; }
        }
        public string Nom
        {
            get { return nom; }
            set { nom = value; }
        }
        public string Description
        {
            get { return description; }
            set { description = value; }
        }
        public double Prix
        {
            get { return prix; }
            set { prix = value; }
        }
     
       
    }
}
