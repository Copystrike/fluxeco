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
          {React.cloneElement(icon as React.ReactElement, { size: 32 })}
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
    { title: "Vanishing Meter Advantage", description: "The end of the reversing meter means your surplus energy no longer directly offsets your consumption at the same rate.", icon: <TrendingDown />, iconBgColor: "bg-orange-500 dark:bg-orange-600" },
    { title: "Low Feed-in Tariffs", description: "Standard compensation for your injected solar power is often disappointingly low, sometimes even negative ('terugleverboetes').", icon: <FileWarning />, iconBgColor: "bg-red-500 dark:bg-red-600" },
    { title: "Capacity Tariff Penalties", description: "Low self-consumption can unexpectedly increase your grid fees due to the capacity tariff on peak usage.", icon: <Wind />, iconBgColor: "bg-sky-500 dark:bg-sky-600" },
    { title: "Limited Selling Options", description: "As a small producer, finding a fair market and a good price for your valuable green energy is a significant challenge.", icon: <Ban />, iconBgColor: "bg-slate-500 dark:bg-slate-600" }
  ];

  return (
    <section className="section-padding container-padding bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="h2-text">Recognize These Solar Frustrations?</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">
          If you're a solar panel owner in Flanders, these challenges probably sound all too familiar. You're not alone.
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