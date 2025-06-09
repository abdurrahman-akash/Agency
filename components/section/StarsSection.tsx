'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Users, Award, Building, Calendar } from 'lucide-react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

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

// Counter component for animated number counting
function Counter({ value, className }: { value: string; className?: string }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  
  // Parse the value to get just the number part
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds duration
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Use easeOutExpo for smooth animation that slows down towards the end
        const easeOutExpo = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutExpo * numericValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(numericValue);
        }
      };
      
      window.requestAnimationFrame(step);
      controls.start("visible");
    }
  }, [isInView, numericValue, controls]);
  
  return (
    <div ref={ref} className={className}>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="text-4xl font-bold text-orange-500"
      >
        {count}{suffix}
      </motion.p>
    </div>
  );
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="container mx-auto py-24 px-4 md:px-6" ref={containerRef}>
     
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          Dive into our studio&lsquo;s core: <span className="text-orange-500">numbers that mirror our dedication, creativity, and pursuit of excellence.</span>
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          These stats offer a glimpse into our design prowess and its real-world impact.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-4 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              {stat.icon}
            </motion.div>
            <Counter value={stat.value} />
            <motion.p 
              className="text-sm text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}