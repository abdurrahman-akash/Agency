"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg" },
  { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

export function ClientsSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium tracking-wider text-muted-foreground uppercase">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </h2>
        </motion.div>

        {/* Infinite scrolling client logos with blur effects */}
        <div className="w-full overflow-hidden">
          {/* First row - left to right */}
          <div className="relative mb-8 overflow-hidden">
            {/* Left blur effect */}
            <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"></div>
            
            <div className="relative w-max flex space-x-12">
              <div className="flex space-x-12 animate-scroll-right">
                {clients.map((client, index) => (
                  <div key={`${client.name}-row1-${index}`} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-12 animate-scroll-right" aria-hidden="true">
                {clients.map((client, index) => (
                  <div key={`${client.name}-row1-dup-${index}`} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right blur effect */}
            <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          
          {/* Second row - right to left */}
          <div className="relative overflow-hidden">
            {/* Left blur effect */}
            <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"></div>
            
            <div className="relative w-max flex space-x-12">
              <div className="flex space-x-12 animate-scroll-left">
                {clients.map((client, index) => (
                  <div key={`${client.name}-row2-${index}`} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-12 animate-scroll-left" aria-hidden="true">
                {clients.map((client, index) => (
                  <div key={`${client.name}-row2-dup-${index}`} className="flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right blur effect */}
            <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

