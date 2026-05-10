"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItem, easing } from "@/lib/animations";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32 max-w-[1400px]">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: easing.smooth }}
              className="font-display text-xl lg:text-2xl font-bold tracking-tight"
            >
              <span className="text-gradient-gold">Jacob Tech</span>
              <span className="text-foreground"> Info</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: easing.smooth }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group animated-underline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: easing.smooth }}
              className="flex items-center gap-3"
            >
              <ThemeToggle />
              
              {/* Desktop Auth */}
              <div className="hidden md:block">
                <AuthLinks />
              </div>
            </motion.div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-muted">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="text-left font-display text-2xl font-bold tracking-tight">
                      <span className="text-gradient-gold">Jacob Tech</span>
                      <span className="text-foreground"> Info</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-4 py-3 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="my-4 border-t pt-4">
                      <AuthLinks isMobile={true} />
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
