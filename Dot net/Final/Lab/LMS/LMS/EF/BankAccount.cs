//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LMS.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class BankAccount
    {
        public int id { get; set; }
        public Nullable<int> L_id { get; set; }
        public Nullable<double> Account_Balance { get; set; }
    
        public virtual Librarian Librarian { get; set; }
    }
}
