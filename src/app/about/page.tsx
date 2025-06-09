// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image"; // For team member photos

export const metadata: Metadata = {
  title: "About FLUXECO - Our Mission, Vision, and Team",
  description: "Learn about FLUXECO's commitment to revolutionizing the local energy market in Flanders and meet the passionate team driving our vision forward.",
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string; // e.g., /team/moussa.jpg - put images in public/team/
  bio?: string; // Short bio or quote
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl, bio }) => (
  <div className="text-center bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 overflow-hidden bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-600 shadow-md">
      {imageUrl ? <Image src={imageUrl} alt={name} width={160} height={160} className="object-cover w-full h-full" /> : <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm">Photo</div>}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
    <p className="text-[rgb(var(--primary-rgb))] dark:text-emerald-400 font-medium mt-1">{role}</p>
    {bio && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{bio}</p>}
  </div>
);

export default function AboutPage() {
  const teamMembers: TeamMemberProps[] = [
    { name: "Moussa Moussaoui", role: "CEO & CFO", imageUrl: "/team/moussa.webp" },
    { name: "Jason Van de Berckt", role: "CO-CEO & CIO", imageUrl: "/team/jason.webp" },
    { name: "Nick Verbraecken", role: "CTO", imageUrl: "/team/nick.webp" },
    { name: "Samin Hafizi", role: "CSO & CMO", imageUrl: "/team/samin.webp" },
    { name: "Yassir EL Amraoui", role: "co-CTO", imageUrl: "/team/yassir.webp" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 dark:from-emerald-700 dark:via-green-700 dark:to-teal-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          {/* Optional Icon for About page */}
          {/* <Users className="w-16 h-16 mx-auto mb-6 opacity-80" /> */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">About FLUXECO</h1>
          <p className="mt-6 text-lg sm:text-xl text-emerald-100 dark:text-green-200">Pioneering a fair, transparent, and sustainable energy future for Flanders, one connection at a time.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-5xl mx-auto">
          {/* Mission & Vision Section */}
          <section className="mb-16 md:mb-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              To empower local energy producers and consumers by creating a seamless, equitable peer-to-peer marketplace that accelerates the adoption of renewable energy and fosters community-driven sustainability. We believe in fair compensation for green energy and accessible, stable green power for businesses.
            </p>
            {/* Optionally, add a Vision statement here too */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl mt-12">Our Vision</h2>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">To be the leading catalyst for decentralized energy trading in Flanders, building a resilient and interconnected local energy grid where every participant contributes to and benefits from a greener tomorrow.</p>
          </section>

          {/* Team Section */}
          <section>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The passionate individuals dedicated to making FLUXECO a reality.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  // bio={member.bio} // Uncomment if you add bios
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
