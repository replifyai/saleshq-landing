"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "shubham@saleshq.ai",
    description: "We reply within 24 hours",
    action: "mailto:shubham@saleshq.ai",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 96178 74449",
    description: "Mon–Fri, 8am–5pm IST",
    action: "tel:+919617874449",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Bangalore, Karnataka",
    description: "India",
    action: null,
  },
  {
    icon: Clock,
    title: "Working hours",
    content: "Mon–Fri: 8am–5pm",
    description: "IST (GMT+5:30)",
    action: null,
  },
];

const inquiryTypes = [
  { value: "general", label: "General inquiry", icon: MessageSquare },
  { value: "sales", label: "Sales & pricing", icon: Users },
  { value: "support", label: "Technical support", icon: Headphones },
  { value: "partnership", label: "Partnership", icon: CheckCircle2 },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiryLabel =
      inquiryTypes.find((t) => t.value === formData.inquiryType)?.label ?? "General inquiry";
    const subject = encodeURIComponent(`[${inquiryLabel}] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "—"}\n\n${formData.message}`
    );
    window.location.href = `mailto:shubham@saleshq.ai?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,53%,0.08),transparent)]" />
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-eyebrow justify-center">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Questions about SalesHQ or the Referral &amp; Affiliate beta? Send us a message
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-foreground mb-6">Contact information</h2>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-foreground">{info.title}</h3>
                      {info.action ? (
                        <a href={info.action} className="text-sm text-primary hover:underline underline-offset-4">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{info.content}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-foreground mb-1">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  This opens your email client with everything pre-filled.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry type */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">
                      What can we help you with?
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-center gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                            formData.inquiryType === type.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-muted"
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry…"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4" />
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
