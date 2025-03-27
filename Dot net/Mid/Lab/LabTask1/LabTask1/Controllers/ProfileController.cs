using LabTask1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LabTask1.Controllers
{
    public class ProfileController : Controller
    {
        // GET: Profile
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Education()
        {
            Education e1 = new Education()
            {
                degree = "MSC",
                result = "4.00",
                year = 2026
            };
            Education e2 = new Education()
            {
                degree = "BSC",
                result = "3.99",
                year = 2025
        };
        Education e3 = new Education()
        {
            degree = "HSC",
            result = "5.00",
            year = 2020
        };
            Education[] educations = new Education[] { e1, e2, e3 };
            return View(educations);
        }

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Ref()
        {
            return View();
        }
    }
}