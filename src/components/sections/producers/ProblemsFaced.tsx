import React from 'react';
import { TrendingDown, Wind, FileWarning, Ban } from 'lucide-react';

const ProblemItem: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor?: string;
}> = ({ title, description, icon, iconBgColor = 'bg-red-500 dark:bg-red-600' }) => {
  return (
    // Each problem is a self-contained block, but not an overly styled "card"
    <div className="py-8 px-6 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
        <div className={`flex-shrink-0 w-16 h-16 text-white rounded-lg inline-flex items-center justify-center shadow-md ${iconBgColor}`}>
          {React.cloneElement(icon as React.ReactElement<any, any>, { size: 32 })}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--foreground))]">{title}</h3>
          <p className="text-md text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ProblemsFaced() {
  const problems = [
    { title: "Voordeel Terugdraaiende Teller Stopt", description: "nu de terugdraaiende teller stopt, wordt uw extra energie niet meer op dezelfde manier van uw rekening afgetrokken.", icon: <TrendingDown />, iconBgColor: "bg-orange-500 dark:bg-orange-600" },
    { title: "Lage Prijs voor Terugleveren", description: "de prijs die u krijgt voor zonnestroom die u op het net zet, is vaak erg laag. soms moet u zelfs bijbetalen ('terugleverboetes').", icon: <FileWarning />, iconBgColor: "bg-red-500 dark:bg-red-600" },
    { title: "Nadelen Capaciteitstarief", description: "als u weinig eigen stroom verbruikt, kunnen uw netkosten stijgen door het capaciteitstarief voor piekverbruik.", icon: <Wind />, iconBgColor: "bg-sky-500 dark:bg-sky-600" },
    { title: "Weinig Keus om te Verkopen", description: "als kleine producent is het moeilijk om een goede en eerlijke prijs te krijgen voor uw waardevolle groene stroom.", icon: <Ban />, iconBgColor: "bg-slate-500 dark:bg-slate-600" }
  ];

  return (
    <section className="section-padding container-padding bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="h2-text">herkent u deze nadelen van zonnepanelen?</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">
          als u zonnepanelen heeft in vlaanderen, klinken deze problemen vast bekend. u bent niet de enige.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {problems.map((problem) => (
          <ProblemItem
            key={problem.title}
            title={problem.title}
            description={problem.description}
            icon={problem.icon}
            iconBgColor={problem.iconBgColor}
          />
        ))}
      </div>
    </section>
  );
}