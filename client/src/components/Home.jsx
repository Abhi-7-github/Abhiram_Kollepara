import React from "react";

const frontendSkills = ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "HTML", "CSS"];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "JavaScript"];
const others = ["AWS", "Git", "GitHub", "Figma", "OpenAI API", "LangChain", "Vector DBs", "Whisper", "Hugging Face"];

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
          Full-Stack Developer • AI Innovator • Problem Solver
        </p>
        <h5 className="text-2xl font-bold text-[#C084FC] mt-4">About Me</h5>
        <p className="text-md text-[#CBD5E1] mt-2">
          I'm Abhiram Kollepara, a B.Tech CSE student at Kalasalingam Academy of Research and Education through the Kalvium Program — an industry-integrated curriculum that emphasizes hands-on software engineering from day one.
        </p>
        <p className="text-md text-[#CBD5E1] mt-2">
          My journey blends full-stack web development with cutting-edge AI technologies. I love crafting intelligent applications that merge beautiful UIs, scalable backend systems, and smart automation.
        </p>
        <p className="text-md text-[#CBD5E1] mt-2">
          🚀 AI Tools I work with include OpenAI, LangChain, Hugging Face Transformers, Whisper for voice-to-text, and vector databases like Pinecone & Chroma.
        </p>
        <p className="text-md text-[#CBD5E1] mt-2">
          Currently contributing as a Web Developer @ Coding Blocks KARE and a Tech Member @ Vishaka KARE.
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
              Full-stack product management system using MongoDB, Express.js, and React.
            </p>
            <a href="https://github.com/Abhi-7-github/Ecom.git" target="_blank" className="text-[#38BDF8] hover:text-[#0EA5E9] underline text-sm">🚀 GitHub</a> | <span className="text-[#64748B] text-sm">🚀 Live (Coming soon)</span>
          </div>

          <div className="bg-[#334155] hover:bg-[#475569] transition p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#F8FAFC]">AmedicK</h3>
            <p className="text-sm text-[#CBD5E1]">
              Booking app with OTP login, profile setup, and Google authentication.
            </p>
            <a href="https://github.com/kalviumcommunity/S81_abhiram_AmedicK.git" target="_blank" className="text-[#38BDF8] hover:text-[#0EA5E9] underline text-sm">🚀 GitHub</a> | <span className="text-[#64748B] text-sm">🚀 Live (Coming soon)</span>
          </div>

          <div className="bg-[#334155] hover:bg-[#475569] transition p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#F8FAFC]">VoiceGPT</h3>
            <p className="text-sm text-[#CBD5E1]">
              An AI voice assistant built with Whisper + GPT-4, enabling real-time voice input and intelligent responses. Fully integrated into a web UI using React.
            </p>
            <a href="#" target="_blank" className="text-[#38BDF8] hover:text-[#0EA5E9] underline text-sm">🚀 GitHub (Coming soon)</a> | <span className="text-[#64748B] text-sm">🚀 Live (Coming soon)</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full max-w-5xl bg-[#1E293B] px-8 py-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-[#C084FC] mb-6 border-b border-[#334155] pb-2">Skills</h2>

        {[
          { title: "Frontend", data: frontendSkills },
          { title: "Backend", data: backendSkills },
          { title: "Programming", data: programming },
          { title: "Database", data: databaseSkills },
          { title: "Others", data: others },
        ].map(({ title, data }, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl text-[#38BDF8] font-semibold mb-2">{title}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.map((skill, index) => (
                <li key={index} className="bg-[#334155] hover:bg-[#475569] transition text-center p-4 rounded-xl">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
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
        Crafted with ❤️ using React, Tailwind & AI • © 2025 Abhiram
      </footer>
    </main>
  );
}