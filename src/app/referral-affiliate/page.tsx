import type { Metadata } from "next";
import ReferralProductPage from "@/components/products/referral/ReferralProductPage";
import { REFERRAL_SEO_DESCRIPTION } from "@/data/referralProduct";

export const metadata: Metadata = {
  title: "Referral & Affiliate for D2C Brands | SalesHQ",
  description: REFERRAL_SEO_DESCRIPTION,
  keywords: [
    "referral program",
    "affiliate marketing",
    "D2C brands",
    "WhatsApp marketing",
    "UPI payouts",
    "TDS compliance",
    "influencer marketing",
    "referral rewards",
  ],
  alternates: { canonical: "/referral-affiliate" },
  openGraph: {
    title: "Referral & Affiliate for D2C Brands | SalesHQ",
    description: REFERRAL_SEO_DESCRIPTION,
    url: "/referral-affiliate",
    type: "website",
  },
};

export default function Page() {
  return <ReferralProductPage />;
}
