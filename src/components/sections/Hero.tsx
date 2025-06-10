// src/components/sections/Hero.tsx
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image"; // If you have an illustration

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-sky-50 to-white dark:from-slate-900 dark:via-gray-800 dark:to-slate-800">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-[rgb(var(--foreground))] sm:text-5xl lg:text-6xl">
              <span className="block">Ontgrendel de ware waarde</span>
              <span className="block text-[rgb(var(--primary-rgb))] mt-1 sm:mt-2">van uw zonne-energie</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[rgb(var(--muted-foreground))] max-w-xl mx-auto md:mx-0">FLUXECO stelt u in staat uw overtollige zonne-energie rechtstreeks aan bedrijven te verkopen tegen eerlijke prijzen. Sluit u aan bij de peer-to-peer revolutie en laat uw groene energie harder voor u werken.</p>
            <div className="mt-10 flex flex-col gap-4 sm:items-start">
              <Button asChild size="lg" variant="secondary" className="text-[rgb(var(--primary-rgb))] hover:bg-slate-100">
                <Link href="/dashboard">Ga naar Dashboard</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-[rgb(var(--muted-foreground))]">Verdien wat uw zonne-energie echt waard is.</p>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="hidden md:block">
            <div className="image-content phone-mockup-wrapper">
              <div className="phone-mockup" style={{ position: "relative", width: 300, height: 600 }}>
                <Image src="/phone-mockup.png" alt="Telefoonhouder" width={300} height={600} className="phone-mockup-img" draggable={false} style={{ display: "block", width: "100%", height: "auto", pointerEvents: "none", userSelect: "none" }} />
                <video
                  src="/Screen_Recording_20250610_122329_Chrome.mp4"
                  width={252}
                  height={537}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "23px",
                    borderRadius: "24px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                    zIndex: 2,
                    background: "#000",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
