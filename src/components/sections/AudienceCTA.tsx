// src/components/sections/AudienceCTA.tsx
import Button from '@/components/ui/Button'; // Assuming @ alias
import Link from 'next/link';

export default function AudienceCTA() {
  return (
    <section className="section-padding container-padding text-center">
      <h2 className="h2-text">Are you a...</h2>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/for-producers">Solar Panel Owner?</Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <Link href="/for-consumers">Business or Household Looking for Green Energy?</Link>
        </Button>
      </div>
    </section>
  );
}