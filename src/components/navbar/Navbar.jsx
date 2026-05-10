import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl h-20 flex items-center justify-between">
        {/* Socials - hidden on smaller screens */}
        <div className="hidden lg:flex gap-4 items-center flex-1 opacity-70">
          <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="hover:opacity-100 transition cursor-pointer" />
          <Image src="/instagram.png" alt="Instagram" width={20} height={20} className="hover:opacity-100 transition cursor-pointer" />
          <Image src="/tiktok.png" alt="Tiktok" width={20} height={20} className="hover:opacity-100 transition cursor-pointer" />
          <Image src="/youtube.png" alt="Youtube" width={20} height={20} className="hover:opacity-100 transition cursor-pointer" />
        </div>

        {/* Logo */}
        <Link href="/" className="flex-1 text-center text-2xl lg:text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Jacob Tech Info
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6 font-medium text-sm">
          <ThemeToggle />
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/blog" className="hover:text-primary transition">Blog</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <AuthLinks />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex flex-1 justify-end items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-2xl tracking-tighter">Jacob Tech Info</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8 font-medium text-lg">
                <Link href="/" className="hover:text-primary">Home</Link>
                <Link href="/blog" className="hover:text-primary">Blog</Link>
                <Link href="/about" className="hover:text-primary">About</Link>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
                <div className="my-4 border-t pt-4">
                  <AuthLinks isMobile={true} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
