"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

// Sample posts data with premium styling
const posts = [
  {
    id: 1,
    category: "React",
    title: "Building Performant React Applications with Modern Patterns",
    author: "Jacob Williams",
    date: "12 Jan 2024",
    image: "/p1.jpeg",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: 2,
    category: "Next.js",
    title: "Server Components: The Future of React Development",
    author: "Sarah Chen",
    date: "10 Jan 2024",
    image: "/p1.jpeg",
    color: "bg-gray-500/10 text-gray-600",
  },
  {
    id: 3,
    category: "TypeScript",
    title: "Advanced TypeScript Patterns for Enterprise Apps",
    author: "Mike Johnson",
    date: "08 Jan 2024",
    image: "/p1.jpeg",
    color: "bg-blue-600/10 text-blue-700",
  },
];

const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href="/"
          className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-muted/50 transition-all duration-300"
        >
          {withImage && (
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Badge
              variant="secondary"
              className={`w-max text-[10px] uppercase tracking-wider font-semibold ${post.color}`}
            >
              {post.category}
            </Badge>
            <h3 className="text-sm font-medium leading-snug text-foreground group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span>{post.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
