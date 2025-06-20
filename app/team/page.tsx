'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Spotlight } from '@/components/ui/Spotlight';
import { HoverEffect } from '@/components/ui/card-hover-effect';

// Team data with expanded information for detailed view
const teamMembers = [
  {
    name: 'William John',
    role: 'CEO & Founder',
    description: 'William is the visionary behind our company, leading with a passion for innovation and excellence. With over 15 years of experience in AI development, he brings deep expertise to every project.',
    longDescription: 'William founded our agency with a vision to transform how businesses leverage technology. His background in computer science and business administration has helped him guide the company through rapid growth while maintaining a focus on innovation and client success. William is a frequent speaker at technology conferences and has been recognized as a thought leader in the AI space.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Strategic Leadership', 'AI Development', 'Business Strategy', 'Public Speaking'],
    joined: 'Jan 2018',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Jessica Clark',
    role: 'Creative Director',
    description: 'Jessica brings creativity and strategic thinking to our projects, ensuring we deliver outstanding results. Her background in UX design helps bridge the gap between technology and human-centered solutions.',
    longDescription: 'Jessica has over 10 years of experience in creative direction and UX/UI design for digital products. She leads our design team with a focus on creating intuitive, beautiful interfaces that solve real user problems. Her work has been recognized with multiple industry awards, and she regularly contributes to design publications.',
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['UX/UI Design', 'Brand Strategy', 'User Research', 'Creative Direction'],
    joined: 'Mar 2019',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'James Harris',
    role: 'Lead Developer',
    description: 'James is our technical guru, leading the development team to create cutting-edge software solutions. His expertise in machine learning algorithms drives our most innovative AI products.',
    longDescription: 'James brings over 12 years of software engineering experience to our team. He specializes in full-stack development with a focus on machine learning implementation. Before joining us, he worked at several leading tech companies where he developed innovative solutions for complex problems. James is passionate about mentoring junior developers and contributing to open-source projects.',
    image: 'https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Full Stack Development', 'Machine Learning', 'System Architecture', 'Team Leadership'],
    joined: 'Jun 2019',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'AI Research Scientist',
    description: 'Sarah leads our research initiatives with a PhD in Computer Science and specialization in deep learning. Her work on neural networks has been published in top AI journals and conferences.',
    longDescription: 'Sarah holds a PhD in Computer Science with a specialization in artificial intelligence and machine learning. Her research has been published in top academic journals and she has presented at numerous international conferences. At our agency, she leads the research team in developing cutting-edge AI solutions that push the boundaries of what&apos;s possible.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Deep Learning', 'Neural Networks', 'Research', 'Data Science'],
    joined: 'Sep 2020',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'UX/UI Designer',
    description: 'Michael transforms complex technical solutions into intuitive user experiences. His design philosophy combines aesthetics with functionality to create interfaces that users love.',
    longDescription: 'Michael has a background in both graphic design and user experience, giving him a unique perspective on digital product design. He excels at creating interfaces that are not only visually appealing but also highly functional and intuitive. Michael works closely with our development team to ensure designs are implemented flawlessly.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['UI Design', 'Interaction Design', 'Prototyping', 'Design Systems'],
    joined: 'Feb 2021',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      dribbble: 'https://dribbble.com'
    }
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Strategist',
    description: 'Emily develops our go-to-market strategies with a data-driven approach. Her background in digital marketing and analytics helps position our products effectively in competitive markets.',
    longDescription: 'Emily brings expertise in digital marketing strategy with a focus on data-driven decision making. She has worked with numerous tech startups to develop and implement successful marketing campaigns. At our agency, she oversees all marketing efforts, from content strategy to performance marketing and analytics.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Digital Marketing', 'Content Strategy', 'Analytics', 'Growth Hacking'],
    joined: 'Apr 2021',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Daniel Kim',
    role: 'Project Manager',
    description: 'Daniel ensures our projects are delivered on time and within budget while maintaining the highest quality standards. His organizational skills and technical background make him an invaluable asset.',
    longDescription: 'Daniel has over 8 years of experience in project management for software development. He combines strong technical knowledge with excellent communication skills to effectively coordinate cross-functional teams. Daniel is certified in multiple project management methodologies and constantly works to optimize our delivery processes.',
    image: 'https://images.pexels.com/photos/2576788/pexels-photo-2576788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Project Management', 'Agile Methodologies', 'Risk Management', 'Stakeholder Communication'],
    joined: 'Aug 2021',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Olivia Martinez',
    role: 'Customer Success Manager',
    description: 'Olivia works closely with our clients to ensure they get maximum value from our services. Her strong communication skills and technical understanding make her the perfect bridge between clients and our team.',
    longDescription: 'Olivia specializes in building strong relationships with clients and ensuring their success with our solutions. With a background in both customer support and product management, she understands the technical aspects of our offerings while excelling at client communication. Olivia has been instrumental in maintaining our high customer retention rate.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Client Relations', 'Product Knowledge', 'Problem Solving', 'Training'],
    joined: 'Nov 2021',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

const departments = [
  { name: 'Leadership', count: 2 },
  { name: 'Development', count: 4 },
  { name: 'Design', count: 3 },
  { name: 'Marketing', count: 2 },
  { name: 'Customer Success', count: 2 }
];

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
    transition: { duration: 0.5 }
  }
};

type TeamMember = typeof teamMembers[number];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState('All');

  // Filter team members based on selected department
  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => {
        if (filter === 'Leadership') return ['CEO & Founder', 'Creative Director'].includes(member.role);
        if (filter === 'Development') return ['Lead Developer', 'AI Research Scientist'].includes(member.role);
        if (filter === 'Design') return ['Creative Director', 'UX/UI Designer'].includes(member.role);
        if (filter === 'Marketing') return ['Marketing Strategist'].includes(member.role);
        if (filter === 'Customer Success') return ['Customer Success Manager', 'Project Manager'].includes(member.role);
        return true;
      });

  return (

    <div className="relative min-h-screen overflow-hidden bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-20">
      {/* Background effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
   
             <BackgroundBeamsWithCollision className='relative z-0 overflow-hidden bg-zinc-900 '>
      {/* Hero section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium"
            >
              Our Talented Team
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Meet The <span className="text-chart-1">Innovators</span> Behind Our Success
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg mb-10"
            >
              Our diverse team of experts brings together skills and experiences from various backgrounds to deliver exceptional results for our clients.
            </motion.p>
            
            {/* Department filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              <Button 
                onClick={() => setFilter('All')}
                variant={filter === 'All' ? 'default' : 'outline'}
                className={`rounded-full px-6 ${filter === 'All' ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-zinc-800 hover:border-chart-1/50 text-gray-500'}`}
              >
                All
              </Button>
              
              {departments.map((dept) => (
                <Button 
                  key={dept.name}
                  onClick={() => setFilter(dept.name)}
                  variant={filter === dept.name ? 'default' : 'outline'}
                  className={`rounded-full px-6  ${filter === dept.name ? 'bg-chart-1 hover:bg-chart-1/90' : 'border-zinc-800 hover:border-chart-1/50 text-gray-500'}`}
                >
                  {dept.name} <span className="ml-2 text-xs opacity-70">({dept.count})</span>
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
</BackgroundBeamsWithCollision>
      {/* Team members grid */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredMembers.map((member) => (
              <motion.div 
                key={member.name}
                variants={itemVariants}
                className="group"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMember(member)}
              >
                <BackgroundGradient className="rounded-[22px] p-0.5 bg-zinc-900">
                  <div className="bg-zinc-900 h-full rounded-[22px] overflow-hidden relative">
                    {/* Image container with gradient overlay */}
                    <div className="h-64 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900 z-10"></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 relative">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-chart-1 text-sm mb-3">{member.role}</p>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{member.description}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="bg-zinc-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 2 && (
                          <span className="bg-zinc-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                            +{member.skills.length - 2}
                          </span>
                        )}
                      </div>
                      
                      {/* Footer with social icons */}
                      <div className="flex justify-between items-center mt-4">
                        <Button 
                          className="text-xs h-8 bg-chart-1/10 text-chart-1 hover:bg-chart-1 hover:text-white border-0 rounded-full transition-all duration-300"
                        >
                          View Profile
                        </Button>
                        
                        <div className="flex space-x-2">
                          <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-chart-1 transition-colors duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-chart-1 transition-colors duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-12 h-12 opacity-0 rounded-full bg-gradient-to-br from-chart-1/30 to-chart-1/60 blur-lg transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Principles That Guide Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              These core values shape our culture and drive our approach to every project we undertake.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800"
            >
              <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-1"><path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17"></path><path d="M14.5 2.5c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5 2.5-1 3.5 0Z"></path><path d="M7.44 7.44A3 3 0 0 0 8 10a3 3 0 0 0 3 3 3 3 0 0 0 1.76-.56"></path><circle cx="15" cy="15" r="5"></circle><path d="m16 14-2 2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace creative thinking and cutting-edge technology to develop solutions that push boundaries and set new standards.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800"
            >
              <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-1"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of teamwork, open communication, and diverse perspectives to create exceptional outcomes for our clients.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800"
            >
              <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We are committed to delivering the highest quality work in everything we do, paying attention to every detail and never settling for less than the best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Join our team CTA */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Team</h2>
                <p className="text-gray-400 text-lg mb-6">
                  We're always looking for talented individuals who are passionate about innovation and creative solutions. Check out our open positions and become part of our success story.
                </p>
                <Button 
                  className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-full px-8 py-6"
                >
                  View Open Positions
                </Button>
              </div>
              
              <div className="relative w-full md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-chart-1/20 rounded-xl blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
       

  );
}
