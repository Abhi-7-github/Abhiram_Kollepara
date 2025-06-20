import React from "react";

const frontendSkills = ["React.js", "Tailwind CSS", "Framer Motion", "Gsap"];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "Javascript"];
const others=["AWS"]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex flex-col items-center justify-center px-6 py-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <img
          src=""
          alt="Abhiram's Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-[#A78BFA] object-cover shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hey there, I'm Abhiram 👋
        </h1>
        <p className="text-xl text-[#60A5FA] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <p className="text-md text-[#94A3B8]">
          Pursuing B.Tech at Kalasalingam Academy of Research and Education (Kalvium Program)
        </p>
        <p className="text-md text-[#94A3B8]">
          Web Developer @ Coding Blocks KARE | Technical Member @ Vishaka KARE
        </p>
      </header>

      <section className="w-full max-w-5xl bg-[#1E293B] px-8 py-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#A78BFA] mb-6 border-b border-[#334155] pb-2">
          Skills
        </h2>

        {/* Frontend Skills */}
        <div className="mb-6">
          <h3 className="text-xl text-[#60A5FA] font-semibold mb-2">
            Frontend
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {frontendSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#334155] text-center p-4 rounded-xl "
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="mb-6">
          <h3 className="text-xl text-[#60A5FA] font-semibold mb-2">Backend</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#334155] text-center p-4 rounded-xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl text-[#60A5FA] font-semibold mb-2">Programming</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {programming.map((skill, index) => (
              <li
                key={index}
                className="bg-[#334155] text-center p-4 rounded-xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Database Skills */}
        <div>
          <h3 className="text-xl text-[#60A5FA] font-semibold mb-2">
            Database
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {databaseSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#334155] text-center p-4 rounded-xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className="mb-6">
          <h3 className="text-xl text-[#60A5FA] font-semibold mb-2">Others</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((skill, index) => (
              <li
                key={index}
                className="bg-[#334155] text-center p-4 rounded-xl"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-[#94A3B8]">
        Crafted with ❤️ in React & Tailwind • © 2025 Abhiram
      </footer>
    </main>
  );
}
