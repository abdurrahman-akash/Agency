"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";

export default function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white animate-slide-in-right">
      <div className="relative min-h-screen flex items-center pt-20 pb-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-orange-500/10 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-4">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-chart-1 text-sm font-medium mb-4 animate-fade-in">
                  HEDGE AI LAB Ltd.
                </div>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 animate-fade-up">
                  <span className="block">AI</span>
                  <span className="block">Innovation</span>
                  <span className="block">Software Development</span>
                  <span className="flex items-baseline">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-chart-1">
                      Agency
                    </span>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-1 ml-4 animate-zoom-in" />
                  </span>
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl animate-fade-up delay-200">
                  We expedite innovative marketing, potential through years of
                  market expertise. Our team&apos;s extensive knowledge.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Button className="bg-gradient-to-r from-primary to-chart-1 text-white font-semibold px-7 py-2 rounded-full shadow-lg hover:from-chart-1 hover:to-primary transition-all border-0 dark:bg-gradient-to-r dark:from-primary dark:to-chart-1 dark:text-white">
                  Read Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in delay-200">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Digital Marketing Agency"
                  className="rounded-lg object-cover w-full h-[500px]"
                />

                <div className="absolute -bottom-20 -left-50 animate-float-down">
                  <BackgroundGradient
                    className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
                  >
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">
                        Transform Your Business
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Experience the future of software development with our
                        AI-driven solutions. We help businesses innovate and grow.
                      </p>
                      <Button className="bg-gradient-to-r from-primary to-chart-1 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-chart-1 hover:to-primary transition-all">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </BackgroundGradient>
                </div>
                <div className="absolute -top-20 -right-10 animate-in">
                  <BackgroundGradient
                    className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
                  >
                    <div className="p-6 rounded-lg shadow-xl animate-slide-in">
                      <p className="text-lg font-bold mb-2 text-chart-1">
                        Streamline and manage your department&apos;s service
                        delivery
                      </p>
                      <p className="text-sm text-gray-600">
                        End-to-end, and enable digital transformation in a matter
                        of days, not years.
                      </p>
                      <div className="mt-4 flex gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-chart-1">4M+</p>
                          <p className="text-xs text-gray-500">Users</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-chart-1">2B+</p>
                          <p className="text-xs text-gray-500">Revenue</p>
                        </div>
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
