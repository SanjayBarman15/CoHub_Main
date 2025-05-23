import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Briefcase,
  Globe,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "../home/navebar";
import Footer from "../home/footer";

export const metadata = {
  title: "About Us - CoHub",
  description: "Learn about our mission, team, and the story behind CoHub",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
                  Our Story
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  How we&apos;re democratizing access to essential business tools for
                  startups everywhere.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl">
                <Image
                  src="/hero.svg"
                  width={800}
                  height={400}
                  alt="Team working together"
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  At CoHub, we believe that every startup deserves access to
                  powerful tools without breaking the bank. Our mission is to
                  democratize access to essential business tools and empower the
                  next generation of entrepreneurs.
                </p>
                <p className="text-muted-foreground md:text-lg mt-4">
                  We started in 2018 when our founders, former startup founders
                  themselves, realized how much money early-stage companies were
                  spending on software tools. They set out to create a suite of
                  free, high-quality tools that would help startups grow without
                  the financial burden.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Our Values
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Accessibility</h3>
                      <p className="text-muted-foreground">
                        We believe great tools should be available to everyone,
                        regardless of budget.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Community</h3>
                      <p className="text-muted-foreground">
                        We&apos;re building a supportive ecosystem for founders to
                        learn and grow together.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Impact</h3>
                      <p className="text-muted-foreground">
                        We measure success by how many startups we help succeed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate people behind CoHub.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/rishab.svg"
                    width={200}
                    height={200}
                    alt="Rishav Baruah"
                    className="rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Rishav Baruah</h3>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/simmy.svg"
                    width={200}
                    height={200}
                    alt="Sathi Chakraborty"
                    className="rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Sathi Chakraborty</h3>
                  </div>
                </div>
                {/* Team Member 2 */}
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src="/me.svg"
                    width={200}
                    height={200}
                    alt="Sanjay Barman"
                    className="rounded-full object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Sanjay Barman</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From idea to impact.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-8 py-12">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-bold">2018: The Beginning</h3>
                    <p className="text-muted-foreground">
                      CoHub was founded with a simple mission: make powerful
                      business tools accessible to all startups.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-bold">
                      2020: Growth & Expansion
                    </h3>
                    <p className="text-muted-foreground">
                      We expanded our tool suite and reached our first 10,000
                      users, helping startups save over $5 million in software
                      costs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-bold">2023: Global Impact</h3>
                    <p className="text-muted-foreground">
                      Today, we serve over 100,000 startups in 120+ countries,
                      with a growing team dedicated to our mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join Our Mission
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Help us empower the next generation of entrepreneurs.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/tools">Try Our Tools</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/join-our-team">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
