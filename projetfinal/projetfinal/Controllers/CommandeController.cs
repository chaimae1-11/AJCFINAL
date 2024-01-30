using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using projetfinal.DAL;

namespace projetfinal.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class CommandeController : ApiController
  {
    // GET: api/Commande
    public List<Commande> Get()
    {
      return new DaoCommande().FindALL();
    }


    public List<Commande> Get(int id)
    {
      return new DaoCommande().FindById(id);
    }


    // POST: api/Commande
    public Commande Post([FromBody]Commande c)
    {
      return new DaoCommande().Create(c);
    }

    // PUT: api/Commande
    public void Put([FromBody]Commande c)
    {
      new DaoCommande().Update(c);
    }

    // DELETE: api/Commande/5
    public void Delete(int idArticle)
    {
      new DaoCommande().Delete(idArticle);
    }
  }
}
