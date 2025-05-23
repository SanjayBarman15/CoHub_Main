import React from "react";
import { Zap, CheckCircle, Globe } from "lucide-react";
function OurMission() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Mission
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe that every startup deserves access to powerful tools
              without breaking the bank. Our mission is to democratize access to
              essential business tools and empower the next generation of
              entrepreneurs.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Simple & Intuitive</h3>
              <p className="text-muted-foreground">
                Our tools are designed to be easy to use, with no steep learning
                curve.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Always Free</h3>
              <p className="text-muted-foreground">
                Core features are free forever, with optional premium upgrades
                as you grow.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Built for Scale</h3>
              <p className="text-muted-foreground">
                Our tools grow with your business, from day one to your Series A
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
