'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-10 md:p-16 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to elevate your digital presence? <span className="text-orange-500">Let&apos;s get started.</span>
            </h2>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <p className="text-gray-400 mb-10">
              Connect with our team to discuss your project and discover how we can help you achieve your business goals through powerful digital solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/contact">
                Contact Us Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}