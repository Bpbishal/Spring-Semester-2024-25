using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using View_to_Action_Task.Models;

namespace View_to_Action_Task.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        [HttpGet]
        public ActionResult Index()
        {
            return View(new Student());
        }

        [HttpPost]
        public ActionResult Index(Student s)
        {
            return View(s);
        }
    }
}