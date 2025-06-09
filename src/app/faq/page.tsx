// src/app/faq/page.tsx
import type { Metadata } from "next";
import { ChevronDown, Link } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FLUXECO - Frequently Asked Questions (FAQ)",
  description: "Find answers to common questions about FLUXECO, peer-to-peer energy trading, joining as a producer, or sourcing green energy as a business.",
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
      q: "What is FLUXECO?",
      a: <p>FLUXECO is a digital peer-to-peer (P2P) platform that allows owners of solar panels and other small energy generators to sell their surplus energy directly to energy-intensive businesses in Flanders. We aim to create a fairer, more transparent, and sustainable local energy market.</p>,
    },
    {
      q: "How does peer-to-peer (P2P) energy trading work with FLUXECO?",
      a: (
        <p>
          FLUXECO facilitates direct energy sales between local producers and buyers. We group producers into 'virtual energy pools' to meet buyers' demands. Transactions are managed according to the official Fluvius model for multi-person P2P sales, ensuring legal and technical compliance.{" "}
          <Link href="/how-it-works" className="text-[rgb(var(--primary-rgb))] hover:underline">
            Learn more about our process.
          </Link>
        </p>
      ),
    },
    {
      q: "Is FLUXECO available throughout Flanders?",
      a: <p>Yes, FLUXECO operates within Flanders, leveraging the digital meter infrastructure and Fluvius's framework for energy sharing.</p>,
    },
  ];

  const producerFAQs = [
    {
      q: "Who can sell energy through FLUXECO?",
      a: (
        <p>
          Any solar panel owner (individuals or businesses) in Flanders with a digital meter can participate, provided energy generation is not their primary business activity. You also cannot be part of another energy sharing scheme simultaneously.{" "}
          <Link href="/for-producers" className="text-[rgb(var(--primary-rgb))] hover:underline">
            See criteria for producers.
          </Link>
        </p>
      ),
    },
    {
      q: "What is 'Meetregime 3' and why is it needed?",
      a: <p>'Meetregime 3' is an energy metering configuration required by Fluvius for energy sharing and P2P sales. It allows for separate measurement of your energy consumption, injection, and any energy shared/sold. FLUXECO assists in activating this for participating producers.</p>,
    },
    {
      q: "How much can I earn selling my surplus energy?",
      a: (
        <p>
          Earnings depend on the agreed price within the energy pool you join. FLUXECO aims to secure prices that are significantly better than standard feed-in tariffs. We provide example calculations to illustrate potential earnings.{" "}
          <Link href="/for-producers#earnings-potential" className="text-[rgb(var(--primary-rgb))] hover:underline">
            See earnings potential.
          </Link>
        </p>
      ),
    },
    {
      q: "Is there a minimum commitment period?",
      a: <p>Yes, when joining an energy pool, producers commit for a minimum period of one year. This ensures stability and reliability for both producers and the businesses purchasing the energy.</p>,
    },
  ];

  const buyerFAQs = [
    {
      q: "What types of businesses can buy energy through FLUXECO?",
      a: (
        <p>
          Energy-intensive businesses in Flanders looking to source local, green energy and meet their sustainability goals are ideal partners. This includes data centers, manufacturing plants, large offices, etc.{" "}
          <Link href="/for-buyers" className="text-[rgb(var(--primary-rgb))] hover:underline">
            More for businesses.
          </Link>
        </p>
      ),
    },
    {
      q: "What are the benefits of sourcing energy via FLUXECO?",
      a: (
        <p>
          Businesses benefit from access to 100% local green energy, price stability through fixed-rate pools, enhanced CSR and sustainability profiles, and a simplified procurement process.{" "}
          <Link href="/for-buyers#buyer-benefits" className="text-[rgb(var(--primary-rgb))] hover:underline">
            Explore buyer benefits.
          </Link>
        </p>
      ), // Assuming an ID for benefits
    },
    {
      q: "How is the price determined for buyers?",
      a: (
        <p>
          FLUXECO works with businesses to define their energy needs and target price. We then form producer pools with an agreed-upon fixed price per kWh. Our transparent cost structure includes the energy component, grid fees, taxes, and a platform fee.{" "}
          <Link href="/for-buyers#buyer-costing" className="text-[rgb(var(--primary-rgb))] hover:underline">
            View buyer pricing.
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
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg sm:text-xl text-teal-100 dark:text-cyan-200">Have questions about FLUXECO? We've compiled answers to some of the most common inquiries from our community.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-3xl mx-auto">
          {/* General FAQs */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">General Questions</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">For Energy Producers</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">For Energy Buyers</h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              {buyerFAQs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q}>
                  {faq.a}
                </FAQItem>
              ))}
            </div>
          </section>

          <div className="mt-16 text-center p-8 bg-sky-50 dark:bg-sky-800/30 rounded-lg border border-sky-200 dark:border-sky-700">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Can't find your question?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Our team is here to help. Please don't hesitate to reach out with any further inquiries.</p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact?subject=FAQFollowUp">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
