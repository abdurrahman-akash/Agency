"use client";
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-orange-500 font-bold text-2xl mr-1">H</span>
              <span className="font-semibold text-white text-xl">HEDGE</span>
            </Link>
            <p className="text-gray-400 mb-6">
              We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-orange-500 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-orange-500 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-orange-500 hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-zinc-800 hover:bg-orange-500 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-orange-500">Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-orange-500">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Brand Strategy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500">Content Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">123 Business Avenue, Suite 100, New York, NY 10001</li>
              <li className="text-gray-400">contact@mergaagency.com</li>
              <li className="text-gray-400">+880 1303-647863</li>
              <li className="text-gray-400">(234) 534-890-11</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Merga Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}