using crudPractice.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace crudPractice.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        crudEntities db = new crudEntities();
        [HttpGet]
        public ActionResult Index()
        {
            //listing all students
            var data = db.Students.ToList();
            return View(data);
        }
        [HttpPost]
        public ActionResult Index(Student s)
        {

            return View();
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Student s)
        {
            
            db.Students.Add(s);
            //db.SaveChanges();//reflect the change in db;num of rows affected return 
            if (db.SaveChanges() > 0)
            {
                TempData["Msg"] = "Student Added";
                return RedirectToAction("Index");
            }
            TempData["Msg"] = "Not successfull";
            return View(s);
           
        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            var student = db.Students.Find(id);

            return View(student);
        }
        [HttpPost]
        public ActionResult Edit(Student s)//pbj from form
        {
            var axobj = db.Students.Find(s.id);//obj from db
            axobj.Name = s.Name;
            axobj.Dob = s.Dob;
            axobj.Cgpa = s.Cgpa;
            if(db.SaveChanges()>0)
            {
                TempData["Msg"] = "Student Updated";
                return RedirectToAction("Index");
            }
            else
            {
                return View(s);
            }
        }
    }
}