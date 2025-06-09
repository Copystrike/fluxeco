// src/components/sections/buyers/HowItWorksForBuyers.tsx
import { FileText, Users, Handshake, Zap } from "lucide-react"; // Example icons
import React from "react";

const StepItem: React.FC<{
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}> = ({ stepNumber, title, description, icon, isLast }) => (
  <li className="relative md:flex md:gap-8 pb-8">
    {/* Desktop: Step number and line */}
    <div className="hidden md:flex flex-col items-center">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 dark:bg-sky-500 text-white flex items-center justify-center text-xl font-bold shadow-md">{stepNumber}</div>
      {!isLast && <div className="mt-2 w-px h-full bg-sky-200 dark:bg-sky-700 flex-grow" style={{ minHeight: "3rem" }} />}
    </div>

    {/* Mobile: Icon first */}
    <div className="md:hidden flex items-center mb-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-700 text-sky-600 dark:text-sky-300 flex items-center justify-center mr-3">{React.cloneElement(icon as React.ReactElement, { size: 24 })}</div>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
        {stepNumber}. {title}
      </h3>
    </div>

    {/* Content for both */}
    <div className="flex-1 md:pt-1">
      <h3 className="hidden md:block text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed pl-0 md:pl-0">
        {" "}
        {/* Adjusted padding */}
        {description}
      </p>
    </div>
    {/* Desktop: Icon to the side */}
    <div className="hidden md:block absolute left-0 top-1 -translate-x-[calc(100%+1.5rem)] text-sky-500 dark:text-sky-400 opacity-75">{React.cloneElement(icon as React.ReactElement, { size: 30, strokeWidth: 1.5 })}</div>
  </li>
);

export default function HowItWorksForBuyers() {
  const steps = [
    {
      title: "Define Your Green Energy Needs",
      description: "Tell us your required energy volume, contract duration, and ideal price. We'll work to match your specifications.",
      icon: <FileText />,
    },
    {
      title: "FLUXECO Forms Producer Pools",
      description: "We identify and group local solar producers whose collective surplus can meet your demand at a stable, pre-agreed price.",
      icon: <Users />,
    },
    {
      title: "Simple Agreement & Setup",
      description: "Once a pool is formed, we facilitate a straightforward agreement. FLUXECO handles the Fluvius administration for energy sharing.",
      icon: <Handshake />,
    },
    {
      title: "Receive Green Energy & Clear Billing",
      description: "Your business starts receiving locally sourced renewable energy. FLUXECO provides transparent, consolidated billing based on actual consumption from the pool.",
      icon: <Zap />,
    },
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900/70">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block p-3 mb-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg">
          <Handshake className="w-10 h-10 text-white" />
        </div>
        <h2 className="h2-text text-slate-900 dark:text-slate-50">Our Streamlined Process for Buyers</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">Partnering with FLUXECO is designed to be efficient and transparent, getting you access to local green energy with minimal hassle.</p>
      </div>
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <ol className="list-none relative">
          {" "}
          {/* Added relative for absolute positioned icons if needed later */}
          {steps.map((step, index) => (
            <StepItem key={step.title} stepNumber={(index + 1).toString()} title={step.title} description={step.description} icon={step.icon} isLast={index === steps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
