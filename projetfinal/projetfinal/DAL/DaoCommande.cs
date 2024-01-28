using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace projetfinal.DAL
{
  public class DaoCommande
  {
    public List<Commande> FindALL()
    {
      ProjetFinalECommerceEntities5 contexte = new ProjetFinalECommerceEntities5();
      return contexte.Commandes.ToList<Commande>();

    }
    public Commande FindById(int id)
    {
      ProjetFinalECommerceEntities5 contexte = new ProjetFinalECommerceEntities5();

      return contexte.Commandes.Find(id);
    }


    public Commande Create(Commande c)
    {
      ProjetFinalECommerceEntities5 contexte = new ProjetFinalECommerceEntities5();
      contexte.Commandes.Add(c);
      contexte.SaveChanges();
      return (c);

    }
    public void Delete(int id)
    {
      ProjetFinalECommerceEntities5 contexte = new ProjetFinalECommerceEntities5();
      Commande c = contexte.Commandes.Find(id);
      contexte.Commandes.Remove(c);
      contexte.SaveChanges();


    }
    public void Update(Commande c)
    {
      ProjetFinalECommerceEntities5 contexte = new ProjetFinalECommerceEntities5();
      contexte.Entry(c).State = EntityState.Modified;

      contexte.SaveChanges();
    }
  }
}
