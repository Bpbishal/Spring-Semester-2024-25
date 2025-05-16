using IntroApi.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IntroApi.Controllers
{
    public class CategoryController : ApiController
    {
        PMS_Sp25_AEntities db = new PMS_Sp25_AEntities();
        [HttpGet]
        [Route("api/category/all")]
        public HttpResponseMessage GetAll()
        {
            var data = db.Categories.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
        [HttpGet]
        [Route("api/category/{id}")]
        public HttpResponseMessage Get(int id)
        {
            var data = db.Categories.Find(id);
            return Request.CreateResponse(HttpStatusCode.OK, data);

        }
        [HttpPost]
        [Route("api/category/create")]
        public HttpResponseMessage Create(Category c)
        {
            c.CreatedAt = DateTime.Now;
            c.CreatedBy = 99;
            db.Categories.Add(c);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.Created, "Category Created");
        }
        [HttpDelete]
        [Route("api/category/delete")]
        public HttpResponseMessage Delete(int id)
        {
            var data = db.Categories.Find(id);
            if (data == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Category not found");
            }
            db.Categories.Remove(data);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, "Catetgory deleted");
        }
        [HttpPatch]
        [Route("api/category/update")]
        public HttpResponseMessage Update(int id, Category c)
        {
            var data = db.Categories.Find(id);
            if (data == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Category not found");
            }
            data.Name = c.Name;
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, "Category Updated");

        }
    }
}
