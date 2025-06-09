// src/components/sections/producers/HowToJoinProducers.tsx
import { CheckCircle2, UserPlus, FileText, Settings, Zap } from "lucide-react";

const Step: React.FC<{ number: string | number; title: string; description: string; icon: React.ReactNode; isLast?: boolean }> = ({ number, title, description, icon, isLast }) => (
  <li className="relative pb-8 md:pb-10">
    {!isLast && <div className="absolute top-5 left-5 -ml-px mt-0.5 h-full w-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />}
    <div className="relative flex items-start space-x-4">
      <div>
        <span className="h-10 w-10 rounded-full bg-[rgb(var(--primary-rgb))] text-white flex items-center justify-center ring-4 ring-white dark:ring-slate-800">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-[rgb(var(--foreground))]">
          {number}. {title}
        </h3>
        <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">{description}</p>
      </div>
    </div>
  </li>
);

export default function HowToJoinProducers() {
  const steps = [
    {
      title: "Explore Energy Pools",
      description: "Browse available energy pools on the FLUXECO platform. See which businesses are looking for green energy and at what price.",
      icon: <UserPlus size={20} />,
    },
    {
      title: "Choose & Commit",
      description: "Select a pool that suits you and commit your surplus kWh (minimum 1-year engagement). The pool fills dynamically.",
      icon: <FileText size={20} />,
    },
    {
      title: "Activate 'Meetregime 3'",
      description: "FLUXECO guides you or contacts your supplier to activate 'Meetregime 3'. You'll provide consent for data sharing via Mijn Fluvius.",
      icon: <Settings size={20} />,
    },
    {
      title: "FLUXECO Handles Registration",
      description: "We register the energy community and add your EAN number to the pool in Mijn Fluvius. Fluvius will request final digital consent.",
      icon: <CheckCircle2 size={20} />,
    },
    {
      title: "Start Selling & Earning",
      description: "Once active, your surplus energy flows to the buyer. FLUXECO processes quarterly data from Fluvius, invoices the buyer, and distributes your earnings.",
      icon: <Zap size={20} />,
    },
  ];

  return (
    <section id="how-to-join-producers" className="section-padding container-padding">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="h2-text">Joining FLUXECO is Easy</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">Follow these simple steps to start selling your solar surplus for a better price.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ol className="list-none">
          {steps.map((step, index) => (
            <Step key={index} number={index + 1} title={step.title} description={step.description} icon={step.icon} isLast={index === steps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}
