// src/app/how-it-works/page.tsx
import type { Metadata } from "next";
import Image from "next/image"; // For the diagram

export const metadata: Metadata = {
  title: "How FLUXECO Works - Step-by-Step Energy Trading",
  description: "Understand the simple and transparent process of buying and selling local solar energy through the FLUXECO peer-to-peer platform.",
};

// We'll create specific components for this page or adapt generic ones.
// For now, let's outline the content directly in the page.

const StepCard: React.FC<{
  stepNumber: string;
  title: string;
  description: string;
  image?: string; // Optional image for a step
  details?: string[];
  bgColor?: string;
}> = ({ stepNumber, title, description, image, details, bgColor = "bg-white dark:bg-slate-800" }) => (
  <div className={`p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 ${bgColor}`}>
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgb(var(--primary-rgb))] text-white flex items-center justify-center text-xl font-bold mr-4 shadow-md">{stepNumber}</div>
      <h3 className="text-xl sm:text-2xl font-semibold text-[rgb(var(--primary-rgb))]">{title}</h3>
    </div>
    <p className="text-md sm:text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
    {image && (
      <div className="my-6 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-600">
        <Image src={image} alt={title} width={800} height={400} layout="responsive" className="bg-slate-100 dark:bg-slate-700" />
      </div>
    )}
    {details && details.length > 0 && (
      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 pl-1">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

export default function HowItWorksPage() {
  const stappenplan = [
    {
      step: "1",
      title: "Matching Supply & Demand",
      description: "Businesses (energy buyers) indicate their green energy requirements and desired price range via FLUXECO. FLUXECO then negotiates terms and creates an 'energy pool' on the platform at a fixed, attractive price for both parties.",
      details: ["Buyer specifies volume (kWh), period, and target price.", "FLUXECO facilitates negotiation and pool setup."],
    },
    {
      step: "2",
      title: "Producers Join Energy Pools",
      description: "Solar panel owners (energy producers) browse available energy pools and choose to join one, committing a certain amount of their surplus kWh. Pools fill dynamically until the buyer's required volume is met. A minimum one-year commitment ensures stability.",
      details: ["Producers select a pool via the platform.", "Commitment is for a minimum of 1 year.", "Pool 'fill level' is visible on the platform."],
    },
    {
      step: "3",
      title: "Activate 'Meetregime 3'",
      description: "Once a pool has sufficient participants, FLUXECO initiates the administrative process. For producers, this involves activating 'Meetregime 3' (energy sharing mode). FLUXECO provides instructions or contacts the producer's energy supplier. Producers grant consent for data processing via Mijn Fluvius.",
      details: ["FLUXECO sends instructions or liaises with energy suppliers.", "Producers provide consent via Mijn Fluvius."],
    },
    {
      step: "4",
      title: "Administrative Registration by FLUXECO",
      description: "FLUXECO registers the newly formed energy community (for multi-person P2P sales) in Mijn Fluvius. EAN numbers of the participating producer(s) and the buying company are added to the energy pool. Fluvius automatically requests final digital consent from all parties via email or Mijn Fluvius.",
      details: ["FLUXECO registers community in Mijn Fluvius.", "EAN numbers are linked to the pool.", "Fluvius seeks final digital consent."],
    },
    {
      step: "5",
      title: "Activation & Energy Flow",
      description: "Once all parties give their consent and 'Meetregime 3' is active, Fluvius activates the energy community. FLUXECO then gains access to quarterly meter data (injection and offtake) for accurate tracking and billing.",
      details: ["Fluvius activates the energy community.", "FLUXECO receives 15-minute interval data."],
    },
    {
      step: "6",
      title: "Monthly Processing & Settlement",
      description: "Fluvius provides the necessary energy data. FLUXECO calculates how much energy each producer has supplied to the pool/buyer. FLUXECO then invoices the buying company and automatically distributes the earnings to the participating producers, after deducting any applicable commissions or costs.",
      details: ["Fluvius delivers data.", "FLUXECO calculates individual contributions.", "FLUXECO invoices buyer and pays producers."],
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-700 dark:to-cyan-600 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">How FLUXECO Works</h1>
          <p className="mt-6 text-lg sm:text-xl text-sky-100 dark:text-cyan-200">Discover the seamless, step-by-step process of our peer-to-peer energy trading platform – connecting green energy producers with businesses.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-4xl mx-auto">

          {/* Section for the Step-by-Step Process */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10 md:mb-12 text-slate-800 dark:text-slate-100">Our Step-by-Step Process</h2>
            <div className="space-y-8 md:space-y-10">
              {stappenplan.map((item) => (
                <StepCard key={item.step} stepNumber={item.step} title={item.title} description={item.description} details={item.details} />
              ))}
            </div>
          </section>

          {/* Optional: Section for "Overzicht bedrijfsprocessen FLUXECO" Table */}
          {/* This table is quite detailed; might be better as a collapsible section or a link to a PDF if too long for this page */}
          <section className="mt-16 md:mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-slate-800 dark:text-slate-100">Key Roles & Responsibilities</h2>
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 text-sm">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                FLUXECO manages the platform, facilitates pool creation, handles administrative registration with Fluvius (with your consent), processes energy data, and manages billing and payouts. Producers and Buyers actively participate by joining pools, providing necessary information and consents. Fluvius acts as the grid operator, manages metering data, and enables the
                technical aspects of energy sharing.
              </p>
              {/* For a more detailed table, you could use a proper HTML table or a series of definition lists here */}
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-100">Examples of Process Ownership:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                  <li>
                    <strong>Negotiation & Pool Setup:</strong> FLUXECO + Buyer
                  </li>
                  <li>
                    <strong>Meetregime 3 Activation:</strong> Producer + Supplier (guided by FLUXECO)
                  </li>
                  <li>
                    <strong>Community Registration:</strong> FLUXECO
                  </li>
                  <li>
                    <strong>Data Collection:</strong> Fluvius
                  </li>
                  <li>
                    <strong>Billing & Payouts:</strong> FLUXECO
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
