import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products-data";
import NavBar from "../home/navbar";
import Footer from "../home/footer";
export const metadata = {
  title: "Products - CoHub",
  description: "Shop our collection of CoHub merchandise and accessories",
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Show your support with our exclusive merchandise and
                  accessories.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full pt-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col overflow-hidden rounded-lg border bg-card"
                  >
                    <Link
                      href={`/products/${product.id}`}
                      className="relative aspect-square"
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain transition-all hover:scale-105"
                        style={{
                          objectFit: product.imageStyle?.objectFit || "cover",
                          objectPosition:
                            product.imageStyle?.objectPosition || "center",
                          padding: product.imageStyle?.padding,
                          borderRadius: product.imageStyle?.borderRadius,
                          backgroundColor: product.imageStyle?.backgroundColor,
                        }}
                      />
                    </Link>
                    <div className="flex flex-col space-y-1.5 p-4">
                      <Link
                        href={`/products/${product.id}`}
                        className="hover:underline"
                      >
                        <h3 className="font-semibold">{product.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-4 pt-0 mt-auto">
                      <div className="font-semibold">
                        ${product.price.toFixed(2)}
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Donate Button */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Button
            size="lg"
            className="animate-bounce shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          >
            <span className="mr-2">❤️</span> Donate to Support Us
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
