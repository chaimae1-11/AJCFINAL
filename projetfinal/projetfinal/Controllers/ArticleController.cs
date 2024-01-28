using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net.Http;
using System.Web.Http.Cors;
using projetfinal.DAL;



namespace projetfinal.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class ArticleController : ApiController
    {
    // GET: api/Article
    public List<Article> Get()
    {
      return new DaoArticle().FindALL();
    }

    // GET: api/Article/5
    public Article Get(int idArticle)
    {
      return new DaoArticle().FindById(idArticle);
    }
    public List<Article> Get(string categorie)
    {
      return new DaoArticle().FindByCategorie(categorie);
    }

    // POST: api/Article
    public void Post([FromBody]Article a)
    {
      new DaoArticle().Create(a);
    }

    // PUT: api/Article
    public void Put([FromBody]Article a)
    {
      new DaoArticle().Update(a);
    }

    // DELETE: api/Article/5
    public void Delete(int idArticle)
    {
      new DaoArticle().Delete(idArticle);
    }
  }
}
