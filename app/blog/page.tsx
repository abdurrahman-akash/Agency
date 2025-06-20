'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/Spotlight';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Avatar } from '@/components/ui/avatar';
import Meteors from '@/components/ui/meteors';

// Define types for blog data structure
interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
}

interface DateRange {
  start: string | null;
  end: string | null;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Agency Work",
    excerpt: "Explore how artificial intelligence is transforming the creative industry and how agencies can leverage these technologies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Technology",
    tags: ["AI", "Innovation", "Digital Transformation"],
    author: {
      name: "Jessica Clark",
      role: "Creative Director",
      avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-06-10",
    readTime: "8 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
  },
  {
    id: 2,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to create inclusive designs that work for everyone, regardless of their abilities or disabilities.",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Design",
    tags: ["Accessibility", "UX Design", "Inclusion"],
    author: {
      name: "Michael Rodriguez",
      role: "UX/UI Designer",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-06-05",
    readTime: "6 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    id: 3,
    title: "How to Build a Successful Client Relationship",
    excerpt: "Discover the key strategies for fostering strong, long-lasting relationships with your clients.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Business",
    tags: ["Client Management", "Communication", "Strategy"],
    author: {
      name: "William John",
      role: "CEO & Founder",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-05-28",
    readTime: "5 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Implementing Sustainable Practices in Digital Agencies",
    excerpt: "How digital agencies can reduce their environmental footprint while enhancing their brand reputation.",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Sustainability",
    tags: ["Green Tech", "Corporate Responsibility", "Sustainability"],
    author: {
      name: "Emily Johnson",
      role: "Marketing Strategist",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-05-20",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2213&q=80"
  },
  {
    id: 5,
    title: "Optimizing Your Web Development Workflow",
    excerpt: "Tips and tools to streamline your development process and increase productivity.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Development",
    tags: ["Web Development", "Productivity", "Tools"],
    author: {
      name: "James Harris",
      role: "Lead Developer",
      avatar: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-05-15",
    readTime: "9 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 6,
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color choices affect brand perception and customer behavior.",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Design",
    tags: ["Branding", "Psychology", "Marketing"],
    author: {
      name: "Jessica Clark",
      role: "Creative Director",
      avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-05-10",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 7,
    title: "Advanced SEO Strategies for 2025",
    excerpt: "Stay ahead of the competition with these cutting-edge SEO techniques and algorithm insights.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Marketing",
    tags: ["SEO", "Digital Marketing", "Strategy"],
    author: {
      name: "Emily Johnson",
      role: "Marketing Strategist",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-05-05",
    readTime: "8 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 8,
    title: "Building High-Performance Web Applications",
    excerpt: "Learn the techniques and best practices for creating fast, responsive web applications.",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Development",
    tags: ["Performance", "Web Development", "Frontend"],
    author: {
      name: "James Harris",
      role: "Lead Developer",
      avatar: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-04-28",
    readTime: "10 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 9,
    title: "The Rise of Voice Search: What Marketers Need to Know",
    excerpt: "How voice-activated technology is changing search behaviors and what it means for your SEO strategy.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Marketing",
    tags: ["Voice Search", "SEO", "Digital Marketing"],
    author: {
      name: "Emily Johnson",
      role: "Marketing Strategist",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-04-20",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 10,
    title: "Using Data Analytics to Drive Creative Decisions",
    excerpt: "How to balance creativity with data-driven insights for more effective campaigns and designs.",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Analytics",
    tags: ["Data Analytics", "Creative Strategy", "Decision Making"],
    author: {
      name: "Sarah Chen",
      role: "AI Research Scientist",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-04-15",
    readTime: "9 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 11,
    title: "Ethical Considerations in AI Development",
    excerpt: "Exploring the moral implications and responsibilities when creating AI-powered solutions.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Technology",
    tags: ["AI Ethics", "Technology", "Innovation"],
    author: {
      name: "Sarah Chen",
      role: "AI Research Scientist",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-04-10",
    readTime: "11 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1581092921461-7d55b9bed3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 12,
    title: "Remote Collaboration Tools for Creative Teams",
    excerpt: "The best software and methodologies for maintaining creativity and productivity in distributed teams.",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Productivity",
    tags: ["Remote Work", "Collaboration", "Tools"],
    author: {
      name: "Michael Rodriguez",
      role: "UX/UI Designer",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    date: "2025-04-05",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

// Get unique categories from blog posts
const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];

// Get unique tags from blog posts
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

// Format date to display
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Blog page component
export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest"); // newest, oldest, popular
  
  const postsPerPage = 6;
  
  // Filter posts based on selected filters
  const filteredPosts = blogPosts.filter(post => {
    // Category filter
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
    
    // Tags filter
    const tagsMatch = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    // Date range filter
    const dateMatch = (!dateRange.start || new Date(post.date) >= new Date(dateRange.start)) &&
                     (!dateRange.end || new Date(post.date) <= new Date(dateRange.end));
    
    // Search query filter
    const searchMatch = searchQuery === "" || 
                       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && tagsMatch && dateMatch && searchMatch;
  });
  
  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "popular") {
      // For demonstration, let's assume featured posts are more popular
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    return 0;
  });
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Get featured posts for hero section
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Change page
interface PaginateFunction {
    (pageNumber: number): void;
}

const paginate: PaginateFunction = (pageNumber) => setCurrentPage(pageNumber);
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1); // Reset to first page when changing filters
  };
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing filters
  };
  
  // Handle date range change
  const handleDateChange = (startOrEnd: 'start' | 'end', value: string | null) => {
    setDateRange(prev => ({
      ...prev,
      [startOrEnd]: value
    }));
    setCurrentPage(1); // Reset to first page when changing filters
  };
  
  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedTags([]);
    setDateRange({ start: null, end: null });
    setSearchQuery("");
    setSortBy("newest");
    setCurrentPage(1);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden ">
      {/* Background effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      {/* <BackgroundBeamsWithCollision className="opacity-30" /> */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-800"></div>
      
      {/* Header section */}
      {/* <BackgroundBeamsWithCollision className="pt-40 pb-24" > */}
      {/* Hero section with featured articles */}
      <section className="relative pt-40 pb-16 md:pt-32 md:pb-24 ">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium"
            >
              Our Blog
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <TextGenerateEffect words="Insights, Stories & Ideas" />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg mb-10"
            >
              Explore our collection of articles on design, development, and digital innovation.
            </motion.p>
          </motion.div>
          
          {/* Featured posts carousel */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <span className="inline-block px-3 py-1 rounded-full bg-chart-1/80 text-white text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2 border-2 border-white">
                          <img src={post.author.avatar} alt={post.author.name} />
                        </Avatar>
                        <div>
                          <p className="text-white text-sm">{post.author.name}</p>
                          <p className="text-gray-300 text-xs">{formatDate(post.date)} · {post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay with button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                    <Button 
                      className="bg-chart-1 hover:bg-chart-1/80 text-white"
                    >
                      Read Article
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <Meteors number={20}/>
      </section>
      {/* </BackgroundBeamsWithCollision> */}
      {/* Main blog section with filters and posts */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with filters */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 mb-8 lg:mb-0"
            >
              <div className="sticky top-24 bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold mb-6">Filter Articles</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearch}
                      placeholder="Search articles..."
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-10 pr-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                    />
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <div className="space-y-2">
                    {allCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`inline-block mr-2 mb-2 px-3 py-1 text-sm rounded-full transition-colors ${
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
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`inline-block mr-2 mb-2 px-3 py-1 text-xs rounded-full transition-colors ${
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
                
                {/* Date range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">From</label>
                      <input
                        type="date"
                        value={dateRange.start || ''}
                        onChange={(e) => handleDateChange('start', e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">To</label>
                      <input
                        type="date"
                        value={dateRange.end || ''}
                        onChange={(e) => handleDateChange('end', e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Sort by */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
                
                {/* Clear filters button */}
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full border-zinc-700 hover:bg-chart-1 hover:text-white text-zinc-300 transition-colors"
                >
                  Clear All Filters
                </Button>
              </div>
            </motion.aside>
            
            {/* Main content */}
            <div className="w-full lg:w-3/4">
              {/* Results info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">All Articles</h2>
                  <p className="text-gray-400">Showing {currentPosts.length} of {filteredPosts.length} results</p>
                </div>
                
                {/* Active filters */}
                {(selectedCategory !== "All" || selectedTags.length > 0 || dateRange.start || dateRange.end || searchQuery) && (
                  <div className="mt-4 md:mt-0 flex flex-wrap items-center">
                    <span className="text-sm text-gray-400 mr-2">Active filters:</span>
                    {selectedCategory !== "All" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-gray-300 mr-2 mb-2">
                        {selectedCategory}
                        <button 
                          onClick={() => setSelectedCategory("All")}
                          className="ml-1 text-gray-400 hover:text-chart-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    )}
                    
                    {selectedTags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-gray-300 mr-2 mb-2">
                        {tag}
                        <button 
                          onClick={() => toggleTag(tag)}
                          className="ml-1 text-gray-400 hover:text-chart-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    ))}
                    
                    {dateRange.start && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-gray-300 mr-2 mb-2">
                        From: {dateRange.start}
                        <button 
                          onClick={() => handleDateChange('start', null)}
                          className="ml-1 text-gray-400 hover:text-chart-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    )}
                    
                    {dateRange.end && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-gray-300 mr-2 mb-2">
                        To: {dateRange.end}
                        <button 
                          onClick={() => handleDateChange('end', null)}
                          className="ml-1 text-gray-400 hover:text-chart-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    )}
                    
                    {searchQuery && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-gray-300 mr-2 mb-2">
                        Search: {searchQuery}
                        <button 
                          onClick={() => setSearchQuery("")}
                          className="ml-1 text-gray-400 hover:text-chart-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
              
              {/* Blog posts grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${selectedTags.join()}-${dateRange.start}-${dateRange.end}-${searchQuery}-${sortBy}-${currentPage}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                      <motion.div
                        key={post.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <Card className="h-full overflow-hidden bg-zinc-900 border-zinc-800 hover:border-chart-1/30 transition-colors duration-300">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-3 left-3 z-10">
                              <span className="inline-block px-3 py-1 rounded-full bg-chart-1/80 text-white text-xs font-medium">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          <CardHeader>
                            <div className="flex items-center mb-3">
                              <Avatar className="h-6 w-6 mr-2">
                                <img src={post.author.avatar} alt={post.author.name} />
                              </Avatar>
                              <span className="text-sm text-gray-400">{post.author.name}</span>
                              <span className="mx-2 text-gray-600">•</span>
                              <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
                            </div>
                            
                            <CardTitle className="group-hover:text-chart-1 transition-colors duration-300 text-chart-2">
                              {post.title}
                            </CardTitle>
                            
                            <CardDescription className="mt-2">
                              {post.excerpt}
                            </CardDescription>
                            
                            <div className="flex flex-wrap mt-4">
                              {post.tags.slice(0, 3).map(tag => (
                                <span 
                                  key={tag} 
                                  className="inline-block px-2 py-1 mr-2 mb-2 text-xs bg-zinc-800 text-gray-300 rounded-md hover:bg-zinc-700 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleTag(tag);
                                  }}
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 flex justify-between items-center">
                              <Button 
                                className="text-xs h-8 bg-transparent hover:bg-chart-1 text-chart-1 hover:text-white border border-chart-1/50 rounded-full px-4 transition-all duration-300"
                              >
                                Read More
                              </Button>
                              <span className="text-sm text-gray-400">{post.readTime}</span>
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div 
                      variants={itemVariants} 
                      className="col-span-full text-center py-12"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-16 w-16 mx-auto text-gray-500 mb-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">No articles found</h3>
                      <p className="text-gray-400 mb-6">Try adjusting your filters or search query</p>
                      <Button 
                        onClick={clearFilters}
                        className="bg-chart-1 hover:bg-chart-1/80 text-white"
                      >
                        Clear All Filters
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-12 flex justify-center"
                >
                  <div className="flex items-center space-x-2 ">
                    <Button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      variant="outline"
                      className="h-10 w-10 p-0 border-zinc-700 text-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </Button>
                    
                    {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((_, i) => {
                      // Only show limited page numbers and ellipsis
                      if (
                        i === 0 || // Always show first page
                        i === Math.ceil(filteredPosts.length / postsPerPage) - 1 || // Always show last page
                        (i >= currentPage - 2 && i <= currentPage + 1) // Show pages around current page
                      ) {
                        return (
                          <Button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            className={`h-10 w-10 p-0 ${currentPage === i + 1 ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-zinc-700 text-neutral-500 hover:bg-zinc-800'}`}
                          >
                            {i + 1}
                          </Button>
                        );
                      } else if (
                        (i === 1 && currentPage > 3) || // Show ellipsis after first page
                        (i === Math.ceil(filteredPosts.length / postsPerPage) - 2 && currentPage < Math.ceil(filteredPosts.length / postsPerPage) - 3) // Show ellipsis before last page
                      ) {
                        return (
                          <span key={i} className="text-gray-500">
                            ...
                          </span>
                        );
                      } else {
                        return null;
                      }
                    })}
                    
                    <Button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
                      variant="outline"
                      className="h-10 w-10 p-0 border-zinc-700 text-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter subscription */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-12"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-chart-1 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Subscribe to our newsletter to receive the latest articles, insights and updates directly to your inbox.
                </p>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-chart-1/50"
                  />
                  <Button 
                    className="bg-chart-1 hover:bg-chart-1/90 text-white whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
