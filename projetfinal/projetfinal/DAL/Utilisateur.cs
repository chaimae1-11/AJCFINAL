//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace projetfinal.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Utilisateur
    {
        public string login { get; set; }
        public string password { get; set; }
        public string nom { get; set; }
        public string prenom { get; set; }
        public string adresse { get; set; }
        public Nullable<System.DateTime> date_naissance { get; set; }
        public Nullable<bool> isAdmin { get; set; }
        public string e_mail { get; set; }
    }
}
