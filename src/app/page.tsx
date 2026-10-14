import React from "react";
import { AnnouncementBar } from "@/components/common/AnnouncementBar";
import { Navbar } from "@/components/common/Navbar";
import { ProductHero } from "@/components/product/ProductHero";
import { CrashProofShowcase } from "@/components/cro/CrashProofShowcase";
import { ComparisonTable } from "@/components/cro/ComparisonTable";
import { ReviewsSection } from "@/components/cro/ReviewsSection";
import { FaqAccordion } from "@/components/cro/FaqAccordion";
import { Footer } from "@/components/common/Footer";
import { getStarProduct } from "@/lib/shopify/queries";

export const revalidate = 60; // Incremental Static Regeneration every 60s

export default async function HomePage() {
  // Fetch live product from Shopify Storefront API with fallback to high-converting default
  const starProduct = await getStarProduct();

  return (
    <main className="min-h-screen bg-brand-dark text-slate-100 flex flex-col selection:bg-accent-orange selection:text-white">
      {/* 1. Value Proposition Announcement Ribbon */}
      <AnnouncementBar />

      {/* 2. Navigation with Cart and WhatsApp Support */}
      <Navbar />

      {/* 3. Hero Section: Star Product, Pricing $129k COP, Bundles & CTAs */}
      <ProductHero product={starProduct} />

      {/* 4. Why it doesn't break: Durability & Child Safety Showcase */}
      <CrashProofShowcase />

      {/* 5. Head-to-Head Comparison: Dronezy vs Cheap Traditional Drones */}
      <ComparisonTable />

      {/* 6. Social Proof: Real Customer Reviews from Colombia */}
      <ReviewsSection />

      {/* 7. Objection Killer: FAQs Accordion */}
      <FaqAccordion />

      {/* 8. Trust Footer with Payment Methods and Contact */}
      <Footer />
    </main>
  );
}
