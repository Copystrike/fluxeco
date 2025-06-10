// src/components/sections/buyers/FinalCTABuyers.tsx
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Building, MessageSquareQuote } from "lucide-react"; // Example Icons

export default function FinalCTABuyers() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-900 text-white">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Building className="w-12 h-12 opacity-70" />
            <MessageSquareQuote className="w-12 h-12 opacity-70" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">klaar om uw bedrijf duurzaam van stroom te voorzien?</h2>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 dark:text-indigo-200">laat fluxeco uw vertrouwde partner zijn bij het behalen van uw groene energiedoelen. ons team staat klaar om uw specifieke vereisten te bespreken en een oplossing op maat te maken die bij uw bedrijf past.</p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-indigo-700! hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-3.5">
              <Link href="/contact?subject=BuyerConsultationRequest&utm_source=for_buyers_page_cta">vraag een consult aan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
