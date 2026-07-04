'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/providers/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowRight, Headphones, ShoppingBag, Gift } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  {
    label: "Sales Assistant",
    href: "/products/sales-assistant",
    description: "Real-time answers for revenue teams",
    icon: <Headphones className="w-4 h-4" />,
  },
  {
    label: "SalesHQ for Shopify",
    href: "/products/shopify",
    description: "AI shopping assistant that converts",
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    label: "Referral & Affiliate",
    href: "/referral-affiliate",
    description: "Growth platform for D2C brands",
    icon: <Gift className="w-4 h-4" />,
  },
];

const links = [
  { label: "SalesHQ for Shopify", href: "/products/shopify" },
  { label: "About", href: "/about" },
];

export default function LandingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.png" alt="SalesHQ" width={120} height={32} className="h-8 w-auto dark:bg-white dark:rounded-md dark:px-1.5 dark:py-0.5" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-1 p-2 w-[480px]">
                      {solutions.map((item) => (
                        <NavigationMenuLink key={item.label} asChild>
                          <Link
                            href={item.href}
                            className="flex items-start gap-3 rounded-lg p-3 no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{item.label}</div>
                              <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {links.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted focus:outline-none"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="https://calendly.com/saleshqai/30min" target="_blank" rel="noopener noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild className="rounded-full px-5">
              <Link href="/contact">
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle>
                    <Image src="/logo.png" alt="SalesHQ" width={100} height={28} className="h-7 w-auto dark:bg-white dark:rounded-md dark:px-1.5 dark:py-0.5" />
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="px-1 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Products
                    </div>
                    {solutions.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1 border-t border-border pt-4">
                    {links.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-border pt-4">
                    <Button variant="outline" asChild>
                      <Link
                        href="https://calendly.com/saleshqai/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Book a demo
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
