using projetfinal.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projetfinal.Controllers
{
    public class AdminController : Controller
    {
    // GET: Admin
    public ActionResult Index()
    {
      //if (Session["admin"] == null)
      //    Session["admin"] = u;
      return View((Utilisateur)Session["admin"]);
    }
    //page Articles
    [HttpGet]
    public ActionResult Articles()
    {
      List<Article> liste = new List<Article>();
      liste = new DaoArticle().FindALL();
      return View(liste);
    }
    [HttpPost]
    public ActionResult Articles(int id)
    {
      List<Article> liste = new List<Article>();
      liste = new DaoArticle().FindALL();
      ViewBag.article = id;
      return View(liste);
    }
    public ActionResult ArticlesAdd(Article a)
    {
      new DaoArticle().Create(a);
      return RedirectToAction("Articles");
    }
    public ActionResult ArticlesUpdate(Article a)
    {
      new DaoArticle().Update(a);
      return RedirectToAction("Articles");
    }
    public ActionResult ArticlesDelete(int id)
    {
      new DaoArticle().Delete(id);
      return RedirectToAction("Articles");
    }
    //page Clients
    [HttpGet]
    public ActionResult Clients()
    {
      List<Utilisateur> liste = new List<Utilisateur>();
      liste = new DaoUtilisateur().FindAll();
      return View(liste);
    }
    [HttpPost]
    public ActionResult Clients(string id)
    {
      List<Utilisateur> liste = new List<Utilisateur>();
      liste = new DaoUtilisateur().FindAll();
      ViewBag.user = id;
      return View(liste);
    }
    public ActionResult ClientsAdd(Utilisateur u)
    {
      new DaoUtilisateur().Create(u);
      return RedirectToAction("Clients");

    }
    public ActionResult ClientsUpdate(Utilisateur u)
    {
      new DaoUtilisateur().Update(u);
      return RedirectToAction("Clients");

    }
    public ActionResult ClientsDelete(int id)
    {
     new DaoUtilisateur().Delete(id);
    return RedirectToAction("Clients");
  }
    //page Commandes
    public ActionResult Commandes(string id)
    {
      List<Commande> liste = new List<Commande>();
      liste = new DaoCommande().SelectByClient(id);
      return View(liste);
    }
  }
}
