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
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-700 text-sky-600 dark:text-sky-300 flex items-center justify-center mr-3">{React.cloneElement(icon as React.ReactElement<any, any>, { size: 24 })}</div>
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
    <div className="hidden md:block absolute left-0 top-1 -translate-x-[calc(100%+1.5rem)] text-sky-500 dark:text-sky-400 opacity-75">{React.cloneElement(icon as React.ReactElement<any, any>, { size: 30, strokeWidth: 1.5 })}</div>
  </li>
);

export default function HowItWorksForBuyers() {
  const steps = [
    {
      title: "Bepaal uw groene energiebehoeften",
      description: "Vertel ons uw benodigde energievolume, contractduur en ideale prijs. Wij werken om aan uw specificaties te voldoen.",
      icon: <FileText />,
    },
    {
      title: "Fluxeco vormt producentenpools",
      description: "Wij identificeren en groeperen lokale zonneproducenten wier collectieve overschot aan uw vraag kan voldoen tegen een stabiele, vooraf overeengekomen prijs.",
      icon: <Users />,
    },
    {
      title: "Eenvoudige overeenkomst & installatie",
      description: "Zodra een pool is gevormd, faciliteren wij een eenvoudige overeenkomst. Fluxeco handelt de Fluvius-administratie af voor energiedelen.",
      icon: <Handshake />,
    },
    {
      title: "Ontvang groene energie & duidelijke facturering",
      description: "Uw bedrijf begint lokaal geproduceerde hernieuwbare energie te ontvangen. Fluxeco zorgt voor transparante, geconsolideerde facturering op basis van daadwerkelijk verbruik uit de pool.",
      icon: <Zap />,
    },
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900/70">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block p-3 mb-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg">
          <Handshake className="w-10 h-10 text-white" />
        </div>
        <h2 className="h2-text text-slate-900 dark:text-slate-50">Ons gestroomlijnde proces voor kopers</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">Samenwerken met Fluxeco is ontworpen om efficiënt en transparant te zijn, zodat u met minimale moeite toegang krijgt tot lokale groene energie.</p>
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
