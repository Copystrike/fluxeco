// src/components/sections/Hero.tsx
import Button from '@/components/ui/Button';
import Link from 'next/link';
// import Image from 'next/image'; // If you have an illustration

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-sky-50 to-white dark:from-slate-900 dark:via-gray-800 dark:to-slate-800">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-[rgb(var(--foreground))] sm:text-5xl lg:text-6xl">
              <span className="block">Unlock the True Value</span>
              <span className="block text-[rgb(var(--primary-rgb))] mt-1 sm:mt-2">Of Your Solar Energy</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[rgb(var(--muted-foreground))] max-w-xl mx-auto md:mx-0">
              FLUXECO empowers you to sell your surplus solar energy directly to businesses at fair prices. Join the peer-to-peer revolution and make your green energy work harder for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="/for-producers">I'm a Producer</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/for-consumers">I'm a Consumer</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-[rgb(var(--muted-foreground))]">
              Transparent. Profitable. Sustainable.
            </p>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="hidden md:block">
            <div className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              {/* Replace with <Image src="/path/to/hero-illustration.svg" alt="FLUXECO Illustration" layout="fill" objectFit="cover" /> */}
              <p className="text-[rgb(var(--muted-foreground))]">Illustration / Image Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}