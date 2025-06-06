"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Layers, Database, Cpu, LayoutGrid } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites and web applications built with the latest technologies.",
      icon: <Code className="h-5 w-5" />,
      href: "/services/web-development",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="h-5 w-5" />,
      href: "/services/mobile-development",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement and conversions.",
      icon: <Layers className="h-5 w-5" />,
      href: "/services/design",
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and solutions for modern applications.",
      icon: <Database className="h-5 w-5" />,
      href: "/services/cloud",
    },
    {
      title: "AI & ML",
      description: "Intelligent software solutions powered by advanced machine learning algorithms.",
      icon: <Cpu className="h-5 w-5" />,
      href: "/services/ai-ml",
    },
    {
      title: "DevOps",
      description: "Streamlined development operations for efficient software delivery.",
      icon: <LayoutGrid className="h-5 w-5" />,
      href: "/services/devops",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help 
            businesses of all sizes achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}