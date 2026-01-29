'use client'
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  Users, 
  Gift, 
  MessageCircle, 
  Wallet, 
  ArrowRight,
  Share2,
  Award,
  Receipt,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Referrals",
    description: "Turn every customer into a salesperson with shareable links via WhatsApp, email, and SMS. Instant rewards on successful conversions.",
    icon: Share2,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    features: ["WhatsApp/Email/SMS links", "Instant UPI rewards", "Thank-you page widgets"],
  },
  {
    title: "Affiliates",
    description: "Scale your creator partnerships without spreadsheets. Branded landing pages, custom codes, and performance-based payouts.",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    features: ["Custom affiliate codes", "Commission tiers", "Performance dashboard"],
  },
  {
    title: "WhatsApp-First",
    description: "Run your entire referral program natively on WhatsApp. From onboarding to payouts, meet customers where they are.",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    features: ["Native WhatsApp flows", "Automated updates", "Template messages"],
  },
  {
    title: "UPI & Compliance",
    description: "Instant payouts via UPI with built-in TDS, PAN, and GST handling. Stay compliant without the paperwork.",
    icon: Wallet,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    features: ["Instant UPI payouts", "TDS/PAN/GST handling", "ITR-ready exports"],
  },
];

export default function ReferralAffiliateSection() {
  return (
    <section 
      aria-label="Referral & Affiliate" 
      className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="referral-affiliate"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-emerald-50/30 dark:from-purple-950/10 dark:via-transparent dark:to-emerald-950/10" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 px-3 py-2 sm:px-4 bg-gradient-to-r from-purple-500 to-emerald-500 text-white border-0 shadow-lg text-xs sm:text-sm">
            <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Also from SalesHQ
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Referral & Affiliate Platform
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Built for India's D2C Brands
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Turn your customers and creators into a 24/7 sales channel. WhatsApp-first referrals, 
            instant UPI payouts, and full compliance—all in one platform.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pillars.map(({ title, description, icon: Icon, color, bgColor, borderColor, features }, index) => (
            <div 
              key={title} 
              className={`group relative ${bgColor} backdrop-blur-md bg-white/20 dark:bg-gray-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 hover:bg-white/30 dark:hover:bg-gray-900/30`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            <Link href="/referral-affiliate">
              Explore Referral & Affiliate
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
