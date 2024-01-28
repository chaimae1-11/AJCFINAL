using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projetfinal.Models
{
  public class Commande
  {
    private int id;
    private int idClient;
    private DateTime date;
    private double prixTotal;
    private string infos;
    public Commande()
    {

    }
    public Commande(int id, int idClient, DateTime date, double prixTotal, string infos)
    {
      this.id = id;
      this.idClient = idClient;
      this.date = date;
      this.prixTotal = prixTotal;
      this.infos = infos;
    }
    public Commande(int idClient, DateTime date, double prixTotal, string infos)
    {
      this.idClient = idClient;
      this.date = date;
      this.prixTotal = prixTotal;
      this.infos = infos;
    }
    public int Id
    {
      get { return id; }
      set { id = value; }
    }
    public int IdClient
    {
      get { return idClient; }
      set { idClient = value; }
    }
    public DateTime Date
    {
      get { return date; }
      set { date = value; }
    }
    public double PrixTotal
    {
      get { return prixTotal; }
      set { prixTotal = value; }
    }
    public string Infos
    {
      get { return infos; }
      set { infos = value; }
    }
  }
}
