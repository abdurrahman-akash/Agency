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

        {/* Logos for larger screens */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={cn(
                    "h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity",
                    client.name === "Airbnb" && "h-6 md:h-8",
                    client.name === "Spotify" && "h-7 md:h-9",
                  )}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated marquee for mobile */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-6 w-auto object-contain opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}