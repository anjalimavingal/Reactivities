using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public DateTime ActivityDate { get; set; }
        public string Description { get; set; }

        public string Categoty { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }

    }
}