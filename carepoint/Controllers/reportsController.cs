using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using carepoint.Models;

namespace carepoint.Controllers
{
    public class reportsController : ApiController
    {
        private carepointdbEntities db = new carepointdbEntities();

        // GET: api/reports
        public IQueryable<report> Getreports()
        {
            return db.reports;
        }

        // GET: api/reports/5
        [ResponseType(typeof(report))]
        public IHttpActionResult Getreport(int id)
        {
            report report = db.reports.Find(id);
            if (report == null)
            {
                return NotFound();
            }

            return Ok(report);
        }

        // PUT: api/reports/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putreport(int id, report report)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != report.id)
            {
                return BadRequest();
            }

            db.Entry(report).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!reportExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/reports
        [ResponseType(typeof(report))]
        public IHttpActionResult Postreport(report report)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.reports.Add(report);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = report.id }, report);
        }

        // DELETE: api/reports/5
        [ResponseType(typeof(report))]
        public IHttpActionResult Deletereport(int id)
        {
            report report = db.reports.Find(id);
            if (report == null)
            {
                return NotFound();
            }

            db.reports.Remove(report);
            db.SaveChanges();

            return Ok(report);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool reportExists(int id)
        {
            return db.reports.Count(e => e.id == id) > 0;
        }
    }
}