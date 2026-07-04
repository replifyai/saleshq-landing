import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: [
      { label: "SalesHQ for Shopify", href: "/products/shopify" },
      { label: "Sales Assistant", href: "/products/sales-assistant" },
      { label: "Referral & Affiliate", href: "/referral-affiliate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Features", href: "/features" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Book a demo", href: "https://calendly.com/saleshqai/30min" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border">
      {/* CTA band */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            AI for every stage of the sale
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Convert more shoppers, grow through referrals, and close faster — start free, or talk to
            us about what SalesHQ can do across your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 h-12">
              <Link href="/contact">
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
              <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <Image
                src="/logo.png"
                alt="SalesHQ"
                width={110}
                height={30}
                className="h-7 w-auto mb-4 dark:bg-white dark:rounded-md dark:px-1.5 dark:py-0.5"
              />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                The AI platform across your whole revenue motion — an AI shopping assistant for
                Shopify, a referral &amp; affiliate growth engine, and a real-time assistant for
                sales teams.
              </p>
            </div>
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-foreground mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SalesHQ. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
