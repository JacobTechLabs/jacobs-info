"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp, Globe, Mail, Layers, Sparkles, Star } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, easing, viewportConfig } from "@/lib/animations";

const footerLinks = {
  explore: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  categories: [
    { href: "/blog?cat=react", label: "React" },
    { href: "/blog?cat=nextjs", label: "Next.js" },
    { href: "/blog?cat=javascript", label: "JavaScript" },
    { href: "/blog?cat=typescript", label: "TypeScript" },
    { href: "/blog?cat=webdev", label: "Web Development" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

const socialLinks = [
  { icon: Star, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://jacobtechinfo.com", label: "Website" },
  { icon: Sparkles, href: "https://twitter.com", label: "Social" },
  { icon: Layers, href: "/feed.xml", label: "RSS" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-32 pt-20 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32 max-w-[1400px]">
        {/* Newsletter Section */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Subscribe to our newsletter for the latest insights, tutorials, and industry updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-5 rounded-full border-border/50 focus:border-gold-500 focus:ring-gold-500/20"
            />
            <Button
              type="submit"
              className="h-12 px-8 rounded-full bg-gradient-gold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-border/50"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-gradient-gold">Jacob Tech</span>
                <span className="text-foreground"> Info</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              A premium web development agency sharing expert insights, tutorials, 
              and industry updates. We help businesses and developers create exceptional 
              digital experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore Links */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-foreground">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={staggerItem} className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jacob Tech Info. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
