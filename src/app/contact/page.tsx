import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <a href="/" className="logo">Fluxeco</a>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h1>Contacteer Ons</h1>
            <p>Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op via de onderstaande gegevens.</p>

            <div className="contact-details">
              <h2>Onze Gegevens</h2>
              <p><strong>Adres:</strong> Fluxeco, Groene Straat 123, 1000 Brussel, België</p>
              <p><strong>Telefoon:</strong> +32 2 123 45 67</p>
              <p><strong>Email:</strong> <a href="mailto:info@fluxeco.be">info@fluxeco.be</a></p>
            </div>
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