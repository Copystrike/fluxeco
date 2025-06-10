// src/components/sections/producers/FinalCTAProducers.tsx
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function FinalCTAProducers() {
  return (
    <section className="section-padding container-padding bg-[rgb(var(--primary-rgb))] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="h2-text text-white">Klaar om Meer te Verdienen met Uw Zonnepanelen?</h2>
        <p className="p-text mt-4 text-slate-100 dark:text-slate-200">Zet de volgende stap naar een eerlijke prijs voor uw groene energie. Bekijk de energiegemeenschappen of praat met ons team.</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4"> 
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            {/* A slightly different shade of green for secondary CTA on green background */}
            <Link href="/contact?subject=ProducerAanvraag">Neem Contact Op</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
