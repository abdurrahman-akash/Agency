'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "From concept to execution, Merga demonstrated a level of expertise that is truly commendable. They were responsive, flexible",
    name: "Jessica Clark",
    position: "Founder at Ringer",
    avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Working with Merga has completely transformed our online presence. Their team truly understands digital marketing and delivered beyond our expectations.",
    name: "Michael Roberts",
    position: "CEO at TechFlow",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Merga's strategic approach to our brand redesign was impressive. They took the time to understand our vision and translated it into a stunning visual identity.",
    name: "Sarah Johnson",
    position: "Marketing Director at Elevate",
    avatar: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="bg-zinc-150 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
            Our Testimonials
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center justify-center mb-10">
            <Quote className="text-orange-500/20 w-24 h-24 absolute -left-12 -top-12" />
            <div className="text-center animate-fade-up">
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                <span className="text-gray-500">&quot;</span>{testimonial.quote}<span className="text-gray-500">&quot;</span>
              </p>
              <div className="flex flex-col items-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                <Avatar className="h-16 w-16 mb-3">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button variant="outline" size="icon" className="rounded-full border-zinc-800" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-zinc-800" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}