"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/utils/sanity";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { fadeUp, cardHover, easing, viewportConfig } from "@/lib/animations";

const Card = ({ item, index = 0 }) => {
  const slug = item.slug?.current || item.slug;
  const isEven = index % 2 === 0;

  // Calculate reading time (rough estimate)
  const wordCount = item.desc?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200) || 3;

  return (
    <motion.article
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={viewportConfig}
      transition={{ delay: index * 0.1 }}
      className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch`}
    >
      {/* Image Section */}
      <div className="relative flex-1 lg:w-1/2">
        <Link href={`/posts/${slug}`} className="block relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
          {item.mainImage ? (
            <Image
              src={urlFor(item.mainImage).url()}
              alt={item.title}
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Read Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </Link>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge 
            variant="secondary" 
            className="bg-white/95 dark:bg-black/80 backdrop-blur-sm text-xs uppercase tracking-wider font-semibold px-3 py-1.5 shadow-sm hover:bg-gold-500 hover:text-white transition-colors"
          >
            {item.catSlug || 'General'}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 lg:w-1/2 flex flex-col justify-center gap-4 py-2">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {(item.publishedAt || item._createdAt).substring(0, 10)}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <Link href={`/posts/${slug}`} className="group/title">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-foreground group-hover/title:text-gold-600 dark:group-hover/title:text-gold-400 transition-colors">
            {item.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg line-clamp-3">
          {item.desc || 'No description available.'}
        </p>

        {/* CTA */}
        <div className="mt-2">
          <Link href={`/posts/${slug}`}>
            <Button
              variant="ghost"
              className="group/btn px-0 hover:bg-transparent hover:text-gold-600 dark:hover:text-gold-400 font-medium"
            >
              Read Article
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
