'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/Spotlight';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { ArrowUpRight, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { HeroParallax } from '@/components/ui/project-parallax';

// Featured projects data for parallax section
const featuredProjects = [
  {
    title: "Vliet Range Website",
    link: "/projects/vliet-range",
    thumbnail: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Light Inside Brand",
    link: "/projects/light-inside",
    thumbnail: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Momentum App",
    link: "/projects/momentum-app",
    thumbnail: "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Ecommerce Platform",
    link: "/projects/ecommerce-platform",
    thumbnail: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Financial Dashboard",
    link: "/projects/financial-dashboard",
    thumbnail: "https://images.pexels.com/photos/8962119/pexels-photo-8962119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Health & Fitness App",
    link: "/projects/health-fitness-app",
    thumbnail: "https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Smart Home System",
    link: "/projects/smart-home",
    thumbnail: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Educational Platform",
    link: "/projects/educational-platform",
    thumbnail: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Social Network App",
    link: "/projects/social-network",
    thumbnail: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Complete projects list
const projects = [
  {
    id: 1,
    title: 'Vliet Range Website',
    subtitle: 'E-commerce platform for a premium clothing brand',
    category: 'Branding Design',
    tags: ['UI/UX', 'Web Development', 'E-commerce'],
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2024',
    client: 'Vliet Fashion Inc.',
    featured: true
  },
  {
    id: 2,
    title: 'Light Inside Brand',
    subtitle: 'Brand identity for a modern lighting company',
    category: 'Branding Design',
    tags: ['Branding', 'Logo Design', 'Identity'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2024',
    client: 'Light Inside Co.',
    featured: true
  },
  {
    id: 3,
    title: 'Momentum App',
    subtitle: 'Productivity app for professionals',
    category: 'UI/UX Design',
    tags: ['Mobile App', 'UI/UX Design', 'Development'],
    image: 'https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2023',
    client: 'Momentum Technologies',
    featured: true
  },
  {
    id: 4,
    title: 'Ecommerce Platform',
    subtitle: 'Multi-vendor marketplace solution',
    category: 'Web Development',
    tags: ['E-commerce', 'Web Development', 'UI/UX'],
    image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2023',
    client: 'Global Retail Inc.',
    featured: false
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    subtitle: 'Data visualization for financial analytics',
    category: 'UI/UX Design',
    tags: ['Dashboard', 'Data Visualization', 'UI/UX'],
    image: 'https://images.pexels.com/photos/8962119/pexels-photo-8962119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2023',
    client: 'FinTech Solutions',
    featured: false
  },
  {
    id: 6,
    title: 'Health & Fitness App',
    subtitle: 'Personalized wellness tracking platform',
    category: 'Mobile App',
    tags: ['Mobile App', 'UI/UX Design', 'Health Tech'],
    image: 'https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2022',
    client: 'FitLife Innovations',
    featured: false
  },
  {
    id: 7,
    title: 'Smart Home System',
    subtitle: 'IoT platform for connected living',
    category: 'Web Development',
    tags: ['IoT', 'Web Development', 'Mobile App'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2022',
    client: 'HomeConnect Systems',
    featured: false
  },
  {
    id: 8,
    title: 'Educational Platform',
    subtitle: 'Online learning management system',
    category: 'Web Development',
    tags: ['EdTech', 'Web Development', 'UI/UX'],
    image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2022',
    client: 'EduTech Innovations',
    featured: false
  },
  {
    id: 9,
    title: 'Social Network App',
    subtitle: 'Community platform for professionals',
    category: 'Mobile App',
    tags: ['Social Media', 'Mobile App', 'UI/UX'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: '2021',
    client: 'Connect Network Inc.',
    featured: false
  }
];

// All unique categories
const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

// All unique tags
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

// All unique years
const years = ['All', ...Array.from(new Set(projects.map(project => project.year)))];

// Animation variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Filter projects based on selections
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const yearMatch = selectedYear === 'All' || project.year === selectedYear;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
    const searchMatch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && yearMatch && tagMatch && searchMatch;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setSelectedTags([]);
    setSearchQuery('');
  };

  return (
    <div className="relative min-h-screen text-white bg-zinc-950 overflow-hidden">
      {/* Background effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />

      {/* Hero Section with Parallax */}
      <section className="relative">
        <div className="h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <HeroParallax products={featuredProjects.map(project => ({
            title: project.title,
            link: project.link,
            thumbnail: project.thumbnail
          }))}  showTitle= {false}/>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-b from-transparent via-black/40 to-black">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium">
              Our Projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <TextGenerateEffect words="Bringing Ideas to Life" />
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Websites and digital products that help startups and innovative companies 
              gain more audience and deliver exceptional user experiences.
            </p>
            
            <Button 
              className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-full px-8 py-6"
              onClick={() => {
                const projectsSection = document.getElementById('projects-grid');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Spotlight effect */}
      <Spotlight className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" fill="white" />

      {/* Main Projects Section */}
      <section id="projects-grid" className="relative py-24 z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>
                <p className="text-gray-400">Showcasing our creative solutions across various industries</p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-zinc-800/50 border border-zinc-700 rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                {/* Filter toggle */}
                <Button 
                  variant="outline"
                  className="border-zinc-700 rounded-full flex items-center gap-2 text-gray-500 hover:text-black/40 hover:border-chart-1 transition-colors"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            {/* Expandable filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Categories */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedCategory === category
                                ? 'bg-chart-1 text-white'
                                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                          <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedTags.includes(tag)
                                ? 'bg-chart-1 text-white'
                                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Year */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Year</h3>
                      <div className="flex flex-wrap gap-2">
                        {years.map(year => (
                          <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedYear === year
                                ? 'bg-chart-1 text-white'
                                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Reset filters */}
                  <div className="mt-6 flex justify-end">
                    <Button 
                      variant="outline" 
                      className="border-zinc-700 hover:border-chart-1 text-gray-500 hover:text-gray-700"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Active filters display */}
            {(selectedCategory !== 'All' || selectedYear !== 'All' || selectedTags.length > 0 || searchQuery) && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-400">Active filters:</span>
                
                {selectedCategory !== 'All' && (
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                )}
                
                {selectedYear !== 'All' && (
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    Year: {selectedYear}
                    <button
                      onClick={() => setSelectedYear('All')}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                )}
                
                {selectedTags.map(tag => (
                  <span key={tag} className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
                
                {searchQuery && (
                  <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    Search: {searchQuery}
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`} className="block h-full">
                    <Card className="h-full bg-zinc-900/80 backdrop-blur-sm border-zinc-800 group-hover:border-chart-1/30 overflow-hidden transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {project.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="bg-chart-1 text-white text-xs font-medium px-2 py-1 rounded-md">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl font-bold group-hover:text-chart-1 transition-colors duration-300 text-chart-2">
                              {project.title}
                            </CardTitle>
                            <p className="text-gray-400 mt-1">{project.subtitle}</p>
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-chart-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-zinc-800 text-xs rounded-md text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardHeader>
                      
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-chart-1">{project.category}</span>
                        <span className="text-gray-400 text-sm">{project.year}</span>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16">
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-4">No projects found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your filters or search criteria to find what you're looking for.</p>
                  <Button 
                    onClick={resetFilters}
                    className="bg-chart-1 hover:bg-chart-1/90 text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-12 border border-zinc-800/50"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-chart-1 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Let's collaborate to bring your vision to life. Our team of experts is ready to help you create exceptional digital experiences.
                </p>
                <Link href="/contact">
                  <Button className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-full px-8 py-6">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              
              <div className="w-full md:w-1/3 max-w-sm">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-chart-1/20 rounded-xl blur-xl"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}