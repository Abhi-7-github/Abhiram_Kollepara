import React from "react";

const frontendSkills = ["React.js", "Tailwind CSS", "Framer Motion", "Gsap", "HTML", "CSS"];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "Javascript"];
const others = ["AWS", "Git", "Github", "Figma"];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#111827] text-[#F8FAFC] flex flex-col items-center justify-center px-6 py-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <img
          src="/abhiram.jpg"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-[#7C3AED] object-cover shadow-xl hover:scale-105 transition-transform"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hey there, I'm Abhiram 👋
        </h1>
        <p className="text-xl text-[#38BDF8] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <h5 className="text-2xl font-bold text-[#C084FC] mt-4">About Me</h5>
        <p className="text-md text-[#CBD5E1] mt-2">
          I’m Abhiram Kollepara, currently pursuing my B.Tech in Computer Science and Engineering at Kalasalingam Academy of Research and Education under the Kalvium Program — a unique, work-integrated, and industry-oriented curriculum focused on software product engineering.
          I’m passionate about building impactful web applications, blending strong frontend design, backend architecture, and database management skills. Through the Kalvium program, I’ve gained hands-on experience in full-stack development and real-world software projects from the first year itself.
        </p>
        <br />
        <p className="text-md text-[#CBD5E1]">
          Web Developer @ Coding Blocks KARE | Technical Member @ Vishaka KARE
        </p>
        <br />
        <p className="text-md text-[#CBD5E1]">
          I’m always eager to learn new technologies, solve real-world problems, and grow as a developer. My goal is to build scalable, meaningful software that improves people's lives.
        </p>
      </header>

      {/* Projects */}
      <section className="w-full max-w-5xl bg-[#1E293B] px-8 py-6 rounded-2xl shadow-2xl mb-8 border border-[#334155]">
        <h2 className="text-3xl font-bold text-[#C084FC] mb-6 border-b border-[#334155] pb-2">
          Projects
        </h2>
        <div className="space-y-4">
          <div className="bg-[#334155] hover:bg-[#475569] transition p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#F8FAFC]">E-commerce</h3>
            <p className="text-sm text-[#CBD5E1]">
              A full-stack system to manage products, categories, and stock levels using MongoDB, Express.js, and React.
            </p>
            <a href="https://github.com/Abhi-7-github/Ecom.git" target="_blank" className="text-[#38BDF8] hover:text-[#0EA5E9] underline text-sm">🚀 GitHub</a> | <span className="text-[#64748B] text-sm">🚀 Live (Coming soon)</span>
          </div>

          <div className="bg-[#334155] hover:bg-[#475569] transition p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#F8FAFC]">AmedicK</h3>
            <p className="text-sm text-[#CBD5E1]">
              User-friendly UI for booking doctor appointments with OTP verification, profile setup, and Google login integration.
            </p>
            <a href="https://github.com/kalviumcommunity/S81_abhiram_AmedicK.git" target="_blank" className="text-[#38BDF8] hover:text-[#0EA5E9] underline text-sm">🚀 GitHub</a> | <span className="text-[#64748B] text-sm">🚀 Live (Coming soon)</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full max-w-5xl bg-[#1E293B] px-8 py-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#C084FC] mb-6 border-b border-[#334155] pb-2">Skills</h2>

        {/* Frontend */}
        <div className="mb-6">
          <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">Frontend</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">Backend</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {backendSkills.map((skill, index) => (
              <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Programming */}
        <div className="mb-6">
          <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">Programming</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {programming.map((skill, index) => (
              <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Database */}
        <div className="mb-6">
          <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">Database</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {databaseSkills.map((skill, index) => (
              <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Others */}
        <div className="mb-6">
          <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">Others</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((skill, index) => (
              <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full max-w-3xl bg-[#1E293B] mt-12 px-8 py-6 rounded-2xl shadow-xl border border-[#334155]">
        <h2 className="text-2xl font-bold text-[#C084FC] mb-4">Contact Me</h2>
        <p className="text-[#94A3B8] mb-2">
          📧 Email: <a href="mailto:abhikollepara333@gmail.com" className="text-[#38BDF8] hover:underline">abhikollepara333@gmail.com</a>
        </p>
        <p className="text-[#94A3B8] mb-2">
          📱 Phone: <span className="text-[#F8FAFC]">+91 9398779899</span>
        </p>
        <p className="text-[#94A3B8]">
          🌐 LinkedIn: <a href="https://www.linkedin.com/in/abhiram-kollepara-395a5331a/" target="_blank" className="text-[#38BDF8] hover:underline">linkedin.com/in/abhiram</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-[#64748B]">
        Crafted with ❤️ in React & Tailwind • © 2025 Abhiram
      </footer>
    </main>
  );
}
