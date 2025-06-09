// src/components/sections/FinalCTA.tsx
import Button from '@/components/ui/Button'; // Assuming @ alias
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="section-padding container-padding bg-[rgb(var(--primary-rgb))] text-center">
      <h2 className="h2-text text-white">Ready to Join FLUXECO?</h2>
      <p className="p-text mt-4 text-slate-200">Start benefiting from fair energy trading today.</p>
      <div className="mt-8">
        <Button asChild variant="outline" size="lg" className="bg-white text-[rgb(var(--primary-rgb))] hover:bg-slate-100">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}