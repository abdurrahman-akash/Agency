"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
// import { ThemeToggle } from "@/components/layouts/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { navItemAnimation } from "@/lib/animations";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
      "fixed top-0 left-0 right-0 py-4 z-60 duration-300",
      scrolled
      )}
    >
      <div
      className={cn(
        "container mx-auto px-4 flex items-center justify-between",
        "rounded-full bg-gradient-to-r from-white/40 via-primary/10 to-white/40 shadow-xl backdrop-blur-2xl",
        "dark:bg-gradient-to-r dark:from-white/40 dark:via-primary/10 dark:to-white/40 dark:shadow-xl dark:backdrop-blur-2xl"
      )}
      >
      <Link href="/" className="relative z-10 group">
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold flex items-center gap-2 bg-gradient-to-r from-primary via-chart-1 to-secondary bg-clip-text text-transparent drop-shadow-lg"
        >
        <span className="animate-gradient-x tracking-widest">HEDGE</span>
        </motion.div>
      </Link>

      <div className="hidden md:flex items-center gap-8 px-8 py-3 ">
        <nav className="flex items-center gap-8">
        <AnimatePresence>
          {navLinks.map((link) => (
          <motion.div
            key={link.href}
            initial="hidden"
            animate="visible"
            variants={navItemAnimation}
          >
            <Link
            href={link.href}
            className={cn(
              "relative font-semibold transition-all duration-200 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-primary/20 hover:to-chart-1/20 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40",
              "dark:hover:bg-gradient-to-r dark:hover:from-primary/30 dark:hover:to-chart-1/30 dark:hover:text-primary",
              pathname === link.href
              ? "text-primary bg-gradient-to-r from-primary/20 to-chart-1/20 shadow after:absolute after:left-4 after:bottom-1 after:h-1 after:w-2/3 after:bg-primary after:rounded-full after:content-['']"
              : "text-muted-foreground dark:text-muted"
            )}
            >
            {link.label}
            </Link>
          </motion.div>
          ))}
        </AnimatePresence>
        </nav>

        {/* <ThemeToggle /> */}

        <Button
        asChild
        className="bg-gradient-to-r from-primary to-chart-1 text-white font-semibold px-7 py-2 rounded-full shadow-lg hover:from-chart-1 hover:to-primary transition-all border-0 dark:bg-gradient-to-r dark:from-primary dark:to-chart-1 dark:text-white"
        >
        <a
          href="https://wa.me/8801303647863"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 13.487c-.263-.131-1.558-.77-1.799-.858-.241-.088-.417-.131-.593.132-.175.263-.678.858-.832 1.033-.153.175-.306.197-.569.066-.263-.132-1.111-.409-2.117-1.304-.782-.697-1.31-1.561-1.464-1.824-.153-.263-.016-.405.115-.536.118-.117.263-.306.395-.459.132-.153.175-.263.263-.438.088-.175.044-.329-.022-.46-.066-.132-.593-1.433-.813-1.963-.214-.514-.432-.444-.593-.452l-.504-.009c-.175 0-.46.066-.701.329-.241.263-.92.899-.92 2.188 0 1.289.943 2.537 1.074 2.713.131.175 1.857 2.838 4.504 3.863.63.217 1.122.347 1.505.444.632.161 1.208.138 1.663.084.508-.06 1.558-.637 1.779-1.253.219-.616.219-1.144.153-1.253-.066-.109-.241-.175-.504-.306z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.484-1.19L3 21l1.19-4.484A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z"
          />
          </svg>
          Contact
        </a>
        </Button>
      </div>

      <MobileNav />
      </div>
    </header>
  );
}