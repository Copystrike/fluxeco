// src/components/sections/producers/FluxecoSolutionProducers.tsx
import React from "react";
import { Zap, Users, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

// Feature item with large icon, alternating layout
const SolutionItem: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}> = ({ title, description, icon, reverse = false }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 py-8`}>
    <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[rgb(var(--primary-rgb))] to-emerald-400 text-white rounded-2xl flex items-center justify-center shadow-xl transform transition-transform hover:scale-105">
      {React.cloneElement(icon as React.ReactElement, { size: 48, strokeWidth: 1.5 })}
    </div>
    <div className={`flex-1 text-center md:text-left ${reverse ? 'md:text-right' : ''}`}>
      <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-[rgb(var(--primary-rgb))]">{title}</h3>
      <p className="text-lg text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function FluxecoSolutionProducers() {
  const solutions = [
    {
      title: "Direct Sales, Premium Prices",
      description: "Our P2P platform connects you straight to businesses, ensuring you get market-leading rates for every surplus kWh.",
      icon: <TrendingUp />,
    },
    {
      title: "Access High-Value Buyers",
      description: "Tap into our network of energy-intensive companies actively seeking your local, green energy for their sustainability goals.",
      icon: <Users />,
    },
    {
      title: "Effortless Participation",
      description: "FLUXECO streamlines all administrative complexities with Fluvius, including 'meetregime 3' activation, for a smooth start.",
      icon: <ShieldCheck />,
    },
    {
      title: "Amplify Your Impact",
      description: "Join a powerful virtual energy plant. Your contribution, combined with others, commands greater market presence and value.",
      icon: <Zap />,
    },
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="h2-text">The Smart Solution for Your Solar</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">
          We've engineered a platform that directly tackles your challenges and transforms your solar surplus into a significant asset.
        </p>
      </div>
      <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-700">
        {solutions.map((solution, index) => (
          <SolutionItem
            key={solution.title}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
