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
    using System.Collections.Generic;
    
    public partial class Article
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Article()
        {
            this.ligneCommandes = new HashSet<ligneCommande>();
        }
    
        public int idArticle { get; set; }
        public string nom { get; set; }
        public string description { get; set; }
        public string categorie { get; set; }
        public Nullable<double> prix { get; set; }
        public string image { get; set; }
   
    [JsonIgnore]
    public virtual ICollection<ligneCommande> ligneCommandes { get; set; }
  }
}
