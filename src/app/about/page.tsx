// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image"; // Voor foto's van teamleden

export const metadata: Metadata = {
  title: "over FLUXECO - onze missie, visie en team",
  description: "ontdek FLUXECO's inzet voor een eerlijke lokale energiemarkt in Vlaanderen en maak kennis met het team achter onze missie.",
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string; // bijv. /team/moussa.jpg - plaats afbeeldingen in public/team/
  bio?: string; // Korte bio of citaat
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl, bio }) => (
  <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 overflow-hidden bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-600 shadow-md">
      {imageUrl ? <Image src={imageUrl} alt={name} width={160} height={160} className="object-cover w-full h-full" /> : <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm">Foto</div>}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
    <p className="text-[rgb(var(--primary-rgb))] dark:text-emerald-400 font-medium mt-1">{role}</p>
    {bio && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{bio}</p>}
  </div>
);

export default function AboutPage() {
  const teamMembers: TeamMemberProps[] = [
    { name: "Moussa Moussaoui", role: "CEO & Financieel Directeur", imageUrl: "/team/moussa.webp" },
    { name: "Jason Van de Berckt", role: "Co-CEO & IT Directeur", imageUrl: "/team/jason.webp" },
    { name: "Nick Verbraecken", role: "Technisch Directeur", imageUrl: "/team/nick.webp" },
    { name: "Samin Hafizi", role: "Commercieel & Marketing Directeur", imageUrl: "/team/samin.webp" },
    { name: "Yassir EL Amraoui", role: "Co-Technisch Directeur", imageUrl: "/team/yassir.webp" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 dark:from-emerald-700 dark:via-green-700 dark:to-teal-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          {/* Optioneel pictogram voor de Over ons-pagina */}
          {/* <Users className="w-16 h-16 mx-auto mb-6 opacity-80" /> */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Over FLUXECO</h1>
          <p className="mt-6 text-lg sm:text-xl text-emerald-100 dark:text-green-200">
            Wij bouwen aan een eerlijke, transparante en duurzame energietoekomst voor Vlaanderen. Iedereen kan meedoen.
          </p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-5xl mx-auto">
          {/* Missie & Visie Sectie */}
          <section className="mb-16 md:mb-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">Onze Missie</h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Wij willen lokale producenten en gebruikers van energie samenbrengen. Via ons platform kan iedereen eerlijk groene stroom verkopen of kopen. Zo versnellen we de overstap naar duurzame energie en krijgt iedereen een eerlijke prijs.
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl mt-12">Onze Visie</h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              FLUXECO wil hét platform zijn voor lokale energiehandel in Vlaanderen. Samen bouwen we aan een sterk, verbonden energienet waar iedereen bijdraagt aan een groene toekomst.
            </p>
          </section>

          {/* Team Sectie */}
          <section>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">Ons Team</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Maak kennis met de mensen die FLUXECO mogelijk maken. Wij zetten ons elke dag in voor een groenere buurt.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  // bio={member.bio} // Uncomment als je bios toevoegt
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
