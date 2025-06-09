// src/components/navigation/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[rgb(var(--card-background-rgb))] border-t border-[rgb(var(--card-border-rgb))]">
      <div className="max-w-7xl mx-auto container-padding py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[rgb(var(--primary-rgb))] mb-3">FLUXECO</h3>
            <p className="text-sm text-[rgb(var(--muted-foreground-rgb))]">
              Earn what your solar energy is really worth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for-producers" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">For Producers</Link></li>
              <li><Link href="/for-consumers" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">For Consumers</Link></li>
              <li><Link href="/how-it-works" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">How It Works</Link></li>
              <li><Link href="/faq" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[rgb(var(--card-border-rgb))] pt-8 text-center">
          <p className="text-sm text-[rgb(var(--muted-foreground-rgb))]">
            © {currentYear} FLUXECO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}