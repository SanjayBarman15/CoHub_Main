import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/lib/data";
import Footer from "../home/footer";
import NavBar from "../home/navbar";
import Image from "next/image";

export const metadata = {
  title: "Tools - CoHub",
  description:
    "Explore our free web-based tools for startups and small businesses",
};

export default function ToolsPage() {
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
                  Our Tools
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our collection of free web-based tools designed to
                  help your startup grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        {tools.map((tool, index) => (
          <section
            key={tool.id}
            className="w-full py-16 md:py-24 lg:py-32 min-h-[80vh] flex items-center"
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "var(--background)"
                  : "hsl(var(--muted) / 0.5)",
            }}
          >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {tool.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{tool.name}</h2>
                  <p className="text-xl text-muted-foreground">
                    {tool.description}
                  </p>
                  <div className="py-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Key Features:
                    </h3>
                    <ul className="space-y-2 pl-5 list-disc">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button size="lg" asChild>
                      <Link href={tool.link}>Launch {tool.name}</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 rounded-lg border bg-card p-8 shadow-lg">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative">
                    <Image
                      src={tool.image}
                      alt={`${tool.name} preview`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
