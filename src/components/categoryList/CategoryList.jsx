"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Database, Smartphone, Layers, Sparkles, Terminal, Cpu, GitBranch } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

// Map categories to icons and colors
const categoryConfig = {
  react: { icon: Code2, color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-500" },
  nextjs: { icon: Globe, color: "from-gray-700/20 to-gray-900/20", iconColor: "text-gray-700 dark:text-gray-300" },
  javascript: { icon: Terminal, color: "from-yellow-500/20 to-amber-500/20", iconColor: "text-yellow-600" },
  typescript: { icon: Code2, color: "from-blue-600/20 to-blue-400/20", iconColor: "text-blue-600" },
  webdev: { icon: Globe, color: "from-emerald-500/20 to-teal-500/20", iconColor: "text-emerald-500" },
  design: { icon: Palette, color: "from-pink-500/20 to-rose-500/20", iconColor: "text-pink-500" },
  database: { icon: Database, color: "from-green-500/20 to-emerald-500/20", iconColor: "text-green-500" },
  mobile: { icon: Smartphone, color: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-500" },
  default: { icon: Layers, color: "from-gold-400/20 to-gold-600/20", iconColor: "text-gold-500" },
};

const getCategoryStyle = (slug) => {
  return categoryConfig[slug?.toLowerCase()] || categoryConfig.default;
};

const defaultCategories = [
  { _id: "1", title: "React", slug: { current: "react" } },
  { _id: "2", title: "Next.js", slug: { current: "nextjs" } },
  { _id: "3", title: "JavaScript", slug: { current: "javascript" } },
  { _id: "4", title: "TypeScript", slug: { current: "typescript" } },
  { _id: "5", title: "Web Dev", slug: { current: "webdev" } },
  { _id: "6", title: "Design", slug: { current: "design" } },
];

const CategoryList = ({ categories = defaultCategories }) => {
  return (
    <section className="py-16 lg:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        className="mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Explore Topics
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          Dive deep into our curated categories covering modern web development, 
          design principles, and industry best practices.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
      >
        {categories?.map((item, index) => {
          const slug = item.slug?.current || item.slug;
          const style = getCategoryStyle(slug);
          const Icon = style.icon;

          return (
            <motion.div key={item._id} variants={staggerItem}>
              <Link
                href={`/blog?cat=${slug}`}
                className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-card border border-border/50 hover:border-gold-500/50 transition-all duration-500 overflow-hidden hover-lift"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className={`w-7 h-7 ${style.iconColor}`} />
                </div>

                {/* Title */}
                <span className="relative z-10 font-semibold text-foreground group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {item.title}
                </span>

                {/* Arrow indicator */}
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CategoryList;
