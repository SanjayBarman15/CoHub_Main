import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
function OurProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Show your support with our exclusive merchandise and accessories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto pt-8">
            {/* T-Shirt */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="relative aspect-square bg-muted">
                <Image
                  src="/shirt.svg"
                  alt="T-Shirt"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold">CoHub Logo T-Shirt</h3>
                <p className="text-sm text-muted-foreground">
                  Comfortable cotton t-shirt with the CoHub logo
                </p>
              </div>
              <div className="flex items-center justify-between p-4 pt-0 mt-auto">
                <div className="font-semibold">$9.99</div>
                <Button size="sm" asChild>
                  <Link href="/products">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Tote Bag */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="relative aspect-square bg-muted">
                <Image
                  src="/Tote.jpg"
                  alt="Tote Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold">Canvas Tote Bag</h3>
                <p className="text-sm text-muted-foreground">
                  Eco-friendly canvas bag perfect for your laptop
                </p>
              </div>
              <div className="flex items-center justify-between p-4 pt-0 mt-auto">
                <div className="font-semibold">$16.99</div>
                <Button size="sm" asChild>
                  <Link href="/products">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Water Bottle */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="relative aspect-square bg-muted">
                <Image
                  src="/Bottle.jpg"
                  alt="Water Bottle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold">Insulated Water Bottle</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your drinks hot or cold during coding sessions
                </p>
              </div>
              <div className="flex items-center justify-between p-4 pt-0 mt-auto">
                <div className="font-semibold">$13.99</div>
                <Button size="sm" asChild>
                  <Link href="/products">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hoodie */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="relative aspect-square bg-white">
                <Image
                  src="/Hoodie.jpg"
                  alt="Hoodie"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold">Developer Hoodie</h3>
                <p className="text-sm text-muted-foreground">
                  Stay warm while coding with our premium hoodie
                </p>
              </div>
              <div className="flex items-center justify-between p-4 pt-0 mt-auto">
                <div className="font-semibold">$22.99</div>
                <Button size="sm" asChild>
                  <Link href="/products">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
