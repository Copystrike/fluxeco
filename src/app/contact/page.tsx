import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <a href="/" className="logo">Fluxeco</a>
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

      <main className="flex-1">
        {/* Contact Section */}
        <section className="hero">
          <div className="container">
            <h1>Contact</h1>
            <p className="subtitle">Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op via onderstaande gegevens.</p>
            <div className="contact-details flex flex-col md:flex-row gap-8 mt-8">
              <div className="flex-1 flex flex-col gap-4">
                <h2>Onze gegevens</h2>
                <p><strong>Adres:</strong> Fluxeco, Groene Straat 123, 1000 Brussel, België</p>
                <p><strong>Telefoon:</strong> +32 2 123 45 67</p>
                <p><strong>Email:</strong> <a href="mailto:info@fluxeco.be" className="underline">info@fluxeco.be</a></p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <Image src="/contact.jpg" alt="Contact illustratie" width={300} height={200} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Fluxeco.</p>
          <div className="legal-links">
            <a href="/cookie-policy" className="footer-link">Cookiebeleid</a> |{' '}
            <span>BTW BEXXX.XXX.XXX</span> |
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}