// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { TrendingUp, DollarSign, Users, Building } from "lucide-react"; // Example Icons

export const metadata: Metadata = {
  title: "FLUXECO Prijzen - Eerlijke Waarde voor Producenten & Kopers",
  description: "Begrijp de transparante prijzen van FLUXECO voor het verkopen van uw zonne-overschot en het aankopen van lokale groene energie voor uw bedrijf.",
};

const PricingCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
  bgColorClass?: string;
  textColorClass?: string;
  borderColorClass?: string;
}> = ({ title, subtitle, description, ctaText, ctaLink, icon, bgColorClass, textColorClass, borderColorClass }) => (
  <div
    className={`
    p-6 md:p-8 rounded-xl shadow-xl border-2 
    transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
    ${bgColorClass || "bg-white dark:bg-slate-800"}
    ${borderColorClass || "border-transparent"}
  `}>
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
      <div
        className={`
        flex-shrink-0 w-16 h-16 rounded-lg 
        flex items-center justify-center 
        ${bgColorClass ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"} 
        ${textColorClass || "text-slate-700 dark:text-slate-200"}
      `}>
        {icon}
      </div>
      <div>
        <h3 className={`text-sm font-semibold uppercase tracking-wider ${textColorClass || "text-slate-500 dark:text-slate-400"}`}>{subtitle}</h3>
        <h2 className={`text-2xl md:text-3xl font-bold mt-1 ${textColorClass || "text-slate-900 dark:text-slate-50"}`}>{title}</h2>
      </div>
    </div>
    <p className={`mb-8 leading-relaxed ${textColorClass || "text-slate-600 dark:text-slate-300"}`}>{description}</p>
    <Button asChild variant={bgColorClass ? "outline" : "primary"} size="lg" className={`w-full ${bgColorClass ? "border-white text-white hover:bg-white/10" : ""}`}>
      <Link href={ctaLink}>{ctaText}</Link>
    </Button>
  </div>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 dark:from-green-700 dark:via-emerald-700 dark:to-teal-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">FLUXECO Prijzen & Waarde</h1>
          <p className="mt-6 text-lg sm:text-xl text-green-100 dark:text-emerald-200">Transparant, eerlijk en ontworpen om iedereen in het lokale energie-ecosysteem te bevoordelen. Ontdek hoe FLUXECO waarde creëert voor zowel producenten van groene energie als vooruitstrevende bedrijven.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <PricingCard
              subtitle="Voor Energieproducenten"
              title="Optimaliseer Uw Zonne-inkomsten"
              description="Maak van uw zonne-overschot een belangrijke bron van inkomsten. FLUXECO verbindt u met kopers die eerlijke, marktconforme prijzen bieden, die de standaard teruglevertarieven ver overtreffen. Bekijk gedetailleerde voorbeelden en hoe u kunt beginnen."
              ctaText="Uitleg Inkomsten Producent"
              ctaLink="/for-producers#earnings-potential" // Link to specific section
              icon={<TrendingUp size={36} className="text-green-600 dark:text-green-400" />}
              bgColorClass="bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700"
              textColorClass="text-white"
              borderColorClass="border-green-400 dark:border-emerald-500"
            />
            <PricingCard
              subtitle="Voor Energiekopers"
              title="Voorspelbare Groene Energiekosten"
              description="Verzeker 100% lokale, hernieuwbare energie voor uw bedrijf tegen stabiele, transparante tarieven. FLUXECO vereenvoudigt de aankoop, helpt bij het behalen van ESG-doelstellingen en biedt bescherming tegen volatiele energiemarkten. Ontdek onze duidelijke kostenstructuur."
              ctaText="Details Prijzen Koper"
              ctaLink="/for-buyers#buyer-costing" // Link to specific section
              icon={<Building size={36} className="text-sky-600 dark:text-sky-400" />}
              bgColorClass="bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700"
              textColorClass="text-white"
              borderColorClass="border-sky-400 dark:border-blue-500"
            />
          </div>

          <div className="mt-16 md:mt-20 text-center max-w-3xl mx-auto p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <Users className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Eerlijkheid en Transparantie Centraal</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              FLUXECO zet zich in voor een duurzame energietoekomst voor Vlaanderen. Onze prijsmodellen zijn ontworpen om billijk te zijn, echte waarde te bieden aan zonneproducenten en bedrijven een betrouwbare en verantwoorde manier te bieden om groene energie aan te kopen. Wij geloven in duidelijke communicatie en ongecompliceerde partnerschappen.
            </p>
            <Button asChild variant="ghost" size="lg" className="mt-6 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-800/50">
              <Link href="/contact?subject=PricingInquiry">Heeft u vragen? Contacteer Ons</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
