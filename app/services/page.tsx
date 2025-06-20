'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/Spotlight';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { ServiceCard } from '@/components/services/ServiceCard';
import { 
  ArrowRight, 
  BarChart3, 
  Code2, 
  Diamond, 
  LineChart, 
  PenTool, 
  Smartphone,
  CheckCircle2,
  Users,
  Globe,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

// Main services data
const services = [
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Marketing Strategy & Branding",
    description: "Strategic brand development and marketing plans that position your business for growth and success in competitive markets.",
    href: "/services/marketing-strategy",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights with our advanced analytics services, helping you make data-driven decisions.",
    href: "/services/data-analytics",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Website Design & Development",
    description: "Custom, responsive websites and web applications built with cutting-edge technologies to deliver exceptional user experiences.",
    href: "/services/web-development",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: <Diamond className="h-6 w-6" />,
    title: "Business Strategy & Solutions",
    description: "Comprehensive business consulting services to optimize operations, increase efficiency, and drive sustainable growth.",
    href: "/services/business-strategy",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    href: "/services/mobile-development",
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Performance Marketing",
    description: "Results-driven digital marketing campaigns that target the right audience and maximize your return on investment.",
    href: "/services/performance-marketing",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and challenges through in-depth consultations."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team develops a tailored strategy that aligns with your objectives and targets your specific needs."
  },
  {
    number: "03",
    title: "Design",
    description: "We create stunning, functional designs that reflect your brand identity and engage your audience."
  },
  {
    number: "04",
    title: "Development",
    description: "Our experts bring the designs to life using the latest technologies and best practices."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance testing ensures everything works flawlessly before launch."
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We handle the deployment and provide ongoing support to ensure continued success."
  }
];

// Benefits data
const benefits = [
  {
    icon: <Users className="h-6 w-6 text-chart-1" />,
    title: "Expert Team",
    description: "Work with industry experts who bring years of experience to your project."
  },
  {
    icon: <Globe className="h-6 w-6 text-chart-1" />,
    title: "Global Reach",
    description: "Solutions designed to reach and engage audiences worldwide."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-chart-1" />,
    title: "Innovative Approach",
    description: "Cutting-edge solutions that keep you ahead of the competition."
  },
  {
    icon: <Shield className="h-6 w-6 text-chart-1" />,
    title: "Secure & Reliable",
    description: "Robust solutions built with security and reliability as priorities."
  },
  {
    icon: <Zap className="h-6 w-6 text-chart-1" />,
    title: "Rapid Delivery",
    description: "Efficient processes that deliver quality results on schedule."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-chart-1" />,
    title: "Guaranteed Results",
    description: "Measurable outcomes that demonstrate clear return on investment."
  }
];

// FAQ data
const faqs = [
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive digital transformation project could span several months. During our initial consultation, we'll provide a detailed timeline specific to your project needs."
  },
  {
    question: "What is your approach to project management?",
    answer: "We follow an agile methodology with regular client touchpoints. You'll have a dedicated project manager who provides weekly updates and ensures your project stays on track. Our transparent process allows you to monitor progress and provide feedback throughout development."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely! We offer various support and maintenance packages tailored to your needs. These can include technical support, content updates, performance monitoring, security patches, and ongoing optimization to ensure your digital assets continue to perform optimally."
  },
  {
    question: "How do you handle revisions and change requests?",
    answer: "We include a predefined number of revision rounds in all our proposals. For changes outside the original scope, we assess the impact on the timeline and budget, then provide transparent pricing for these adjustments before proceeding."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Yes, our versatile team is experienced with numerous technologies and platforms. We can integrate with your existing infrastructure or recommend appropriate alternatives if needed. During discovery, we'll assess your current stack to ensure seamless integration."
  }
];

// Animation variants
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
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  
  return (
    <div className="relative min-h-screen bg-zinc-900 text-white">
      {/* Background effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
      {/* <BackgroundBeamsWithCollision className="opacity-30" /> */}
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium"
            >
              Our Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <TextGenerateEffect words="Digital solutions aligned with your goals" />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg mb-10"
            >
              We create exceptional digital experiences, brands, and products that help 
              innovative companies achieve their business objectives and stand out in the market.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-full px-8 py-6"
                onClick={() => {
                  const servicesSection = document.getElementById('services-grid');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="rounded-full border-zinc-700 hover:border-chart-1 px-8 py-6 text-zinc-700 hover:text-chart-1 transition-colors "
                >
                  Get a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section id="services-grid" className="relative py-20 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-3xl">
              Our comprehensive range of services is designed to help businesses of all sizes 
              achieve their digital transformation goals and drive growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                delay={index * 0.1}
                className='bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-chart-1/30 transition-all duration-300'
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="relative py-20 z-10" ref={processRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality solutions 
              that meet your specific needs and exceed your expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-chart-1/30 transition-all duration-300">
                  <CardHeader>
                    <span className="text-4xl font-bold text-chart-1 opacity-60">{step.number}</span>
                    <CardTitle className="text-xl mt-2 text-chart-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-chart-1" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Working With Our Agency</h2>
              <p className="text-gray-400 mb-8">
                Partner with us to leverage our expertise, innovative approaches, and 
                commitment to excellence. We're dedicated to delivering exceptional 
                results that drive your business forward.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden h-[600px]">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                      <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-4xl font-bold text-chart-1">10+</p>
                        <p className="text-sm text-gray-300">Years Experience</p>
                      </div>
                      <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-4xl font-bold text-chart-1">200+</p>
                        <p className="text-sm text-gray-300">Projects Completed</p>
                      </div>
                      <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-4xl font-bold text-chart-1">50+</p>
                        <p className="text-sm text-gray-300">Team Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-chart-1 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-chart-1/10 text-chart-1 text-sm font-medium">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and approach.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-center w-full p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-chart-1/30 transition-all duration-300 text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-12 border border-zinc-800/50"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-chart-1 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-gray-400 text-lg mb-8">
                Let's collaborate to create exceptional digital experiences that drive 
                results and help your business thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-chart-1 hover:bg-chart-1/90 text-white rounded-full px-8 py-6">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button 
                    variant="outline" 
                    className="rounded-full border-zinc-700 hover:border-chart-1 px-8 py-6 text-zinc-700 hover:text-chart-1 transition-colors "
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}