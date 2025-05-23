import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "../home/navebar";
import Footer from "../home/footer";

export const metadata = {
  title: "Blog - CoHub",
  description: "Latest insights, tips, and news from the CoHub team",
};

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tools Every Startup Needs in 2024",
    excerpt:
      "Discover the must-have tools that can help your startup scale efficiently and cost-effectively.",
    author: "Rishav Baruah",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/start.jpg",
    category: "Tools",
  },
  {
    id: 2,
    title: "How to Build a Strong Remote Team Culture",
    excerpt:
      "Learn the best practices for maintaining team cohesion and productivity in a remote work environment.",
    author: "Sanjay Barman",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/team.jpeg",
    category: "Team",
  },
  {
    id: 3,
    title: "The Future of AI in Business Operations",
    excerpt:
      "Explore how artificial intelligence is transforming business operations and what it means for startups.",
    author: "Sathi Chakraborty",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/AI.jpg",
    category: "Technology",
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary hover:underline mb-4 self-start"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Blog
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights, tips, and news from our team to help your startup
                  grow.
                </p>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-lg border bg-card"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 p-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold leading-tight">
                        <Link
                          href={`/blog/${post.id}`}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button asChild className="mt-4">
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="mt-16 rounded-lg border bg-card p-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-2xl font-bold">
                  Subscribe to Our Newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground">
                  Get the latest articles and insights delivered straight to
                  your inbox.
                </p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit">Subscribe</Button>
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
