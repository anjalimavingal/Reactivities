using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context != null && context.Activities != null && context.Activities.Any()) return;

            var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Past Activity 1",
                        ActivityDate = DateTime.Now.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Categoty = "drinks",
                        City = "London",
                        Venue = "Pub"
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        ActivityDate = DateTime.Now.AddMonths(-1),
                        Description = "Activity 1 month ago",
                        Categoty = "culture",
                        City = "Paris",
                        Venue = "The Louvre",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 1",
                        ActivityDate = DateTime.Now.AddMonths(1),
                        Description = "Activity 1 month in future",
                        Categoty = "music",
                        City = "London",
                        Venue = "Wembly Stadium",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 2",
                        ActivityDate = DateTime.Now.AddMonths(2),
                        Description = "Activity 2 months in future",
                        Categoty = "food",
                        City = "London",
                        Venue = "Jamies Italian",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 3",
                        ActivityDate = DateTime.Now.AddMonths(3),
                        Description = "Activity 3 months in future",
                        Categoty = "drinks",
                        City = "London",
                        Venue = "Pub",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 4",
                        ActivityDate = DateTime.Now.AddMonths(4),
                        Description = "Activity 4 months in future",
                        Categoty = "culture",
                        City = "London",
                        Venue = "British Museum",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 5",
                        ActivityDate = DateTime.Now.AddMonths(5),
                        Description = "Activity 5 months in future",
                        Categoty = "drinks",
                        City = "London",
                        Venue = "Punch and Judy",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 6",
                        ActivityDate = DateTime.Now.AddMonths(6),
                        Description = "Activity 6 months in future",
                        Categoty = "music",
                        City = "London",
                        Venue = "O2 Arena",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 7",
                        ActivityDate = DateTime.Now.AddMonths(7),
                        Description = "Activity 7 months in future",
                        Categoty = "travel",
                        City = "Berlin",
                        Venue = "All",
                        
                    },
                    new Activity
                    {
                        Title = "Future Activity 8",
                        ActivityDate = DateTime.Now.AddMonths(8),
                        Description = "Activity 8 months in future",
                        Categoty = "drinks",
                        City = "London",
                        Venue = "Pub",                        
                    }
                };
                if(context != null && context.Activities != null)
                {
                    await context.Activities.AddRangeAsync(activities);
                    await context.SaveChangesAsync();  
                }      
        }
    }
}