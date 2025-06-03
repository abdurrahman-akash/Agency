"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-2">
            {/* Modern background pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg
                    className="w-full h-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1920 1080"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.08 }}
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="60"
                            height="60"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M60 0V60H0"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeOpacity="0.15"
                            />
                        </pattern>
                    </defs>
                    <rect width="1920" height="1080" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-7"
                        >
                            <div className="inline-block rounded-full bg-primary/20 px-4 py-1 text-sm text-primary font-medium shadow-sm backdrop-blur">
                                Innovative Software Solutions
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
                                We Build <span className="text-primary">Digital Products</span> That Power Businesses
                            </h1>
                            <p className="text-xl text-slate-300 max-w-lg">
                                Our team of experts creates custom software solutions that drive innovation, 
                                efficiency, and growth for businesses of all sizes.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                                >
                                    Get Started
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                    View Our Work
                                </Button>
                            </div>
                            
                            <div className="pt-7">
                                <p className="text-sm text-slate-400 mb-3">Trusted by industry leaders</p>
                                <div className="flex flex-wrap gap-8 items-center opacity-80">
                                    {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company) => (
                                        <div key={company} className="font-semibold text-lg text-white/90">
                                            {company}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                            <img
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Team working on software project"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-10 -left-10 w-36 h-36 bg-primary/30 rounded-full blur-2xl opacity-70" />
                        <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-primary/40 rounded-full blur-2xl opacity-60" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}