// src/app/page.tsx
import Hero from "@/components/sections/Hero"; // Assuming @ alias
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorksSummary from "@/components/sections/HowItWorksSummary";
import Benefits from "@/components/sections/Benefits";
import AudienceCTA from "@/components/sections/AudienceCTA";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorksSummary />
      <Benefits />
      <AudienceCTA />
      <FinalCTA />
    </>
  );
}
