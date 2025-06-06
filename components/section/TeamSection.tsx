'use client';

import { Button } from '@/components/ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'William John',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Jessica Clark',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'James Harris',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default function Team() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <div className="text-center mb-16 animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
          Our Team
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Meet the talented individuals who form <span className="text-orange-500">the heartbeat</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our diverse team of experts brings together skills and experiences from various backgrounds to deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-zinc-100 rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-500">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
        <Button variant="outline" className="border-zinc-800 hover:bg-orange-500 hover:text-white">
          View All Team Members
        </Button>
      </div>
    </div>
  );
}