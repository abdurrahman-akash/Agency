'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Vliet Range Website Design',
    category: 'Branding Design',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Light Inside Brand Design',
    category: 'Branding Design',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Momentum App Design',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Ecommerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/8962119/pexels-photo-8962119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Health & Fitness App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What we create <span className="text-chart-1">for our customer</span></h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Websites and products that help startups and innovative companies gain more audience. We achieve cutting-edge results, deliver seamless, innovative products, and impressive websites.
          </p>
        </motion.div>
      </div>

      <div className="mb-10">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-chart-1 hover:text-white">All Projects</Button>
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-chart-1 hover:text-white">Branding</Button>
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-chart-1 hover:text-white">UI/UX Design</Button>
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-chart-1 hover:text-white">Web Development</Button>
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-chart-1 hover:text-white">Mobile App</Button>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="bg-zinc-100 border-zinc-200 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="h-5 w-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <p className="text-orange-500">{project.category}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}