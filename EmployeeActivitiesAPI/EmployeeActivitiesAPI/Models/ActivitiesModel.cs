using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeActivitiesAPI.Models
{
    public class ActivitiesModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Activity { get; set; }
        public string Comments { get; set; }

        public string EmailAddress { get; set; }
    }
}
