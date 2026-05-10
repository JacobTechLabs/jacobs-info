import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 mb-10">
      <Link href="/blog?cat=style" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#57c4ff31]">
        Style
      </Link>
      <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#da85c731]">
        Fashion
      </Link>
      <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#7fb88133]">
        Food
      </Link>
      <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ff795736]">
        Travel
      </Link>
      <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ffb04f45]">
        Culture
      </Link>
      <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#5e4fff31]">
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
