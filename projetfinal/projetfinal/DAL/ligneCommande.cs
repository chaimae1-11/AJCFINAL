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
  using Newtonsoft.Json;
  using System;
    
    public partial class ligneCommande
    {
        public int id { get; set; }
        public Nullable<int> quantite { get; set; }
        public Nullable<double> prix { get; set; }
        public Nullable<int> idCommande { get; set; }
        public Nullable<int> idArticle { get; set; }
    
    public virtual Article Article { get; set; }
    [JsonIgnore]
        public virtual Commande Commande { get; set; }
    }
}
