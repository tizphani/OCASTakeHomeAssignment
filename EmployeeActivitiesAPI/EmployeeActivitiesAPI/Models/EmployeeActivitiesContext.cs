using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace EmployeeActivitiesAPI.Models
{
    public class EmployeeActivitiesContext : DbContext
    {
        public EmployeeActivitiesContext(DbContextOptions<EmployeeActivitiesContext> options)
            : base(options)
        {
        }

        public DbSet<ActivitiesModel> Activities { get; set; }
        
    }
}