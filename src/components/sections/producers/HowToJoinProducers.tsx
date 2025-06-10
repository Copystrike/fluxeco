// src/components/sections/producers/HowToJoinProducers.tsx
import { CheckCircle2, UserPlus, FileText, Settings, Zap } from "lucide-react";

const Step: React.FC<{ number: string | number; title: string; description: string; icon: React.ReactNode; }> = ({ number, title, description, icon }) => (
  <div className="flex flex-col bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg h-full">
    <div className="flex items-center mb-4">
      <span className="h-12 w-12 rounded-full bg-[rgb(var(--primary-rgb))] text-white flex items-center justify-center ring-4 ring-white dark:ring-slate-900 mr-4 shrink-0">{icon}</span>
      <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">
        {number}. {title}
      </h3>
    </div>
    <p className="text-sm text-[rgb(var(--muted-foreground))] flex-grow">{description}</p>
  </div>
);

export default function HowToJoinProducers() {
  const steps = [
    {
      title: "Connecteer",
      description: "Koppel uw digitale meter aan het Fluxeco netwerk. Veilig en eenvoudig.",
      icon: <Settings size={20} />,
    },
    {
      title: "Match & Verkoop",
      description: "Bedrijven kopen uw groene stroom rechtstreeks via ons platform.",
      icon: <UserPlus size={20} />,
    },
    {
      title: "Verdien Eerlijk",
      description: "U ontvangt een veel betere prijs dan de traditionele terugleververgoeding.",
      icon: <Zap size={20} />,
    },
  ];

  return (
    <section id="how-to-join-producers" className="section-padding container-padding">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="h2-text">Starten in 3 Eenvoudige Stappen</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">Koppel uw meter, match met kopers en verdien een eerlijke prijs voor uw zonne-energie.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <Step key={index} number={index + 1} title={step.title} description={step.description} icon={step.icon} />
        ))}
      </div>
    </section>
  );
}
