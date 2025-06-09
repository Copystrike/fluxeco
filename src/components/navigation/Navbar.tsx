// src/components/navigation/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-[rgb(var(--card-border-rgb))]">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[rgb(var(--primary-rgb))]">
              FLUXECO
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/for-producers" className="text-foreground hover:text-[rgb(var(--primary-rgb))] transition-colors">
              For Producers
            </Link>
            <Link href="/for-consumers" className="text-foreground hover:text-[rgb(var(--primary-rgb))] transition-colors">
              For Consumers
            </Link>
            <Link href="/how-it-works" className="text-foreground hover:text-[rgb(var(--primary-rgb))] transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-[rgb(var(--primary-rgb))] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white bg-[rgb(var(--primary-rgb))] rounded-md hover:bg-[rgb(var(--primary-hover-rgb))] transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - to be implemented later */}
            <button className="text-foreground p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}