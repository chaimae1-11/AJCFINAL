using projetfinal.DAL;
using projetfinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;


namespace projetfinal.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class UtilisateurController :ApiController
    {
    //GET: api/Utilisateurs
    public List<Utilisateur> Get()
    {
      return new DaoUtilisateur().FindAll();
    }

    // GET: api/Login/5
    public string Get(int id)
    {
      return "value";
    }


    [System.Web.Mvc.HttpPost]
    [System.Web.Http.Route("api/Utilisateur/Signup")]
    public void Signup([FromBody] Utilisateur value)
    {
      new DaoUtilisateur().Create(value);
    }

    [System.Web.Mvc.HttpPost]
    [System.Web.Http.Route("api/Utilisateur/Login")]
    public Utilisateur Login([FromBody] Authentification value)
    {
      return new DaoUtilisateur().FindBylogin(value.login);
    }

    // PUT: api/Utilisateurs/5
    public void Put([FromBody]Utilisateur value)
    {
      new DaoUtilisateur().Update(value);
    }

    // DELETE: api/Utilisateurs/5
    public void Delete(int id)
    {
    }
  }
}
