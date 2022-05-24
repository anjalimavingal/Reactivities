using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Detail
    {
        public class Query : IRequest<Activity> {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
            this._context = context;

            }
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                // Activity activity = new Activity();
                // if(_context != null && _context.Activities != null )
                //     activity =  await _context.Activities.FindAsync(request.Id) ?? throw new ArgumentException();
                // return activity;
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}