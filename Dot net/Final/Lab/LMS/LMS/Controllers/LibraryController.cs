using LMS.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LMS.Controllers
{
    public class LibraryController : Controller
    {
        // GET: Library
        private LMSEntities db=new LMSEntities();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Borrow()
        {
            var data=db.Borrows.ToList();
            return View(data);
        }
        [HttpPost]
        public ActionResult InitiateBorrow(Borrow b)
        {
            db.Borrows.Add(b);
            if (db.SaveChanges() > 0)
            {
                //TempData["Msg"] = "listed";
                return RedirectToAction("Borrow");
            }
            //TempData["Msg"] = "Not listed";
            return View();
        }
    }
}