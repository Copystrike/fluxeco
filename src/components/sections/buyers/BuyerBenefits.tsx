// src/components/sections/buyers/BuyerBenefits.tsx
import { ShieldCheck, Leaf, TrendingUp, Users, Zap, Award } from "lucide-react"; // Added Award
import React from "react";

const BenefitCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass?: string;
}> = ({ title, description, icon, iconBgClass }) => (
  <div className="bg-white dark:bg-slate-800/70 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 transform hover:-translate-y-1">
    <div
      className={`
      w-16 h-16 mb-6 rounded-lg 
      flex items-center justify-center 
      text-white shadow-md
      ${iconBgClass || "bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700"} 
    `}>
      {React.cloneElement(icon as React.ReactElement, { size: 32, strokeWidth: 2 })}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">{title}</h3>
    <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default function BuyerBenefits() {
  const benefits = [
    {
      title: "Price Stability & Predictability",
      description: "Secure fixed energy rates through direct P2P agreements, shielding your business from volatile market fluctuations and enabling better financial planning.",
      icon: <ShieldCheck />,
      iconBgClass: "bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700",
    },
    {
      title: "Enhanced Sustainability Profile",
      description: "Directly source 100% local, renewable energy. Tangibly boost your CSR credentials and meet stakeholder expectations for environmental responsibility.",
      icon: <Leaf />,
      iconBgClass: "bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700",
    },
    {
      title: "Optimized Energy Procurement",
      description: "Streamline your green energy sourcing with FLUXECO's transparent platform, reducing administrative overhead and complexity.",
      icon: <Zap />,
      iconBgClass: "bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700",
    },
    {
      title: "Support Local & Build Reputation",
      description: "Partner with local solar producers, contribute to Flanders' energy independence, and strengthen your company's community ties and brand image.",
      icon: <Award />, // Award icon for reputation/community
      iconBgClass: "bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700",
    },
  ];

  return (
    <section className="section-padding container-padding bg-slate-100 dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block p-3 mb-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
        <h2 className="h2-text text-slate-900 dark:text-slate-50">Unlock Strategic Advantages with FLUXECO</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">Choosing FLUXECO for your business's energy needs delivers more than just power; it provides a suite of benefits for your bottom line and brand.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} icon={benefit.icon} iconBgClass={benefit.iconBgClass} />
        ))}
      </div>
    </section>
  );
}
