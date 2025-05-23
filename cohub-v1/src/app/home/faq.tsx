import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Got questions? We&apos;ve got answers.
            </p>
          </div>
          <div className="mx-auto max-w-3xl w-full py-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it really free?</AccordionTrigger>
                <AccordionContent>
                  Yes! All of our core tools are completely free to use. We
                  offer premium features for growing businesses, but you can use
                  the free version for as long as you want.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do you make money if the tools are free?
                </AccordionTrigger>
                <AccordionContent>
                  We offer premium features and increased usage limits for
                  businesses that need more. Our free tier is generous enough
                  for most early-stage startups, and as you grow, you might
                  choose to upgrade to our affordable paid plans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do I need technical skills to use these tools?
                </AccordionTrigger>
                <AccordionContent>
                  Not at all! Our tools are designed to be user-friendly and
                  intuitive, even for non-technical users. We provide templates,
                  guides, and support to help you get started.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I export my data if I decide to switch to another service?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. We believe in data portability. You can export
                  your data at any time in standard formats that can be imported
                  into other services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How secure is my data?</AccordionTrigger>
                <AccordionContent>
                  We take security seriously. All data is encrypted in transit
                  and at rest. We use industry-standard security practices and
                  regularly undergo security audits to ensure your data is
                  protected.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
