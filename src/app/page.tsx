import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <a href="#" className="logo">Fluxeco</a>
          <nav>
            <ul>
              <li><a href="/#problem">Probleem</a></li>
              <li><a href="/#solution">Oplossing</a></li>
              <li><a href="/#how-it-works">Hoe werkt het?</a></li>
              <li><a href="/#benefits">Voordelen</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <a href="https://dashboard.fluxeco.be" className="cta-button nav-cta">Start nu</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero cta">
          <div className="container">
            <h1>Stop met energie weggeven. <br />Verdien wat uw zonne-energie echt waard is.</h1>
            <p className="subtitle">Fluxeco verbindt uw energieoverschot direct met bedrijven die groene stroom nodig hebben. Krijg eindelijk een eerlijke prijs, dankzij ons slimme P2B-platform.</p>
            <a href="https://dashboard.fluxeco.be" className="cta-button hero-cta">Start nu</a>
            <div className="hero-image-wrapper w-full flex justify-center mt-12">
              <Image src="/placeholder-hero.png" alt="Illustratie van zonnepanelen die verbonden zijn met een bedrijf" width={700} height={400} />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="section">
          <div className="container text-center">
            <h2>De frustratie van de digitale meter</h2>
            <p>Zelf energie opwekken loont niet meer zoals vroeger sinds de digitale meter:</p>
            <div className="problem-points">
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-meter.png" alt="Icon meter" width={100} height={100} className="problem-icon" />
                <h3>Geen terugdraaiende teller</h3>
                <p>Overschotten worden niet meer verrekend met uw verbruik.</p>
              </div>
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-low-price.png" alt="Icon lage prijs" width={100} height={100} className="problem-icon" />
                <h3>Lage terugleververgoeding</h3>
                <p>U ontvangt vaak minder dan 5 cent/kWh, ver onder de marktprijs.</p>
              </div>
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-unfair.png" alt="Icon oneerlijk" width={100} height={100} className="problem-icon" />
                <h3>Oneerlijke markt</h3>
                <p>Grote spelers worden beloond, u wordt beboet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="section alt-bg">
          <div className="container split">
            <div className="text-content">
              <h2>De oplossing: Fluxeco - directe energiehandel</h2>
              <p>Fluxeco is een peer-to-business (P2B) energieplatform. Wij maken het mogelijk voor u (huishoudens en KMO's) om hun groene energieoverschotten rechtstreeks te verkopen aan energie-intensieve bedrijven die duurzaamheid zoeken.</p>
              <p><strong>Geen lage vergoedingen meer. Geen oneerlijke boetes.</strong> Wel een eerlijke prijs voor uw lokale, groene stroom, direct van producent naar verbruiker.</p>
              <a href="https://dashboard.fluxeco.be" className="cta-button">Begin vandaag</a>
            </div>
            <div className="image-content phone-mockup-wrapper">
              <div className="phone-mockup" style={{ position: "relative", width: 300, height: 600 }}>
                <Image
                  src="/phone-mockup.png"
                  alt="Telefoonhouder"
                  width={300}
                  height={600}
                  className="phone-mockup-img"
                  draggable={false}
                  style={{ display: "block", width: "100%", height: "auto", pointerEvents: "none", userSelect: "none" }}
                />
                <video
                  src="/Screen_Recording_20250523_204752_Chrome.mp4"
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
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section">
          <div className="container text-center">
            <h2>Hoe werkt het? Simpel en slim.</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Connecteer</h3>
                <p>Koppel uw digitale meter aan het Fluxeco netwerk. Veilig en eenvoudig.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Match & verkoop</h3>
                <p>Bedrijven kopen uw groene stroom rechtstreeks via ons platform.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Verdien eerlijk</h3>
                <p>U ontvangt een veel betere prijs dan de traditionele terugleververgoeding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section alt-bg">
          <div className="container">
            <h2 className="text-center">Voordelen voor iedereen</h2>
            <div className="benefits-columns">
              <div className="benefit-column">
                <h3>Voor u (huishoudens & kmo's)</h3>
                <ul>
                  <li><strong>Hogere opbrengst:</strong> Verdien een eerlijke, marktconforme prijs voor uw overschot.</li>
                  <li><strong>Winstgevende investering:</strong> Maak uw zonnepanelen sneller rendabel en zelfs winstgevend.</li>
                  <li><strong>Geen gedoe:</strong> Wij regelen de matching en administratie.</li>
                  <li><strong>Simpele start:</strong> Enkel een digitale meter nodig.</li>
                </ul>
              </div>
              <div className="benefit-column">
                <h3>Voor energie-intensieve bedrijven</h3>
                <ul>
                  <li><strong>Lagere energiekosten:</strong> Toegang tot lokaal geproduceerde groene stroom tegen competitieve prijzen.</li>
                  <li><strong>ESG rapportering:</strong> Betere ESG rapportering voor bedrijven.</li>
                  <li><strong>Betrouwbare levering:</strong> Stabiele energiestroom dankzij onze slimme bundeling.</li>
                  <li><strong>Transparante contracten:</strong> Duidelijke jaarcontracten, direct met lokale producenten (via Fluxeco).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="container">
            <h2>Ons team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="image-wrapper">
                  <Image src="/team/moussa.png" alt="Moussa Moussaoui" fill className="object-cover rounded-full" />
                </div>
                <h3>Moussa Moussaoui</h3>
                <p>CEO & CFO</p>
              </div>
              <div className="team-member">
                <div className="image-wrapper">
                  <Image src="/team/jason.png" alt="Jason Van de Berckt" fill className="object-cover rounded-full" />
                </div>
                <h3>Jason Van de Berckt</h3>
                <p>CO-CEO & CIO</p>
              </div>
              <div className="team-member">
                <div className="image-wrapper">
                  <Image src="/team/nick.png" alt="Nick Verbraecken" fill className="object-cover rounded-full" />
                </div>
                <h3>Nick Verbraecken</h3>
                <p>CTO</p>
              </div>
              <div className="team-member">
                <div className="image-wrapper">
                  <Image src="/team/samin.png" alt="Samin Hafizi" fill className="object-cover rounded-full" />
                </div>
                <h3>Samin Hafizi</h3>
                <p>CSO & CMO</p>
              </div>
              <div className="team-member">
                <div className="image-wrapper">
                  <Image src="/team/yassir.png" alt="Yassir EL Amraoui" fill className="object-cover rounded-full" />
                </div>
                <h3>Yassir EL Amraoui</h3>
                <p>co-CTO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section id="signup" className="section signup-section">
          <div className="container text-center">
            <h2>Klaar om geld te verdienen?</h2>
            <p>Log nu in op ons dashboard om te starten.</p>
            <a href="https://dashboard.fluxeco.be" className="cta-button">Probeer het direct</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Fluxeco.</p>
          <div className="legal-links">
            <a href="/cookie-policy" className="footer-link">Cookiebeleid</a> | {' '}
            <span>BTW BEXXX.XXX.XXX</span> |
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
