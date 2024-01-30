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
  public class LoginController : ApiController
  {
    // GET: api/Login
    public Utilisateur Get([FromBody] Authentification login)
    {
      return new DaoUtilisateur().FindBylogin(login.login);
    }

    // POST: api/Login
    public Utilisateur Post([FromBody] Authentification value)
    {
      return new DaoUtilisateur().FindBylogin(value.login);
    }

    // GET: api/Login/5
    public string Get(int id)
    {
      return "value";
    }

    // PUT: api/Login/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/Login/5
    public void Delete(int id)
    {
    }
  }
}
