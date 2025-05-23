import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookmarkPlus,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "../home/navbar";
import Footer from "../home/footer";

export const metadata = {
  title: "Blog Post - CoHub",
  description: "Read our latest insights and articles",
};

// This would typically come from a database or CMS
const blogPost = {
  id: 1,
  title: "10 Essential Tools Every Startup Needs in 2024",
  content: `
    <p>In today's fast-paced business environment, having the right tools can make all the difference for startups. Here's our comprehensive guide to the essential tools that every startup should consider in 2024.</p>

    <h2>1. Project Management Tools</h2>
    <p>Effective project management is crucial for startup success. Tools like Asana, Trello, and Monday.com help teams stay organized and track progress efficiently.</p>

    <h2>2. Communication Platforms</h2>
    <p>With remote work becoming increasingly common, robust communication tools are essential. Slack and Microsoft Teams offer seamless team collaboration and instant messaging.</p>

    <h2>3. Financial Management Software</h2>
    <p>Keeping track of finances is critical. QuickBooks and Xero provide comprehensive accounting solutions tailored for startups.</p>

    <h2>4. Customer Relationship Management (CRM)</h2>
    <p>Building and maintaining customer relationships is key. HubSpot and Salesforce offer powerful CRM solutions that help manage customer interactions effectively.</p>

    <h2>5. Marketing Automation Tools</h2>
    <p>Automating marketing tasks can save time and improve efficiency. Mailchimp and HubSpot Marketing Hub are excellent choices for email marketing and automation.</p>

    <h2>6. Analytics Platforms</h2>
    <p>Data-driven decisions are crucial for growth. Google Analytics and Mixpanel provide valuable insights into user behavior and business performance.</p>

    <h2>7. Cloud Storage Solutions</h2>
    <p>Secure and accessible file storage is essential. Google Drive and Dropbox offer reliable cloud storage solutions for teams.</p>

    <h2>8. Design Tools</h2>
    <p>Creating professional visuals is important for branding. Canva and Adobe Creative Cloud provide powerful design capabilities.</p>

    <h2>9. Customer Support Software</h2>
    <p>Providing excellent customer support is crucial. Zendesk and Intercom offer comprehensive customer support solutions.</p>

    <h2>10. Security Tools</h2>
    <p>Protecting your startup's data is paramount. Tools like LastPass and 1Password help manage passwords securely.</p>

    <p>Remember, the best tools are the ones that align with your startup's specific needs and goals. Start with the essentials and expand your toolkit as your business grows.</p>
  `,
  author: "Rishav Baruah",
  date: "March 15, 2024",
  readTime: "5 min read",
  image: "/start.jpg",
  category: "Tools",
  tags: ["Startup", "Tools", "Productivity", "Business"],
  relatedPosts: [
    {
      id: 2,
      title: "How to Build a Strong Remote Team Culture",
      image: "/team.jpeg",
      date: "March 10, 2024",
    },
    {
      id: 3,
      title: "The Future of AI in Business Operations",
      image: "/AI.jpg",
      date: "March 5, 2024",
    },
  ],
};

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <article className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            {/* Back Button */}
            <Link
              href="/blog"
              className="flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {blogPost.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {blogPost.readTime}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {blogPost.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {blogPost.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
            </div>

            {/* Related Posts */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {blogPost.relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group flex flex-col space-y-2"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
