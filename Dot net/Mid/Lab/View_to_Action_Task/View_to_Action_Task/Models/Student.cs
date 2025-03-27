using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Linq;
using System.Web;

namespace View_to_Action_Task.Models
{
    public class AgeGreaterThan18Attribute : ValidationAttribute
    {
        public AgeGreaterThan18Attribute()
        {
            ErrorMessage = "Age must be greater than 18.";
        }
        public override bool IsValid(object value)
        {
            if (value is DateTime dob)
            {
                var diff = DateTime.Now.Year - dob.Year;
                return diff > 18;
            }
            return false;
        }
    }

    public class IDAndEmailMatchAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var student = (Student)validationContext.ObjectInstance;
            string idPattern = @"^\d{2}-\d{5}-\d{1}$";
            string emailPattern = @"^(\d{2}-\d{5}-\d{1})@student\.aiub\.edu$";

            if (!Regex.IsMatch(student.id, idPattern))
            {
                return new ValidationResult("ID must be in the format xx-xxxxx-x, where x is a number.");
            }

            if (!Regex.IsMatch(student.email, emailPattern))
            {
                return new ValidationResult("Email must be in the format xx-xxxxx-x@student.aiub.edu.");
            }

            var match = Regex.Match(student.email, emailPattern);
            if (!match.Success || match.Groups[1].Value != student.id)
            {
                return new ValidationResult("Email ID prefix must match the student ID.");
            }

            return ValidationResult.Success;
        }
    }

    public class Student
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z\s.-]+$", ErrorMessage = "Only alphabets, spaces, dots, and dashes are allowed in name field.")]
        public string name { get; set; }

        [Required]
        [RegularExpression(@"^\d{2}-\d{5}-\d{1}$", ErrorMessage = "ID must be in the format xx-xxxxx-x, where x is a number.")]
        public string id { get; set; }

        [AgeGreaterThan18]
        public DateTime dob { get; set; }

        [Required]
        [IDAndEmailMatch]
        public string email { get; set; }
    }
}
