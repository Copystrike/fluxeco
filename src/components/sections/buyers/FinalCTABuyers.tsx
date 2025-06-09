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
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Ready to Power Your Business Sustainably?</h2>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 dark:text-indigo-200">Let FLUXECO be your trusted partner in achieving your green energy goals. Our team is ready to discuss your specific requirements and tailor a solution that fits your business.</p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-indigo-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-3.5">
              <Link href="/contact?subject=BuyerConsultationRequest&utm_source=for_buyers_page_cta">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-3.5">
              <Link href="/learn-more/business-solutions">
                {" "}
                {/* Example link */}
                Learn More About Our Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
