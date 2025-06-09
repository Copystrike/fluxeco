// src/app/for-consumers/page.tsx
import { Metadata } from "next";
import HeroConsumers from "@/components/sections/consumers/HeroConsumers";
import ChallengesForConsumers from "@/components/sections/consumers/ChallengesForConsumers";
import FluxecoSolutionForConsumers from "@/components/sections/consumers/FluxecoSolutionForConsumers";
import ConsumerBenefits from "@/components/sections/consumers/ConsumerBenefits";
import ConsumerCostStructure from "@/components/sections/consumers/ConsumerCostStructure";
import HowItWorksForConsumers from "@/components/sections/consumers/HowItWorksForConsumers";
import FinalCTAConsumers from "@/components/sections/consumers/FinalCTAConsumers";

export const metadata: Metadata = {
  title: "FLUXECO for Consumers - Secure Your Green Energy Future",
  description: "Source local, renewable energy directly from producers with FLUXECO. Achieve sustainability goals with stable pricing and a reliable supply for your business or household.",
  keywords: "green energy for consumers, renewable energy procurement, P2P energy, sustainability, stable energy prices, local solar energy, Flanders energy solutions",
};

export default function ForConsumersPage() {
  return (
    <>
      <HeroConsumers />
      <ChallengesForConsumers />
      <FluxecoSolutionForConsumers />
      <ConsumerBenefits />
      <ConsumerCostStructure />
      <HowItWorksForConsumers />
      {/* <ConsumerTestimonials /> */}
      <FinalCTAConsumers />
    </>
  );
}
