// src/app/cookies-beleid/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLUXECO - Cookiebeleid",
  description: "Informatie over het gebruik van cookies op de FLUXECO website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-700 dark:from-teal-700 dark:via-cyan-700 dark:to-sky-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Cookiebeleid</h1>
          <p className="mt-6 text-lg sm:text-xl text-teal-100 dark:text-cyan-200">
            Dit cookiebeleid beschrijft hoe FLUXECO cookies gebruikt om informatie te verzamelen en op te slaan wanneer u onze website bezoekt.
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-3xl mx-auto">
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">
              Wat zijn cookies?
            </h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u een website bezoekt. Ze worden veel gebruikt om websites efficiënter te laten werken en om informatie te verstrekken aan de eigenaars van de site.
              </p>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">
              Hoe gebruiken we cookies?
            </h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                FLUXECO gebruikt cookies voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  <strong>Noodzakelijke cookies:</strong> Deze cookies zijn essentieel om u in staat te stellen door de website te navigeren en de functies ervan te gebruiken, zoals toegang tot beveiligde delen van de website.
                </li>
                <li>
                  <strong>Prestatiecookies:</strong> Deze cookies verzamelen informatie over hoe bezoekers de website gebruiken, bijvoorbeeld welke pagina's het meest worden bezocht en of er foutmeldingen verschijnen. Deze cookies worden gebruikt om de website te verbeteren.
                </li>
                <li>
                  <strong>Functionaliteitscookies:</strong> Deze cookies stellen de website in staat om keuzes die u maakt te onthouden (zoals uw gebruikersnaam, taal of de regio waarin u zich bevindt) en bieden verbeterde, meer persoonlijke functies.
                </li>
                <li>
                  <strong>Marketingcookies:</strong> Deze cookies worden gebruikt om advertenties weer te geven die relevanter zijn voor u en uw interesses. Ze worden ook gebruikt om het aantal keren dat u een advertentie ziet te beperken en om de effectiviteit van de reclamecampagne te meten.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">
              Soorten cookies die we gebruiken
            </h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We gebruiken zowel first-party als third-party cookies:
              </p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  <strong>First-party cookies:</strong>  Deze cookies worden door FLUXECO ingesteld.
                </li>
                <li>
                  <strong>Third-party cookies:</strong>  Deze cookies worden ingesteld door een ander domein dan dat van onze website. We gebruiken bijvoorbeeld cookies van Google Analytics om websiteverkeer te analyseren.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">
              Uw keuzes
            </h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                U kunt het gebruik van cookies beheren via uw browserinstellingen. De meeste browsers staan u toe om cookies te accepteren of te weigeren. U kunt ook uw browser zo instellen dat u een melding ontvangt wanneer er een cookie wordt geplaatst.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Houd er rekening mee dat het uitschakelen van cookies van invloed kan zijn op de functionaliteit van de website.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Voor meer informatie over het beheren en verwijderen van cookies, kunt u de helpfunctie van uw browser raadplegen of <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary-rgb))] hover:underline">www.aboutcookies.org</a> bezoeken.
              </p>
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b-2 border-[rgb(var(--primary-rgb))]">
              Wijzigingen in dit cookiebeleid
            </h2>
            <div className="space-y-2 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We kunnen dit cookiebeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina geplaatst. We raden u aan om dit cookiebeleid regelmatig te raadplegen om op de hoogte te blijven van hoe we cookies gebruiken.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
