'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Vliet Range Website design',
    category: 'Branding Design',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Light Inside Brand design',
    category: 'Branding Design',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Light Inside Brand design',
    category: 'Branding Design',
    image: 'https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default function Projects() {
  return (
    <div className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 animate-fade-up">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
              Our Projects
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What we create <span className="text-orange-500">for our customer</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="link" className="text-orange-500 p-0">
              <Link href="/projects" className="flex items-center">
              View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href="/projects" className="block relative overflow-hidden rounded-lg">
                <div className="relative h-80 overflow-hidden group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {project.title} <ArrowUpRight className="inline-block ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-orange-500">{project.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}