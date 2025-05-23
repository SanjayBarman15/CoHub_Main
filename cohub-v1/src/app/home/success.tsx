import Image from 'next/image'
import React from 'react'

function Success() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Success Stories
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See how startups like yours are growing with our tools.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="./Sarah.svg"
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">
                  Founder, GrowthGenius
                </p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;We saved over $10,000 in our first year by using
              CoHub&apos;s free CRM and email marketing tools. It&apos;s
              been a game-changer for our small team.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="./Michael.svg"
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">
                  CTO, LaunchPad
                </p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;The website builder helped us launch our MVP in just
              two days. We&apos;ve since raised our seed round and still
              use CoHub for our core operations.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="./Aisha.svg"
                width={40}
                height={40}
                alt="Avatar"
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">Aisha Patel</h3>
                <p className="text-sm text-muted-foreground">
                  CEO, EcoStart
                </p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;As a non-technical founder, I was able to set up our
              entire online presence and customer management system
              without hiring a developer. CoHub is incredibly
              intuitive.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Success