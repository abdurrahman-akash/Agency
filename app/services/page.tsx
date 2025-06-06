'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Code2, Diamond, LineChart, PenTool, Smartphone } from 'lucide-react';

const serviceItems = [
  {
    icon: <PenTool className="h-12 w-12 text-orange-500" />,
    title: "Marketing Strategy and Branding",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  },
  {
    icon: <LineChart className="h-12 w-12 text-orange-500" />,
    title: "Data Analytics and Solutions",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  },
  {
    icon: <Code2 className="h-12 w-12 text-orange-500" />,
    title: "Website Design and Development",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  },
  {
    icon: <Diamond className="h-12 w-12 text-orange-500" />,
    title: "Business Strategy And Solution",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-orange-500" />,
    title: "Mobile Application Development",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-orange-500" />,
    title: "Performance Marketing",
    description: "We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Digital marketing <span className="text-orange-500">services</span> aligned with your goals</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We create mind-blowing visuals, brands, websites and products that help startups and innovative companies gain more.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {serviceItems.map((service, index) => (
          <motion.div key={index} variants={item}>
            <Card className="bg-zinc-100 border-[1px] h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-900">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 bg-zinc-100 p-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline and manage your department&apos;s service delivery</h2>
            <p className="text-gray-400 mb-6">End-to-end, and enable digital transformation in a matter of days, not years.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 text-orange-500 mr-2">✓</span>
                <span>Full-service digital agency</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-orange-500 mr-2">✓</span>
                <span>Award-winning team of experts</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-orange-500 mr-2">✓</span>
                <span>Strategic approach to each project</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500">4M+</p>
                <p className="text-sm text-gray-400">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500">2B+</p>
                <p className="text-sm text-gray-400">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}