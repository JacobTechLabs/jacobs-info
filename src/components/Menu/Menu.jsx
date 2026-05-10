"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, FolderOpen, Star, Mail } from "lucide-react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SectionHeader = ({ icon: Icon, subtitle, title }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-sm text-gold-600 dark:text-gold-400 font-medium mb-2">
      <Icon className="w-4 h-4" />
      <span className="uppercase tracking-wider">{subtitle}</span>
    </div>
    <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
    <div className="mt-3 w-12 h-0.5 bg-gradient-gold rounded-full" />
  </div>
);

const Menu = () => {
  return (
    <aside className="flex-[2] mt-16 mb-16 hidden lg:block">
      <div className="sticky top-32 space-y-12">
        {/* Most Popular Section */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
        >
          <SectionHeader 
            icon={TrendingUp} 
            subtitle="Trending" 
            title="Most Popular" 
          />
          <MenuPosts withImage={false} />
        </motion.div>

        {/* Categories Section */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
        >
          <SectionHeader 
            icon={FolderOpen} 
            subtitle="Browse" 
            title="Categories" 
          />
          <MenuCategories />
        </motion.div>

        {/* Editor's Pick Section */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
        >
          <SectionHeader 
            icon={Star} 
            subtitle="Curated" 
            title="Editor's Pick" 
          />
          <MenuPosts withImage={true} />
        </motion.div>

        {/* Newsletter Mini-Form */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={viewportConfig}
          className="p-6 rounded-2xl bg-gradient-to-br from-gold-100/50 to-gold-200/30 dark:from-gold-900/20 dark:to-gold-800/10 border border-gold-500/20"
        >
          <div className="flex items-center gap-2 text-gold-700 dark:text-gold-400 mb-3">
            <Mail className="w-5 h-5" />
            <span className="font-semibold">Stay Updated</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest articles delivered to your inbox.
          </p>
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="h-10 text-sm bg-white/80 dark:bg-black/50 border-gold-500/30"
            />
            <Button 
              className="w-full h-10 text-sm bg-gradient-gold hover:opacity-90"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </aside>
  );
};

export default Menu;
