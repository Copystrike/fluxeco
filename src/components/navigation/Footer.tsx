// src/components/navigation/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[rgb(var(--card-background-rgb))] border-t border-[rgb(var(--card-border-rgb))]">
      <div className="max-w-7xl mx-auto container-padding py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[rgb(var(--primary-rgb))] mb-3">Fluxeco</h3>
            <p className="text-sm text-[rgb(var(--muted-foreground-rgb))]">
              Verdien Wat Je Zonne-Energie Echt Waard Is.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Snelle Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-producers" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">
                  Voor Producenten
                </Link>
              </li>
              <li>
                <Link href="/for-consumers" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">
                  Voor Consumenten
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">
                  Veelgestelde Vragen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Juridisch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cookies-beleid" className="text-[rgb(var(--muted-foreground-rgb))] hover:text-[rgb(var(--primary-rgb))]">
                  Cookiesbeleid
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[rgb(var(--card-border-rgb))] pt-8 text-center">
          <p className="text-sm text-[rgb(var(--muted-foreground-rgb))]">
            © {currentYear} Fluxeco. Alle Rechten Voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}