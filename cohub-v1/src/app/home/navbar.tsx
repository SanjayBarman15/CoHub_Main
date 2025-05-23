import React from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:"
          >
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CoHub</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/tools"
            className="text-sm font-medium hover:text-primary"
          >
            Tools
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary hidden sm:block"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="/tools">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
