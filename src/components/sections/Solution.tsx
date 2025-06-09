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
            Your <span className="text-[rgb(var(--secondary-rgb))]">Pathway</span> to Fair Energy
          </h2>
          <div className="p-text mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            We've built a robust platform designed for transparency, profitability, and a sustainable future.
            <SolutionFeature icon={Zap} title="Direct P2P Sales" description="Our intuitive digital platform connects solar owners directly with businesses seeking green energy, cutting out the middleman for better returns." brandColorClass="text-[rgb(var(--primary-rgb))]" />
            <SolutionFeature icon={Combine} title="Virtual Power Plant" description="We aggregate numerous small-scale producers into a significant virtual power plant, enhancing market access and bargaining power." brandColorClass="text-[rgb(var(--secondary-rgb))]" align="right" />
            <SolutionFeature icon={Users} title="Green Energy for Business" description="Energy-intensive companies can effortlessly source local, sustainable energy, bolstering their green credentials and ensuring stable supply." brandColorClass="text-[rgb(var(--secondary-rgb))]" />
            <SolutionFeature icon={ShieldCheck} title="Compliant & Secure" description="All transactions adhere to the official Fluvius model for P2P energy sales, guaranteeing legal and technical compliance for peace of mind." brandColorClass="text-[rgb(var(--primary-rgb))]" align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
