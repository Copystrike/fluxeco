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
              <li><a href="#problem">Probleem</a></li>
              <li><a href="#solution">Oplossing</a></li>
              <li><a href="#how-it-works">Hoe Werkt Het?</a></li>
              <li><a href="#benefits">Voordelen</a></li>
              <li><a href="#pricing">Prijzen</a></li>
              <li><a href="#about">Over Ons</a></li>
            </ul>
          </nav>
          <a href="#signup" className="cta-button nav-cta">Meld Interesse</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Stop Met Energie Weggeven. <br />Verdien Wat Uw Zonne-energie Echt Waard Is.</h1>
            <p className="subtitle">Fluxeco verbindt uw energieoverschot direct met bedrijven die groene stroom nodig hebben. Krijg eindelijk een eerlijke prijs, dankzij ons slimme P2B-platform.</p>
            <a href="#signup" className="cta-button hero-cta">Ontdek Hoeveel U Kunt Verdienen</a>
            <div className="hero-image-wrapper w-full flex justify-center mt-12">
              <Image src="/placeholder-hero.png" alt="Illustratie van zonnepanelen die verbonden zijn met een bedrijf" width={700} height={400} />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="section">
          <div className="container text-center">
            <h2>De Frustratie van de Digitale Meter</h2>
            <p>Zelf energie opwekken loont niet meer zoals vroeger sinds de digitale meter:</p>
            <div className="problem-points">
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-meter.png" alt="Icon meter" width={100} height={100} className="problem-icon" />
                <h3>Geen Terugdraaiende Teller</h3>
                <p>Overschotten worden niet meer verrekend met uw verbruik.</p>
              </div>
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-low-price.png" alt="Icon lage prijs" width={100} height={100} className="problem-icon" />
                <h3>Lage Terugleververgoeding</h3>
                <p>U ontvangt vaak minder dan 5 cent/kWh, ver onder de marktprijs.</p>
              </div>
              <div className="point gap-y-3 flex flex-col items-center">
                <Image src="/placeholder-icon-unfair.png" alt="Icon oneerlijk" width={100} height={100} className="problem-icon" />
                <h3>Oneerlijke Markt</h3>
                <p>Grote spelers worden beloond, kleine producenten soms zelfs beboet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="section alt-bg">
          <div className="container split">
            <div className="text-content">
              <h2>De Oplossing: Fluxeco - Directe Energiehandel</h2>
              <p>Fluxeco is een peer-to-business (P2B) energieplatform. Wij maken het mogelijk voor huishoudens en KMO's om hun groene energieoverschotten rechtstreeks te verkopen aan energie-intensieve bedrijven die duurzaamheid zoeken.</p>
              <p><strong>Geen lage vergoedingen meer. Geen oneerlijke boetes.</strong> Wel een eerlijke prijs voor uw lokale, groene stroom, direct van producent naar verbruiker.</p>
              <a href="#signup" className="cta-button">Meld Nu Uw Interesse</a>
            </div>
            <div className="image-content">
              <Image src="/placeholder-solution.png" alt="Schema van directe energiehandel tussen huis en bedrijf" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section">
          <div className="container text-center">
            <h2>Hoe Werkt Het? Simpel en Slim.</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Connecteer</h3>
                <p>Koppel uw digitale meter (verplicht vanaf 2025) aan Fluxeco. Veilig en eenvoudig.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Bundel Slim</h3>
                <p>Wij voegen uw overschot virtueel samen met andere producenten tot een betrouwbaar volume.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Match & Verkoop</h3>
                <p>Bedrijven kopen uw gebundelde groene stroom rechtstreeks via ons platform.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Verdien Eerlijk</h3>
                <p>U ontvangt een veel betere prijs dan de traditionele terugleververgoeding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section alt-bg">
          <div className="container">
            <h2 className="text-center">Voordelen Voor Iedereen</h2>
            <div className="benefits-columns">
              <div className="benefit-column">
                <h3>Voor Energieproducenten (Huishoudens & KMO's)</h3>
                <ul>
                  <li><strong>Hogere Opbrengst:</strong> Verdien een eerlijke, marktconforme prijs voor uw overschot.</li>
                  <li><strong>Winstgevende Investering:</strong> Maak uw zonnepanelen sneller rendabel en zelfs winstgevend.</li>
                  <li><strong>Geen Gedoe:</strong> Wij regelen de matching en administratie.</li>
                  <li><strong>Simpele Start:</strong> Enkel een digitale meter nodig.</li>
                </ul>
              </div>
              <div className="benefit-column">
                <h3>Voor Energie-Intensieve Bedrijven</h3>
                <ul>
                  <li><strong>Lagere Energiekosten:</strong> Toegang tot lokaal geproduceerde groene stroom tegen competitieve prijzen.</li>
                  <li><strong>CO2-Reductie:</strong> Verlaag uw ecologische voetafdruk met écht groene energie.</li>
                  <li><strong>Betrouwbare Levering:</strong> Stabiele energiestroom dankzij onze slimme bundeling.</li>
                  <li><strong>Transparante Contracten:</strong> Duidelijke jaarcontracten, direct met lokale producenten (via Fluxeco).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="container">
            <h2>Ons Team</h2>
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
            <h2>Klaar om de Controle Terug te Nemen?</h2>
            <p>Laat uw e-mailadres achter en wees als eerste op de hoogte wanneer Fluxeco lanceert. Ontvang updates, early access-mogelijkheden en maak deel uit van de energierevolutie.</p>
            <form id="interest-form">
              <input type="email" id="email" name="email" placeholder="info@fluxeco.be" required />
              <button type="submit" className="cta-button">Verstuur Mijn Interesse</button>
            </form>
            <p id="form-message" className="form-message"></p>
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
