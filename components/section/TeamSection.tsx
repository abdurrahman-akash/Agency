'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { desc } from 'framer-motion/client';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'William John',
    role: 'CEO & Founder',
    description: 'William is the visionary behind our company, leading with a passion for innovation and excellence. With over 15 years of experience in AI development, he brings deep expertise to every project.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    image: 'https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'AI Research Scientist',
    description: 'Sarah leads our research initiatives with a PhD in Computer Science and specialization in deep learning. Her work on neural networks has been published in top AI journals and conferences.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'UX/UI Designer',
    description: 'Michael transforms complex technical solutions into intuitive user experiences. His design philosophy combines aesthetics with functionality to create interfaces that users love.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Strategist',
    description: 'Emily develops our go-to-market strategies with a data-driven approach. Her background in digital marketing and analytics helps position our products effectively in competitive markets.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  }
];

export default function Team() {
  const backgroundImage = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const backgroundImageLondon = "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      {/* <div className="text-center mb-16 animate-fade-up">
         <div
         className={cn(
          "absolute  opacity-5 ",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
          Our Team
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Meet the talented individuals who form <span className="text-orange-500">the heartbeat</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our diverse team of experts brings together skills and experiences from various backgrounds to deliver exceptional results.
        </p>
      </div> */}

{/* Style 1 */}
{/* 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-zinc-900 rounded-lg overflow-hidden group">
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
      </div> */}

{/* Style 2 */}
{/* 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
{
  teamMembers.map((member, index)=>(
<div className="max-w-xs w-full group/card" key={index}>
      <div
        className={
          ` cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-[url(${member.image})] bg-cover`
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={member.image}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {member.name}
            </p>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {member.role}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
           {member.role} at HEDGE AI LAB Ltd. is responsible for overseeing the development and implementation of innovative software solutions that leverage artificial intelligence to drive business growth and efficiency.
          </p>
        </div>
        <div className="flex items-center justify-between z-10">
          <Button variant="outline" className="border-zinc-800 hover:bg-orange-500 hover:text-white">
            View Profile
          </Button>
          <span className="text-gray-400 text-sm">Joined: Jan 2023</span>
          </div>
      </div>
    </div>
  ))
}
      </div> */}
      

     

{/* Style 3 -*/}
      <div className="mt-24 mb-16 text-center animate-fade-up">
        <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-chart-1 text-sm font-medium mb-4">
          Our Experts
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Innovators Behind <span className="text-chart-1">Our Success</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Meet the creative minds shaping the future of AI and innovation at HEDGE AI LAB.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {teamMembers.map((member, index) => (
          <div 
            key={`modern-${index}`}
            className="animate-fade-up group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden h-[400px] flex flex-col transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] border border-zinc-800 group-hover:border-chart-1/20">
              {/* Top image section with gradient overlay */}
              <div className="relative h-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating avatar that overlaps the image and info section */}
                <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 flex justify-center z-40">
                  <div className="w-20 h-20 rounded-full border-4 border-zinc-900 overflow-hidden bg-zinc-800 transition-all duration-300 group-hover:border-chart-1 group-hover:scale-110">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Info section */}
              <div className=" pt-14 px-6 pb-6 flex-grow flex flex-col">
                <div className="text-center mb-2">
                  <h3 className="text-xl font-bold text-gray-200">{member.name}</h3>
                  <p className="text-chart-1 text-sm font-medium">{member.role}</p>
                </div>
                
                <p className="text-gray-400 text-sm mt-2 text-center line-clamp-3">
                  {member.description}
                </p>
                
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Button 
                    className="text-xs py-1 px-3 h-auto bg-gradient-to-r from-primary to-chart-1 text-white font-semibold hover:from-chart-1 hover:to-primary transition-all border-0 rounded-full shadow-md"
                  >
                    Profile
                  </Button>
                  
                  <div className="flex space-x-2">
                    <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center hover:bg-chart-1 transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-violet-800 flex items-center justify-center hover:bg-chart-1 transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-chart-1 transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-12 h-12 opacity-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 blur-lg transition-opacity duration-300 group-hover:opacity-30"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 opacity-0 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-600 blur-md transition-opacity duration-300 group-hover:opacity-20"></div>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
        <Button 
          variant="outline" 
          className="relative border-zinc-800 hover:text-white overflow-hidden group"
        >
          <span className="relative z-10">View All Team Members</span>
          <span className="absolute inset-0 bg-chart-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </Button>
      </div>
    </div>
  );
}