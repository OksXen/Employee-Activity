using System.ComponentModel.DataAnnotations;
using TechSolutionsLibs.Models.Interface;

namespace TechSolutionsLibs.Models
{
    public partial  class EmployeeActivity : IEmployeeActivity
    {
        [Key]
        public int ActivityId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public string ActivityName { get; set; }

        public string Comments { get; set; }
    }
}
