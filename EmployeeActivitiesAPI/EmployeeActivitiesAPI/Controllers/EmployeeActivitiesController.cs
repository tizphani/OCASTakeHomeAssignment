using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeActivitiesAPI.Models;

namespace EmployeeActivitiesAPI.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeActivitiesController : ControllerBase
    {
        private readonly EmployeeActivitiesContext _context;

        public EmployeeActivitiesController(EmployeeActivitiesContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeActivities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActivitiesModel>>> GetEmployeeActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        // GET: api/EmployeeActivities/1
        [HttpGet("{id}")]
        public async Task<ActionResult<ActivitiesModel>> GetEmployeeActivitiesModel(int id)
        {
            var employeeActivitiesModel = await _context.Activities.FindAsync(id);

            if (employeeActivitiesModel == null)
            {
                return NotFound();
            }

            return employeeActivitiesModel;
        }

        // PUT: api/EmployeeActivities/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeActivitiesModel(int id, ActivitiesModel employeeActivitiesModel)
        {
            if (id != employeeActivitiesModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeActivitiesModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeActivitiesModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeActivities
        [HttpPost]
        public async Task<ActionResult<ActivitiesModel>> PostEmployeeActivitiesModel(ActivitiesModel employeeActivitiesModel)
        {
            _context.Activities.Add(employeeActivitiesModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeActivitiesModel", new { id = employeeActivitiesModel.Id }, employeeActivitiesModel);
        }

        // DELETE: api/EmployeeActivities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ActivitiesModel>> DeleteEmployeeActivitiesModel(int id)
        {
            var employeeActivitiesModel = await _context.Activities.FindAsync(id);
            if (employeeActivitiesModel == null)
            {
                return NotFound();
            }

            _context.Activities.Remove(employeeActivitiesModel);
            await _context.SaveChangesAsync();

            return employeeActivitiesModel;
        }

        private bool EmployeeActivitiesModelExists(int id)
        {
            return _context.Activities.Any(e => e.Id == id);
        }
    }
}
