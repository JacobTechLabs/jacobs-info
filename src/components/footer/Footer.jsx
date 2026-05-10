import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-12 bg-muted/20">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Jacob Tech Info" width={40} height={40} className="rounded-md" />
            <h1 className="text-xl font-bold tracking-tight">Jacob Tech Info</h1>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Jacob Tech Info is a leading web development agency providing expert 
            insights, tutorials, and industry updates. We help businesses and 
            developers stay ahead in the ever-evolving tech landscape.
          </p>
          <div className="flex gap-4 mt-2">
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="opacity-70 hover:opacity-100 cursor-pointer transition" />
            <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="opacity-70 hover:opacity-100 cursor-pointer transition" />
            <Image src="/tiktok.png" alt="Tiktok" width={20} height={20} className="opacity-70 hover:opacity-100 cursor-pointer transition" />
            <Image src="/youtube.png" alt="Youtube" width={20} height={20} className="opacity-70 hover:opacity-100 cursor-pointer transition" />
          </div>
        </div>
        <div className="flex flex-1 flex-wrap gap-10 md:justify-end">
          <div className="flex flex-col gap-3 min-w-[120px]">
            <span className="font-semibold mb-1">Links</span>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Homepage</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">Blog</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">About</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</Link>
          </div>
          <div className="flex flex-col gap-3 min-w-[120px]">
            <span className="font-semibold mb-1">Categories</span>
            <Link href="/blog?cat=react" className="text-sm text-muted-foreground hover:text-foreground transition">React</Link>
            <Link href="/blog?cat=nextjs" className="text-sm text-muted-foreground hover:text-foreground transition">Next.js</Link>
            <Link href="/blog?cat=javascript" className="text-sm text-muted-foreground hover:text-foreground transition">JavaScript</Link>
            <Link href="/blog?cat=webdev" className="text-sm text-muted-foreground hover:text-foreground transition">Web Dev</Link>
          </div>
          <div className="flex flex-col gap-3 min-w-[120px]">
            <span className="font-semibold mb-1">Legal</span>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition">Terms of Service</Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition">Cookie Policy</Link>
            <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
