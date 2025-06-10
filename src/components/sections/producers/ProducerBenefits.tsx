// src/components/sections/producers/ProducerBenefits.tsx
import { TrendingUp, Users, ShieldPlus, Repeat, Leaf, Settings2, CheckCircle } from "lucide-react";
import React from "react";

const BenefitHighlight: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  iconContainerClass?: string;
}> = ({ title, description, icon, iconContainerClass }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6">
      <div className={["mb-6 flex-shrink-0 w-20 h-20 rounded-full inline-flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl", iconContainerClass || "bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700"].join(" ")}>
        {React.cloneElement(icon as React.ReactElement<any, any>, { size: 36, strokeWidth: 2 })}
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[rgb(var(--foreground))]">{title}</h3>
      <p className="text-md lg:text-lg text-[rgb(var(--muted-foreground))] leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default function ProducerBenefits() {
  const benefitsList = [
    {
      title: "Haal Meer Uit Uw Energie",
      description: "Krijg veel betere prijzen voor uw extra zonne-energie, die passen bij de markt. Geen lage teruglevertarieven meer.",
      icon: <TrendingUp />,
      iconContainerClass: "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 dark:from-yellow-500 dark:via-amber-600 dark:to-orange-600",
    },
    {
      title: "Kies Wie Uw Energie Koopt",
      description: "Kies zelf aan welke lokale bedrijven u wilt leveren uit de beschikbare energiegemeenschappen. Zo helpt u direct hun groene plannen.",
      icon: <Users />,
      iconContainerClass: "bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700",
    },
    {
      title: "Alles Simpel Geregeld",
      description: "FLUXECO en Fluvius regelen alle technische en administratieve zaken voor het energiedelen.",
      icon: <Settings2 />,
      // Default green gradient
    },
    {
      title: "Help Uw Buurt Groener Maken",
      description: "Help actief mee aan de energietransitie in Vlaanderen. Lever uw schone, groene energie aan bedrijven in de buurt.",
      icon: <Leaf />,
      iconContainerClass: "bg-gradient-to-br from-lime-500 to-emerald-600 dark:from-lime-600 dark:to-emerald-700",
    },
    {
      title: "Helemaal Duidelijk",
      description: "Ons platform maakt het verkopen van energie aan anderen (P2P) makkelijk. U ziet precies hoeveel u verkoopt en verdient op duidelijke dashboards.",
      icon: <CheckCircle />,
      // Default green gradient
    },
  ];

  return (
    <section className="section-padding container-padding bg-slate-50 dark:bg-slate-900/70">
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-block p-3 mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg">
          <Leaf className="w-10 h-10 text-white" />
        </div>
        <h2 className="h2-text">Het FLUXECO Voordeel: Meer dan Geld Alleen</h2>
        <p className="p-text mt-4 max-w-3xl mx-auto">Meedoen met FLUXECO is een slimme, eerlijke en goede manier om uw zonnepanelen te gebruiken. Goed voor u en voor de buurt.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-16 max-w-6xl mx-auto">
        {benefitsList.map((benefit) => (
          <BenefitHighlight key={benefit.title} title={benefit.title} description={benefit.description} icon={benefit.icon} iconContainerClass={benefit.iconContainerClass} />
        ))}
      </div>
    </section>
  );
}
