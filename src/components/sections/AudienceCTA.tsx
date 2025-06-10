// src/components/sections/AudienceCTA.tsx
import Button from '@/components/ui/Button'; // Assuming @ alias
import Link from 'next/link';

export default function AudienceCTA() {
  return (
    <section className="section-padding container-padding text-center">
      <h2 className="h2-text">Bent u een...</h2>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/for-producers">Eigenaar van zonnepanelen?</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <Link href="/for-consumers">Bedrijf zoek naar groene energie?</Link>
        </Button>
      </div>
    </section>
  );
}