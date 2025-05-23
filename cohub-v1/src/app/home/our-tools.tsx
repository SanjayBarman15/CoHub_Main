import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Database, MessageSquare } from "lucide-react";
import Image from "next/image";
function OurTools() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Tools
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to launch and grow your startup, all in one
              place.
            </p>
          </div>

          {/* First Tool */}
          <div className="w-full max-w-5xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-left space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">EzTask</h3>
                <p className="text-muted-foreground">
                  A modern task management and collaboration tool for teams of
                  all sizes.
                </p>
                <Button asChild>
                  <Link href="/tools">Learn More</Link>
                </Button>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative">
                  <Image
                    src="/Task2.png"
                    alt="T-Shirt"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Tool */}
          <div className="w-full max-w-5xl mx-auto mt-16">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1 text-left space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Sprint Space</h3>
                <p className="text-muted-foreground">
                  &ldquo;AI-powered codebase Q&A with shared answers.&rdquo;
                </p>
                <Button asChild>
                  <Link href="/tools">Learn More</Link>
                </Button>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative">
                <Image
                    src="/Q&A.jpg"
                    alt="T-Shirt"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Tool */}
          <div className="w-full max-w-5xl mx-auto mt-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 text-left space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">EchoMeet</h3>
                <p className="text-muted-foreground">
                A modern chat and meeting web app with an intuitive interface and a built-in collaborative whiteboard for seamless teamwork.
                </p>
                <Button asChild>
                  <Link href="/tools">Learn More</Link>
                </Button>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-6 shadow-sm">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative">
                <Image
                    src="/meet.svg"
                    alt="T-Shirt"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" asChild>
              <Link href="/tools">View All Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTools;
