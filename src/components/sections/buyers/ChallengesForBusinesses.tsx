// src/components/sections/buyers/ChallengesForBusinesses.tsx
import { BarChartHorizontalBig, ShieldAlert, Target, Globe } from "lucide-react"; // More business-y icons
import React from "react";

const ChallengeItem: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left p-2">
    <div className="flex-shrink-0 w-14 h-14 mb-5 text-sky-700 dark:text-sky-500 bg-sky-100 dark:bg-sky-800/70 rounded-lg flex items-center justify-center">{React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}</div>
    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">{title}</h3>
    <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default function ChallengesForBusinesses() {
  const challenges = [
    { title: "Energy Price Volatility", description: "Fluctuating market prices make budgeting unpredictable and can significantly impact operational costs.", icon: <BarChartHorizontalBig /> },
    { title: "Meeting ESG Mandates", description: "Increasing pressure to demonstrate sustainability and reduce carbon footprint requires verifiable green energy.", icon: <Target /> },
    { title: "Sourcing Reliable Green Energy", description: "Finding consistent, truly local, and transparently sourced renewable energy can be complex and time-consuming.", icon: <Globe /> },
  ];

  return (
    <section className="section-padding container-padding bg-slate-50 dark:bg-slate-800/30">
      <div className="text-center mb-16 md:mb-20">
        <ShieldAlert className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto mb-4" />
        <h2 className="h2-text text-slate-900 dark:text-slate-50">Navigating Today's Energy Landscape</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">Businesses like yours face increasing complexities in managing energy costs and sustainability commitments.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
        {challenges.map((challenge) => (
          <ChallengeItem key={challenge.title} title={challenge.title} description={challenge.description} icon={challenge.icon} />
        ))}
      </div>
    </section>
  );
}
