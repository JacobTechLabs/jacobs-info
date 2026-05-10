import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-8 mt-4 mb-10">
      <Link href="/" className="flex items-center gap-4 group">
        {withImage && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/p1.jpeg" alt="" fill className="object-cover transition-transform group-hover:scale-110" />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md w-max bg-[#ff795736] text-[#ff7957]">Travel</span>
          <h3 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs text-muted-foreground font-medium mt-1">
            <span>John Doe</span>
            <span> • 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-4 group">
        {withImage && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/p1.jpeg" alt="" fill className="object-cover transition-transform group-hover:scale-110" />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md w-max bg-[#ffb04f45] text-[#ffb04f]">Culture</span>
          <h3 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs text-muted-foreground font-medium mt-1">
            <span>John Doe</span>
            <span> • 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-4 group">
        {withImage && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/p1.jpeg" alt="" fill className="object-cover transition-transform group-hover:scale-110" />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md w-max bg-[#7fb88133] text-[#7fb881]">Food</span>
          <h3 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs text-muted-foreground font-medium mt-1">
            <span>John Doe</span>
            <span> • 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
