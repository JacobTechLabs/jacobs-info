import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <div className="mt-16 mb-16">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-4xl">
        <span className="text-primary">Hey, Jacob Tech here!</span> Discover expert insights and creative solutions.
      </h1>
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl group">
          <Image src="/p1.jpeg" alt="Featured Post" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            The Principles of Premium Web Design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            How to elevate your user interfaces with space, typography, and subtle micro-interactions. 
            Discover the secrets behind agency-tier websites and how you can implement them today.
          </p>
          <Button size="lg" className="w-max rounded-full mt-2">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
