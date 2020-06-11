using Moq;
using Microsoft.EntityFrameworkCore;
namespace EmployeeActivitiesAPITests
{
    public interface IDbContext : IDisposable
    {
        DbSet<T> Set<T>() where T : class;
        int SaveChanges();
    }
}
