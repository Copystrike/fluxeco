// src/app/for-consumers/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLUXECO for Consumers - Secure Your Green Energy Future",
  description: "Source local, renewable energy directly from producers with FLUXECO. Achieve sustainability goals with stable pricing and a reliable supply for your business or household.",
  keywords: "green energy for consumers, renewable energy procurement, P2P energy, sustainability, stable energy prices, local solar energy, Flanders energy solutions",
};

// Import all the consumer-specific section components
import HeroConsumers from "@/components/sections/consumers/HeroConsumers";
import ChallengesForConsumers from "@/components/sections/consumers/ChallengesForConsumers";
import FluxecoSolutionForConsumers from "@/components/sections/consumers/FluxecoSolutionForConsumers";
import ConsumerBenefits from "@/components/sections/consumers/ConsumerBenefits";
import ConsumerCostStructure from "@/components/sections/consumers/ConsumerCostStructure";
import HowItWorksForConsumers from "@/components/sections/consumers/HowItWorksForConsumers";
import FinalCTAConsumers from "@/components/sections/consumers/FinalCTAConsumers";

export default function ForConsumersPage() {
  return (
    <>
      {/* 1. Hero: Grab attention and state the core value proposition for consumers */}
      <HeroConsumers />

      {/* 2. Challenges: Empathize with the problems consumers face */}
      <ChallengesForConsumers />

      {/* 3. Solution: Position FLUXECO as the answer to those challenges */}
      <FluxecoSolutionForConsumers />

      {/* 4. Benefits: Detail the specific advantages of partnering with FLUXECO */}
      <ConsumerBenefits />

      {/* 5. Cost Structure: Transparently present the pricing model */}
      <ConsumerCostStructure />

      {/* 6. How It Works (Condensed): Explain the process from their perspective */}
      <HowItWorksForConsumers />

      {/* Optional: Add a section for Testimonials or Client Logos here for social proof */}
      {/* <ConsumerTestimonials /> */}

      {/* 7. Final CTA: Encourage them to take the next step */}
      <FinalCTAConsumers />
    </>
  );
}
