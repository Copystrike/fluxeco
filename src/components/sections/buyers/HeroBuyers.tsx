// src/components/sections/buyers/HeroBuyers.tsx
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Zap, Leaf, TrendingUp } from "lucide-react";

export default function HeroBuyers() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-blue-800 to-indigo-900 dark:from-sky-800 dark:via-blue-900 dark:to-indigo-950 text-white">
      {/* Optional: Subtle background pattern or animated element */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Example: SVG pattern or a very subtle image */}
        {/* <img src="/patterns/tech-grid.svg" alt="" className="w-full h-full object-cover" /> */}
      </div>

      <div className="container-padding section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-sky-200 bg-white/10 rounded-full">Powering Sustainable Growth</div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] leading-tight">
            Secure Your Green Energy Future.
            <span className="block mt-2 text-sky-300 dark:text-sky-400">Stable Prices. Sustainable Impact.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-sky-100 dark:text-blue-200 max-w-2xl mx-auto">FLUXECO offers your business direct access to local, renewable energy from a network of trusted solar producers. Meet your ESG targets, ensure price predictability, and champion Flanders' energy transition.</p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-sky-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-3.5">
              <Link href="#buyer-costing">Explore Our Pricing</Link>
            </Button>
            <Button
              size="lg"
              variant="link" // Changed to link style for secondary action
              asChild
              className="text-sky-200 hover:text-white group text-base px-8 py-3.5">
              <Link href="/contact?subject=BuyerPartnershipInquiry">
                Request Consultation <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
