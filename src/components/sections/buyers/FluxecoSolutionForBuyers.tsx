// src/components/sections/buyers/FluxecoSolutionForBuyers.tsx
import Image from "next/image";
// Use lucide-react icons instead of heroicons
import { Network, BadgeCheck, PieChart, Zap } from "lucide-react";

const SolutionPoint: React.FC<{
  title: string;
  description: string;
  imageUrl?: string; // Path to your image/illustration
  imageAlt?: string;
  reverse?: boolean;
  icon?: React.ReactNode; // Alternative to imageUrl for simpler visuals
}> = ({ title, description, imageUrl, imageAlt, reverse, icon }) => (
  <div className={`py-10 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:direction-rtl" : ""}`}>
    {" "}
    {/* direction-rtl for reversing columns */}
    <div className={`text-center md:text-left ${reverse ? "md:text-right md:order-last" : ""}`}>
      <h3 className="text-3xl font-bold tracking-tight text-sky-700 dark:text-sky-400 mb-4 sm:text-4xl">{title}</h3>
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{description}</p>
      {/* Optional: Add a small list of sub-benefits or a button here */}
    </div>
    <div className={`mt-8 md:mt-0 flex justify-center items-center ${reverse ? "md:order-first" : ""}`}>
      {imageUrl ? (
        <div className="aspect-[4/3] w-full max-w-md bg-slate-200 dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden">
          <Image src={imageUrl} alt={imageAlt || title} width={500} height={375} className="object-cover w-full h-full" />
        </div>
      ) : icon ? (
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-700 dark:to-blue-800 text-sky-600 dark:text-sky-300 rounded-2xl flex items-center justify-center shadow-lg">{icon}</div>
      ) : (
        <div className="aspect-[4/3] w-full max-w-md bg-slate-200 dark:bg-slate-700 rounded-xl shadow-xl flex items-center justify-center">
          <p className="text-slate-500">Illustration Area</p>
        </div>
      )}
    </div>
  </div>
);

export default function FluxecoSolutionForBuyers() {
  const solutions = [
    {
      title: "Direct Access to Local Green Energy",
      description: "FLUXECO provides a dedicated marketplace connecting you to a growing network of verified local solar producers. Secure genuine renewable energy and support your community.",
      // imageUrl: "/images/buyer-solution-network.jpg", // Replace with your actual image
      icon: <Network size={80} strokeWidth={1.5} />,
    },
    {
      title: "Simplified Sustainability & ESG Reporting",
      description: "Meet your environmental targets with ease. We provide transparent tracking and documentation of your green energy procurement, simplifying your ESG reporting.",
      // imageUrl: "/images/buyer-solution-esg.jpg",
      icon: <BadgeCheck size={80} strokeWidth={1.5} />,
    },
    {
      title: "Predictable Pricing & Budget Control",
      description: "Move away from volatile energy markets. FLUXECO facilitates fixed-price agreements with producer pools, giving you greater control over your energy expenditure.",
      // imageUrl: "/images/buyer-solution-pricing.jpg",
      icon: <PieChart size={80} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900/70">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block p-3 mb-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg">
          <Zap size={40} className="text-white" />
        </div>
        <h2 className="h2-text text-slate-900 dark:text-slate-50">The FLUXECO Solution for Businesses</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">We empower your business with a smarter, more sustainable, and cost-effective approach to energy procurement.</p>
      </div>
      <div className="max-w-6xl mx-auto divide-y divide-slate-200 dark:divide-slate-700/50">
        {solutions.map((solution, index) => (
          <SolutionPoint key={solution.title} title={solution.title} description={solution.description} imageUrl={solution.imageUrl} icon={solution.icon} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
