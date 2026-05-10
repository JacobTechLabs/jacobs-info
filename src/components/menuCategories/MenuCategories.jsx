"use client";

import Link from "next/link";
import React from "react";

const categories = [
  { slug: "react", name: "React", color: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600" },
  { slug: "nextjs", name: "Next.js", color: "bg-gray-500/10 hover:bg-gray-500/20 text-gray-600" },
  { slug: "javascript", name: "JavaScript", color: "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600" },
  { slug: "typescript", name: "TypeScript", color: "bg-blue-600/10 hover:bg-blue-600/20 text-blue-700" },
  { slug: "webdev", name: "Web Dev", color: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600" },
  { slug: "design", name: "Design", color: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-600" },
];

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-10">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/blog?cat=${cat.slug}`}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${cat.color}`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
