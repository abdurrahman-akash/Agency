'use client';

import { Users, Award, Building, Calendar } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="h-8 w-8 text-orange-500" />,
    value: "53%", 
    label: "Amazing Clients" 
  },
  { 
    icon: <Building className="h-8 w-8 text-orange-500" />,
    value: "644+", 
    label: "Projects Completed" 
  },
  { 
    icon: <Award className="h-8 w-8 text-orange-500" />,
    value: "86+", 
    label: "Award Recognitions" 
  },
  { 
    icon: <Calendar className="h-8 w-8 text-orange-500" />,
    value: "28+", 
    label: "Years Experience" 
  }
];

export default function StatsSection() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Dive into our studio&lsquo;s core: <span className="text-orange-500">numbers that mirror our dedication, creativity, and pursuit of excellence.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These stats offer a glimpse into our design prowess and its real-world impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 flex justify-center">{stat.icon}</div>
            <p className="text-4xl font-bold text-orange-500 animate-zoom-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>
              {stat.value}
            </p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}