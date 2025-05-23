import Link from "next/link";
import { ArrowLeft, UploadCloud, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "../home/navebar";
import Footer from "../home/footer";

export const metadata = {
  title: "Join Our Team - CoHub",
  description: "Apply to join the CoHub team. Submit your details and resume.",
};

export default function JoinOurTeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-2">Join Our Team</h1>
              <p className="text-muted-foreground mb-8">
                We&apos;re always looking for talented people! Fill out the form
                below and upload your resume to apply.
              </p>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cover-letter" className="text-sm font-medium">
                    Cover Letter
                  </label>
                  <textarea
                    id="cover-letter"
                    required
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Tell us why you'd be a great fit!"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">
                    Resume (PDF, DOCX)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                    <UploadCloud className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
