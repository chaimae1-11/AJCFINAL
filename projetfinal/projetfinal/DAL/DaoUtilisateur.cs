using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace projetfinal.DAL
{
  public class DaoUtilisateur
  {
    public List<Utilisateur> FindAll()
    {
      ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
      return context.Utilisateur.ToList<Utilisateur>();
    }

    public Utilisateur FindBylogin(string login)
    {
      ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
      return context.Utilisateur.Where(user => user.login.Equals(login)).FirstOrDefault();
    }

    public List<Utilisateur> FindByMail(string EMail)
    {
      ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
      return context.Utilisateur.Where(user => user.e_mail.Equals(EMail)).ToList();
    }

    public Utilisateur Create(Utilisateur user)
    {
      ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
      context.Utilisateur.Add(user);
      context.SaveChanges();
      return user;
    }

    public void Delete(int id)
    { 
     ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
    Utilisateur user = context.Utilisateur.Find(id);
    context.Utilisateur.Remove(user);
      context.SaveChanges();
    }

  public void Update(Utilisateur user)
    {
      ProjetFinalECommerceEntities5 context = new ProjetFinalECommerceEntities5();
      context.Entry(user).State = EntityState.Modified;
      context.SaveChanges();
    }
  }
}
