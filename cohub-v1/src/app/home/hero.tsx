import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Free Tools for Growing Startups
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empower your startup with our suite of free web-based tools
                  designed to help you grow faster and smarter.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1" asChild>
                  <Link href="/tools">
                    Get Started for Free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tools">Explore Tools</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/hero.svg"
              width={550}
              height={550}
              alt="Hero Image"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
