"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { fadeUp, slideInLeft, slideInRight, textReveal, imageReveal, easing, viewportConfig } from "@/lib/animations";

const Featured = () => {
  return (
    <section className="pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing.smooth }}
        className="mb-8"
      >
        <Badge variant="outline" className="text-xs tracking-widest uppercase font-medium px-4 py-1.5 border-gold-500/30 text-gold-600 dark:text-gold-400">
          Featured Article
        </Badge>
      </motion.div>

      {/* Main Headline with Serif Font */}
      <motion.h1
        initial={textReveal.initial}
        animate={textReveal.animate}
        className="font-display text-hero font-bold text-balance max-w-5xl mb-16"
      >
        <span className="text-gradient-gold">Crafting Digital Excellence</span>
        <br />
        <span className="text-foreground/90">Where Innovation Meets Design</span>
      </motion.h1>

      {/* Featured Article Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Image Column */}
        <motion.div
          initial={imageReveal.initial}
          whileInView={imageReveal.animate}
          viewport={viewportConfig}
          className="lg:col-span-7 relative"
        >
          <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/p1.jpeg"
              alt="Premium web design showcase"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Category Tag */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-gold-500/90 text-white hover:bg-gold-500 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                Web Design
              </Badge>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-gold rounded-2xl -z-10 opacity-60 blur-2xl" />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Jan 15, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          {/* Article Title */}
          <h2 className="font-display text-title font-semibold text-foreground leading-tight">
            The Principles of Premium Web Design
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            How to elevate your user interfaces with intentional space, refined typography, 
            and subtle micro-interactions. Discover the secrets behind agency-tier websites 
            and how you can implement them today.
          </p>

          {/* Key Points */}
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5" />
              <span>Visual hierarchy and typography mastery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5" />
              <span>Animation and interaction design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5" />
              <span>Performance and accessibility excellence</span>
            </li>
          </ul>

          {/* CTA Button */}
          <Link href="/posts/premium-web-design-principles" className="mt-4">
            <Button
              size="lg"
              className="group rounded-full px-8 py-6 text-base font-medium bg-gradient-gold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Read Article
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
