import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products-data";
import NavBar from "../../home/navebar";
import Footer from "../../home/footer";

export const metadata = {
  title: "Product Details - CoHub",
  description: "View detailed information about our products",
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const productId = (await params).id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <p className="text-muted-foreground">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {/* Back Button */}
            <Link
              href="/products"
              className="flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
                  <Image
                    src={product.image}
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
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {product.category}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                {/* Product Features */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Features</h2>
                  <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                    <li>High-quality materials</li>
                    <li>Durable and long-lasting</li>
                    <li>Perfect for developers</li>
                    <li>Official CoHub merchandise</li>
                  </ul>
                </div>

                {/* Add to Cart Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button size="lg" className="flex-1">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $50
                  </p>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    Additional Information
                  </h2>
                  <div className="grid gap-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Category</span>
                      <span className="text-muted-foreground">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Availability</span>
                      <span className="text-green-600">In Stock</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Shipping</span>
                      <span className="text-muted-foreground">
                        2-3 business days
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Returns</span>
                      <span className="text-muted-foreground">
                        30 days return policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
