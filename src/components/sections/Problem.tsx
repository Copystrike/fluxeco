// src/components/sections/Problem.tsx
import { TrendingDown, CircleDollarSign, AlertOctagon, Ban } from 'lucide-react';
import React from 'react';

const ProblemRow: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSide: 'left' | 'right';
  iconBgColor: string;
  iconColor: string;
}> = ({ icon, title, description, imageSide, iconBgColor, iconColor }) => {
  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center py-2">
      <div className={`flex justify-center items-center ${imageOrder}`}>
        <div className={`p-4 rounded-full ${iconBgColor} ${iconColor} shadow-lg`}>
          {React.cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 40, strokeWidth: 1.5 })}
        </div>
      </div>
      <div className={`${textOrder}`}>
        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))] mb-2">{title}</h3>
        <p className="text-base text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function Problem() {
  const problems = [
    {
      title: "Verdwijnende zonnevoordelen",
      description: "Vroeger telde je meter terug als je stroom leverde. Nu niet meer, dus je voordeel is kleiner.",
      icon: <TrendingDown />,
      iconBgColor: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-500 dark:text-red-400"
    },
    {
      title: "Slechte teruglevertarieven",
      description: "Voor stroom die je teruglevert, krijg je weinig geld, soms moet je zelfs bijbetalen. Zonde van je zonnepanelen.",
      icon: <CircleDollarSign />,
      iconBgColor: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-500 dark:text-amber-400"
    },
    {
      title: "Netvergoeding boetes",
      description: "Gebruik je weinig van je eigen zonnestroom? Dan betaal je mogelijk meer voor het net, vooral op drukke momenten.",
      icon: <AlertOctagon />,
      iconBgColor: "bg-sky-100 dark:bg-sky-900/30",
      iconColor: "text-sky-500 dark:text-sky-400"
    },
    {
      title: "Beperkte markttoegang",
      description: "Als kleine producent is het lastig om je extra stroom voor een goede prijs te verkopen. Je zit vaak vast aan slechte deals.",
      icon: <Ban />,
      iconBgColor: "bg-slate-200 dark:bg-slate-700/30",
      iconColor: "text-slate-500 dark:text-slate-400"
    }
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="h2-text">
          De <span className="text-[rgb(var(--primary-rgb))]">uitdagingen</span> waarmee u geconfronteerd wordt
        </h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Navigeren door het nieuwe energielandschap kan lastig zijn. Wij begrijpen de hindernissen.
        </p>
      </div>
      <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
        {problems.map((problem, index) => (
          <ProblemRow
            key={problem.title}
            {...problem}
            imageSide={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}