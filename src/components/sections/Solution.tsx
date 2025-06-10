// src/components/sections/Solution.tsx
import React from "react";
import { Zap, Users, ShieldCheck, Combine, LucideIcon } from "lucide-react";

const SolutionFeature: React.FC<{
  icon: LucideIcon;
  title: string;
  description: string;
  brandColorClass: string; // e.g., "text-[rgb(var(--primary-rgb))]"
  align?: "left" | "center" | "right";
}> = ({ icon: Icon, title, description, brandColorClass, align = "left" }) => {
  const textAlignClass = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  // Derive background class from text color class (tailwind arbitrary value)
  const bgClass = brandColorClass.startsWith("text-[") ? brandColorClass.replace("text-[", "bg-[").replace(")]", ")/10]") : "";

  return (
    <div className={`py-8 md:py-10 flex flex-col ${textAlignClass}`}>
      <div className={`inline-block p-3 rounded-lg mb-6 ${bgClass}`}>
        <Icon size={36} strokeWidth={2} className={brandColorClass} />
      </div>
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${brandColorClass}`}>{title}</h3>
      <p className={`text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg ${align === "center" ? "mx-auto" : ""}`}>{description}</p>
    </div>
  );
};

export default function Solution() {
  return (
    <section id="solution-section" className="section-padding bg-gradient-to-b from-sky-50 to-green-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container-padding">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="h2-text">
            Uw <span className="text-[rgb(var(--secondary-rgb))]">weg</span> naar eerlijke energie
          </h2>
          <div className="p-text mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            We hebben een robuust platform gebouwd, ontworpen voor transparantie, winstgevendheid en een duurzame toekomst.
            <SolutionFeature icon={Zap} title="Directe P2P verkoop" description="Ons intuïtieve digitale platform verbindt zonnepaneeleigenaren rechtstreeks met bedrijven die groene energie zoeken, waardoor tussenpersonen worden uitgeschakeld voor betere rendementen." brandColorClass="text-[rgb(var(--primary-rgb))]" />
            <SolutionFeature icon={Combine} title="Virtuele energiecentrale" description="We bundelen talrijke kleinschalige producenten tot een significante virtuele energiecentrale, wat de markttoegang en onderhandelingskracht vergroot." brandColorClass="text-[rgb(var(--secondary-rgb))]" align="right" />
            <SolutionFeature icon={Users} title="Groene energie voor bedrijven" description="Energie-intensieve bedrijven kunnen moeiteloos lokale, duurzame energie inkopen, hun groene referenties versterken en een stabiele levering verzekeren." brandColorClass="text-[rgb(var(--secondary-rgb))]" />
            <SolutionFeature icon={ShieldCheck} title="Conform & veilig" description="Alle transacties voldoen aan het officiële fluvius-model voor p2p-energieverkoop, wat wettelijke en technische conformiteit garandeert voor gemoedsrust." brandColorClass="text-[rgb(var(--primary-rgb))]" align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
