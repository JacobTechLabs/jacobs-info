import React from "react";
import Link from "next/link";
import Image from "next/image";

import { client } from "@/utils/sanity";

const getData = async () => {
  try {
    return await client.fetch(`*[_type == "category"] | order(title asc)`);
  } catch (err) {
    console.error("[CATEGORIES_GET_ERROR]", err);
    throw new Error("Failed");
  }
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-8 tracking-tight">Popular Categories</h2>
      <div className="flex flex-wrap gap-4">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug.current || item.slug}`}
            key={item._id}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-colors"
          >
            {item.img && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="capitalize">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
