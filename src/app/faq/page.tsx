// src/app/faq/page.tsx
import type { Metadata } from "next";
import { ChevronDown, Link } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FLUXECO - veelgestelde vragen (faq)",
  description: "vind antwoorden op veelgestelde vragen over fluxeco, peer-to-peer energiehandel, deelnemen als producent of groene energie afnemen als bedrijf.",
};

// Accordion Item Component (Client Component for interactivity)
// We'll need to make this a client component if we want JS-based open/close.
// For a simple CSS-only accordion, we can use <details> and <summary>.
// Let's start with <details> for simplicity, can be enhanced later.

interface FAQItemProps {
  question: string;
  children: React.ReactNode; // Answer content
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  return (
    <details className="group border-b border-slate-200 dark:border-slate-700 py-4 last:border-b-0">
      <summary className="flex justify-between items-center font-semibold text-lg text-slate-800 dark:text-slate-100 cursor-pointer hover:text-[rgb(var(--primary-rgb))] dark:hover:text-[rgb(var(--primary-rgb))] list-none">
        {question}
        <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform duration-300" />
      </summary>
      <div className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed prose prose-sm dark:prose-invert max-w-none">{children}</div>
    </details>
  );
};

export default function FAQPage() {
  // Example FAQ data - expand this with real questions!
  const generalFAQs = [
    {
      q: "wat is fluxeco?",
      a: <p>fluxeco is een digitaal peer-to-peer (p2p) platform dat eigenaren van zonnepanelen en andere kleine energieproducenten in staat stelt hun overtollige energie rechtstreeks aan energie-intensieve bedrijven in vlaanderen te verkopen. we streven naar een eerlijkere, transparantere en duurzamere lokale energiemarkt.</p>,
    },
    {
      q: "is fluxeco beschikbaar in heel vlaanderen?",
      a: <p>ja, fluxeco is actief in vlaanderen en maakt gebruik van de digitale meterinfrastructuur en het fluvius-kader voor het delen van energie.</p>,
    },
  ];

  const producerFAQs = [
    {
      q: "wie kan energie verkopen via fluxeco?",
      a: (
        <p>
          elke eigenaar van zonnepanelen (particulieren of bedrijven) in vlaanderen met een digitale meter kan deelnemen, op voorwaarde dat energieopwekking niet hun primaire bedrijfsactiviteit is. u kunt ook niet tegelijkertijd deelnemen aan een andere regeling voor het delen van energie.{" "}
          <Link href="/for-producers" className="text-[rgb(var(--primary-rgb))] hover:underline">
            bekijk de criteria voor producenten.
          </Link>
        </p>
      ),
    },
    {
      q: "hoeveel kan ik verdienen met de verkoop van mijn overtollige energie?",
      a: (
        <p>
          fluxeco streeft ernaar prijzen te garanderen die aanzienlijk beter zijn dan de standaard teruglevertarieven. we geven voorbeeld berekeningen om de potentiële inkomsten te illustreren.{" "}
          <Link href="/for-producers#earnings-potential" className="text-[rgb(var(--primary-rgb))] hover:underline">
            bekijk het verdienpotentieel.
          </Link>
        </p>
      ),
    },
    {
      q: "is er een minimale commitment periode?",
      a: <p>ja, bij toetreding tot een energiepool verbinden producenten zich voor een minimumperiode van één jaar. dit zorgt voor stabiliteit en betrouwbaarheid voor zowel producenten als de bedrijven die de energie afnemen.</p>,
    },
  ];

  const buyerFAQs = [
    {
      q: "welke soorten bedrijven kunnen energie afnemen via fluxeco?",
      a: (
        <p>
          energie-intensieve bedrijven in vlaanderen die op zoek zijn naar lokale, groene energie en hun duurzaamheidsdoelen willen bereiken, zijn ideale partners. dit omvat datacenters, productiebedrijven, grote kantoren, enz.{" "}
          <Link href="/for-buyers" className="text-[rgb(var(--primary-rgb))] hover:underline">
            meer voor bedrijven.
          </Link>
        </p>
      ),
    },
    {
      q: "wat zijn de voordelen van energie afnemen via fluxeco?",
      a: (
        <p>
          bedrijven profiteren van toegang tot 100% lokale groene energie, prijsstabiliteit door vaste tarieven, verbeterde csr- en duurzaamheidsprofielen en een vereenvoudigd inkoopproces.{" "}
          <Link href="/for-buyers#buyer-benefits" className="text-[rgb(var(--primary-rgb))] hover:underline">
            bekijk de voordelen voor kopers.
          </Link>
        </p>
      ), // Assuming an ID for benefits
    },
    {
      q: "hoe wordt de prijs voor kopers bepaald?",
      a: (
        <p>
          fluxeco werkt samen met bedrijven om hun energiebehoeften en richtprijs te bepalen. vervolgens vormen we producentenpools met een overeengekomen vaste prijs per kwh. onze transparante kostenstructuur omvat de energiecomponent, netwerkkosten, belastingen en een platformvergoeding.{" "}
          <Link href="/for-buyers#buyer-costing" className="text-[rgb(var(--primary-rgb))] hover:underline">
            bekijk de prijzen voor kopers.
          </Link>
        </p>
      ),
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-700 dark:from-teal-700 dark:via-cyan-700 dark:to-sky-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          {/* Optional Icon for FAQ */}
          {/* <MessageCircleQuestion className="w-16 h-16 mx-auto mb-6 opacity-80" /> */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">veelgestelde vragen</h1>
          <p className="mt-6 text-lg sm:text-xl text-teal-100 dark:text-cyan-200">heeft u vragen over fluxeco? we hebben antwoorden verzameld op enkele van de meest voorkomende vragen van onze community.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-3xl mx-auto">
          {/* General FAQs */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">algemene vragen</h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              {generalFAQs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q}>
                  {faq.a}
                </FAQItem>
              ))}
            </div>
          </section>

          {/* Producer FAQs */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">voor energieproducenten</h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              {producerFAQs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q}>
                  {faq.a}
                </FAQItem>
              ))}
            </div>
          </section>

          {/* Buyer FAQs */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">voor energieafnemers</h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              {buyerFAQs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q}>
                  {faq.a}
                </FAQItem>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
