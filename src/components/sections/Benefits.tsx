// src/components/sections/Benefits.tsx
import { TrendingUp, Users, ShieldPlus, Leaf, DollarSign, BarChart3, Settings, CheckCircle, Link } from "lucide-react";
import React from "react";
import Button from "../ui/Button";

const BenefitItem: React.FC<{
  icon: React.ReactElement<any>;
  title: string;
  description: string;
  brandColorClass: string;
}> = ({ icon, title, description, brandColorClass }) => {
  // Derive background class from text color class (tailwind arbitrary value)
  let bgClass = "";
  if (brandColorClass.startsWith("text-[")) {
    bgClass = brandColorClass.replace("text-[", "bg-[").replace(")]", ")/10]");
  } else if (brandColorClass.startsWith("text-")) {
    bgClass = brandColorClass.replace("text-", "bg-") + "/10";
  }

  return (
    <div className="flex items-start space-x-4 py-4">
      <div className={`flex-shrink-0 mt-1 p-2 rounded-md ${bgClass}`}>{React.cloneElement(icon as React.ReactElement<any, any>, { size: 24, strokeWidth: 2, className: brandColorClass })}</div>
      <div>
        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] mb-1">{title}</h3>
        <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function Benefits() {
  const benefitsList = [
    {
      title: "Maximaliseer uw inkomsten",
      description: "Verzeker marktconforme prijzen, beter dan typische lage of negatieve teruglevertarieven.",
      icon: <DollarSign />,
      brandColorClass: "text-[rgb(var(--primary-rgb))]",
    },
    {
      title: "Kies uw partners",
      description: "Selecteer aan welke energie-intensieve bedrijven u levert, passend bij bedrijven die uw waarden delen.",
      icon: <Users />,
      brandColorClass: "text-[rgb(var(--secondary-rgb))]",
    },
    {
      title: "Stabiel, lange termijn inkomen",
      description: "Profiteer van minimale eenjarige energiepoolverbintenissen, wat zorgt voor voorspelbaar inkomen.",
      icon: <ShieldPlus />,
      brandColorClass: "text-[rgb(var(--primary-rgb))]",
    },
    {
      title: "Vereenvoudigde markttoegang",
      description: "Ons platform bundelt kleine producenten, waardoor toegang tot grotere energiedeals mogelijk wordt.",
      icon: <BarChart3 />,
      brandColorClass: "text-[rgb(var(--secondary-rgb))]",
    },
    {
      title: "Stimuleer de energietransitie",
      description: "Speel een sleutelrol in een duurzame toekomst door groene energie direct aan bedrijven te leveren.",
      icon: <Leaf />,
      brandColorClass: "text-green-500", // Using a direct Tailwind green for variety
    },
    {
      title: "Zorgeloze administratie",
      description: "FLUXECO en fluvius regelen de complexe administratieve en technische setup voor u.",
      icon: <Settings />,
      brandColorClass: "text-sky-500", // Using a direct Tailwind blue for variety
    },
  ];

  return (
    <section className="section-padding container-padding bg-gradient-to-br from-green-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="h2-text mb-6">
          Het FLUXECO <span className="text-[rgb(var(--primary-rgb))]">voordeel</span>
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">Deelnemen aan FLUXECO gaat niet alleen over het verkopen van energie; het gaat over controle krijgen, waarde maximaliseren en bijdragen aan een groenere toekomst.</p>
      </div>
      <div className="lg:col-span-2 text-center lg:text-left">
        <div className="lg:col-span-3">
          <div className="space-y-3 divide-y divide-slate-200 dark:divide-slate-700 max-w-3xl mx-auto">
            {/* Benefits List */}
            {benefitsList.map((benefit) => (
              <BenefitItem key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
