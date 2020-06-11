using NUnit.Framework;
using EmployeeActivitiesAPI.Controllers;

using Moq;
using Microsoft.EntityFrameworkCore.Internal;
using EmployeeActivitiesAPI.Models;

namespace EmployeeActivitiesAPITests
{
    public class EmployeeActivitiesControllerTests
    {
        [SetUp]
        public void Setup()
        {
            var mockContext = new Mock<EmployeeActivitiesContext>();
        }

        [Test]
        public void GetEmployeeActivitiesReturnsAllEmployeeActivities()
        {
            Assert.Pass();
        }
    }
}