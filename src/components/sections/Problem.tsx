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
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8">
      <div className={`flex justify-center items-center ${imageOrder}`}>
        <div className={`p-5 rounded-full ${iconBgColor} ${iconColor} shadow-lg`}>
          {React.cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 48, strokeWidth: 1.5 })}
        </div>
      </div>
      <div className={`${textOrder}`}>
        <h3 className="text-2xl font-semibold text-[rgb(var(--foreground))] mb-3">{title}</h3>
        <p className="text-lg text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function Problem() {
  const problems = [
    {
      title: "Vanishing Solar Benefits",
      description: "The abolition of the reversing meter means separate metering for consumption and injection, diminishing the previous advantages.",
      icon: <TrendingDown />,
      iconBgColor: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-500 dark:text-red-400"
    },
    {
      title: "Poor Feed-in Tariffs",
      description: "Injected electricity often receives low or even negative compensation ('feed-in penalties'), making solar less profitable.",
      icon: <CircleDollarSign />,
      iconBgColor: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-500 dark:text-amber-400"
    },
    {
      title: "Grid Fee Penalties",
      description: "Low self-consumption can lead to higher capacity tariffs, disproportionately affecting solar owners during peak offtake.",
      icon: <AlertOctagon />,
      iconBgColor: "bg-sky-100 dark:bg-sky-900/30",
      iconColor: "text-sky-500 dark:text-sky-400"
    },
    {
      title: "Limited Market Access",
      description: "Small producers struggle to sell their valuable surplus energy fairly, often locked into unfavorable terms.",
      icon: <Ban />,
      iconBgColor: "bg-slate-200 dark:bg-slate-700/30",
      iconColor: "text-slate-500 dark:text-slate-400"
    }
  ];

  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="h2-text">
          The <span className="text-[rgb(var(--primary-rgb))]">Challenges</span> You Face
        </h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Navigating the new energy landscape can be tough. We understand the hurdles.
        </p>
      </div>
      <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
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