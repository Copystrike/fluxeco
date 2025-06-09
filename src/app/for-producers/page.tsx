// src/app/for-producers/page.tsx
import type { Metadata } from "next";

// We'll import section components, some might be new or adapted
import HeroProducers from "@/components/sections/producers/HeroProducers";
import ProblemsFaced from "@/components/sections/producers/ProblemsFaced";
import FluxecoSolutionProducers from "@/components/sections/producers/FluxecoSolutionProducers";
import ProducerBenefits from "@/components/sections/producers/ProducerBenefits";
import EarningsPotential from "@/components/sections/producers/EarningsPotential";
import HowToJoinProducers from "@/components/sections/producers/HowToJoinProducers";
import FinalCTAProducers from "@/components/sections/producers/FinalCTAProducers";

export const metadata: Metadata = {
  title: "FLUXECO for Solar Producers - Maximize Your Earnings",
  description: "Sell your surplus solar energy directly to businesses at fair market prices with FLUXECO. Turn your solar panels into a more profitable asset.",
};

export default function ForProducersPage() {
  return (
    <>
      <HeroProducers />
      <EarningsPotential />
      <ProblemsFaced />
      <FluxecoSolutionProducers />
      <ProducerBenefits />
      <HowToJoinProducers />
      {/* <TestimonialsProducers /> */} {/* Consider adding this */}
      <FinalCTAProducers />
    </>
  );
}
