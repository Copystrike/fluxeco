// src/components/sections/HowItWorksSummary.tsx
import { ArrowRightCircle, Check, Layers, Users, FileCog, Coins } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const Step: React.FC<{
  number: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  isLast?: boolean;
}> = ({ number, title, description, icon, isLast = false }) => (
  <li className="relative pl-16 pb-10 group">
    {/* Line Connector */}
    {!isLast && <div className="absolute left-[1.9rem] top-12 bottom-0 w-1 bg-[rgb(var(--primary-rgb))]/20 dark:bg-[rgb(var(--primary-rgb))]/30 transition-colors duration-300"></div>}

    {/* Step Number/Icon */}
    <div
      className={`absolute left-0 top-3 flex items-center justify-center w-16 h-16 rounded-full font-bold text-2xl
                    border-4 border-white dark:border-slate-900
                    bg-[rgb(var(--primary-rgb))] text-white
                    group-hover:scale-105 transition-transform duration-300 shadow-md`}>
      <span className="sr-only">Step {number}</span>
      {icon}
    </div>

    <div className="ml-4 pt-1">
      {/* Added pt-1 for better alignment with larger circle */}
      <h3 className="text-2xl font-semibold text-[rgb(var(--foreground))] mb-2 group-hover:text-[rgb(var(--primary-rgb))] transition-colors duration-300">{title}</h3>
      <p className="text-lg text-[rgb(var(--muted-foreground))] leading-relaxed">{description}</p>
    </div>
  </li>
);

export default function HowItWorksSummary() {
  return (
    <section className="section-padding container-padding bg-white dark:bg-slate-900">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="h2-text">
          Getting Started is <span className="text-[rgb(var(--primary-rgb))]">Simple & Swift</span>
        </h2>
        <p className="p-text mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">Joining FLUXECO and unlocking fair compensation for your solar energy is a straightforward process.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <ol>
          <Step number="1" icon={<Layers size={32} />} title="Define & Pool Energy" description="Energy buyers detail their green energy needs. FLUXECO creates an energy pool with an attractive fixed price for all parties." />
          <Step number="2" icon={<Users size={32} />} title="Producers Join & Commit" description="Solar owners join a company's energy pool. A minimum one-year commitment ensures stability and reliable supply." />
          <Step number="3" icon={<FileCog size={32} />} title="FLUXECO Handles Admin" description="Once a pool is filled, FLUXECO manages all Fluvius administration." />
          <Step number="4" icon={<Coins size={32} />} title="Transact & Earn" description="Fluvius provides data, FLUXECO invoices the buyer, and producers receive their earnings automatically. Simple and transparent." isLast={true} />
        </ol>
      </div>
      <div className="text-center mt-16">
        <Button size="lg" variant="outline" asChild className="border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-rgb))] hover:text-white dark:hover:text-white">
          <Link href="/how-it-works">See the Full Process</Link>
          <ArrowRightCircle size={22} className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
