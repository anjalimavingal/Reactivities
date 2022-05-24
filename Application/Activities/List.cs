using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List 
    {
        public class Query :  IRequest<List<Activity>> {}
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            public readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                // List<Activity> activities = new List<Activity>();
                // if(_context != null && _context.Activities != null)
                //     activities =  await _context.Activities.ToListAsync();
                // return activities;
                return await _context.Activities.ToListAsync();
            }
        }
    }
}