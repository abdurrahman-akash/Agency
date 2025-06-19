"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Meteors from "../ui/meteors";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  delay = 0,
  className 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-md bg-black text-gray-200",
        className
      )}
    >
      <div className="absolute top-0 right-0 h-[150px] w-[150px] translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

      <div className="flex flex-col h-full">
        <div className="mb-4 p-2 rounded-md bg-primary/10 w-fit">
          {icon}
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{description}</p>

        <Link 
          href={href}
          className="inline-flex items-center text-sm font-medium hover:text-chart-3 transition-colors"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Meteors number={20}/>
      </div>
    </motion.div>
  );
}