// src/components/sections/producers/FinalCTAProducers.tsx
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function FinalCTAProducers() {
  return (
    <section className="section-padding container-padding bg-[rgb(var(--primary-rgb))] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="h2-text text-white">Ready to Maximize Your Solar Earnings?</h2>
        <p className="p-text mt-4 text-slate-100 dark:text-slate-200">Take the next step towards fair compensation for your green energy. Explore pools or get in touch with our team.</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="outline" className="bg-white text-[rgb(var(--primary-rgb))] hover:bg-slate-100 border-white hover:border-slate-100" asChild>
            <Link href="/pools">Explore Energy Pools</Link>
            {/* Assuming a /pools page will exist */}
          </Button>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            {/* A slightly different shade of green for secondary CTA on green background */}
            <Link href="/contact?subject=ProducerInquiry">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
