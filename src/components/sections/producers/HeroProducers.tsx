// src/components/sections/producers/HeroProducers.tsx
import Button from '@/components/ui/Button';
import Link from 'next/link';
// import Image from 'next/image'; // Consider adding a relevant background or side image

export default function HeroProducers() {
  return (
    // Consider a subtle background pattern or image related to solar/green energy
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-slate-900 dark:via-gray-800 dark:to-slate-800">
      <div className="container-padding section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-[rgb(var(--foreground))] sm:text-5xl lg:text-6xl">
            Stop met Uw Zonne-energie Weg te Geven.
            <span className="block text-[rgb(var(--primary-rgb))] mt-2">Verdien Wat Het Echt Waard Is.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[rgb(var(--muted-foreground))]">
            uw zonnepanelen zijn veel waard. fluxeco helpt u er het maximale uit te halen. wij brengen u direct in contact met bedrijven die uw groene stroomoverschot willen kopen. zo krijgt u een eerlijke prijs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#earnings-potential">bekijk uw potentiële inkomsten</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))] hover:bg-green-50 dark:hover:bg-slate-700/50 shadow-md hover:shadow-lg transition-shadow">
              <Link href="#how-to-join-producers">Hoe Deelnemen</Link>
            </Button>
          </div>
        </div>
        {/* Optional: Add a subtle visual element below the CTA, like a gentle wave or a row of small icons */}
      </div>
    </section>
  );
}