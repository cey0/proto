"use client";
import { useState } from "react";
import SplitText from "@/components/SplitText";

const projectsData = [
  {
    id: 1,
    title: "Nex ERP",
    description: "Aplikasi SaaS multi-tenant untuk manajemen bengkel otomotif. Memudahkan pencatatan servis, estimasi biaya, penugasan mekanik, hingga quality control dan invoicing dalam satu dashboard modern dan responsif.",
    fullDescription: "Solusi digital komprehensif untuk bisnis bengkel otomotif. Dirancang dengan arsitektur multi-tenant untuk mengelola banyak bengkel secara terpusat, menyederhanakan alur kerja dari work order, estimasi sparepart, hingga persetujuan pelanggan.",
    image: "/NexERP.png",
    techStack: ["React", "Next.js", "Tailwind"],
    link: "https://nex-erp-jet.vercel.app/dashboard"
  },
  {
    id: 2,
    title: "Qyva",
    description: "An all-in-one academic workspace combining courses, tasks, notes, and calendar events.",
    fullDescription: "Qyva Hub adalah workspace akademik komprehensif yang dirancang untuk meningkatkan produktivitas belajar. Platform ini mengintegrasikan manajemen mata kuliah, tugas, catatan, jadwal kalender, dan pengingat dalam satu tempat. Dibangun menggunakan teknologi modern (React 19, Tailwind CSS, Fastify, dan Prisma), aplikasi ini menawarkan performa yang cepat, antarmuka yang bersih, dan sistem autentikasi yang aman.",
    image: "/Qyva.png",
    techStack: ["Vue", "Nuxt", "Tailwind"],
    link: "https://qyva.cey0.tech/"
  },
  {
    id: 3,
    title: "Absolvo",
    description: "Website Pengakuan Dosa WEB 3",
    fullDescription: "Project ini adalah project Hackathon On Going Web 3 yang diselenggarakan oleh GMT (Girls Meet Tech)",
    image: "/Absolvo.png",
    techStack: ["Vue", "Tailwind", "Web3"],
    link: "https://github.com/cey0/Absolvo"
  }
];
export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main>
      <section
        id="home"
        className="flex h-screen items-center justify-center bg-linear-to-b from-green-50 from-82% to-100% to-green-200"
      >
        <div className="title px-4">
          <h1 className="font-bold text-2xl md:text-[2vw] text-center md:text-left">Hi, I'm a</h1>
          <SplitText
            text="Web Developer"
            className="text-5xl sm:text-7xl md:text-[9vw] font-semibold text-center leading-none tracking-tighter pb-4 pt-2"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-4 gap-6 md:gap-0">
            <div className="button flex flex-wrap justify-center items-center gap-4">
              <a
                href="#projects"
                className="drop-shadow-2xl bg-green-500 hover:bg-green-600 transition-colors py-3 px-6 rounded-xl text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="drop-shadow-2xl bg-white text-green-600 border border-green-200 hover:bg-green-50 transition-colors py-3 px-6 rounded-xl font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                About Me
              </a>
            </div>
            <h2 className="text-center md:text-right text-xl md:text-[2vw] font-medium self-center md:self-end">
              Nadra Zaki Saputra
            </h2>
          </div>
          <p className="text-[1.2rem] text-center mt-12 text-green-900/80 font-medium">
            Bringing creative logic to interactive systems 🌿 <br /> Web Developer
            who keeps it clean, fast, and accessible.
          </p>
        </div>
      </section>
      
      <section
        id="about"
        className="bg-linear-to-b from-green-200 to-green-300 min-h-screen flex flex-col justify-center items-center py-20 px-8"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-4 sm:space-y-6 text-green-950 text-center md:text-left">
            <h2 className="text-4xl md:text-[4vw] font-bold leading-tight mb-4 sm:mb-8">
              About Me
            </h2>
            <p className="text-xl leading-relaxed text-green-900">
              I specialize in designing and building engaging, responsive web applications. With a strong foundation in modern web technologies, I bridge the gap between seamless user interfaces and robust backend systems to deliver complete digital experiences.
            </p>
            <p className="text-xl leading-relaxed text-green-900">
              My approach focuses on clean code, optimal performance, and intuitive design principles. I believe that great web development doesn't just solve problems; it creates accessible, sustainable platforms that leave a lasting impression while minimizing resource waste.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-colors">
              <span className="text-5xl mb-4">🚀</span>
              <h3 className="font-bold text-green-950 text-lg">Performance</h3>
              <p className="text-sm text-green-800 mt-1">Optimized APIs</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-colors">
              <span className="text-5xl mb-4">🔒</span>
              <h3 className="font-bold text-green-950 text-lg">Security</h3>
              <p className="text-sm text-green-800 mt-1">Data protection</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-colors">
              <span className="text-5xl mb-4">🌱</span>
              <h3 className="font-bold text-green-950 text-lg">Eco-Friendly</h3>
              <p className="text-sm text-green-800 mt-1">Efficient code</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-colors">
              <span className="text-5xl mb-4">📱</span>
              <h3 className="font-bold text-green-950 text-lg">Responsive</h3>
              <p className="text-sm text-green-800 mt-1">All devices</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project"
        className="bg-linear-to-b from-green-300 to-green-50 min-h-screen py-32 px-8 flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
            <h2 className="text-4xl md:text-[4vw] font-bold text-green-950">
              Selected Work
            </h2>
            <a href="#" className="text-green-700 font-bold hover:text-green-900 transition-colors hidden md:block">
              View All Projects →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-green-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-green-100 cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 bg-green-100 flex items-center justify-center relative overflow-hidden group">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-3">{project.title}</h3>
                  <p className="text-green-800/80 mb-8 line-clamp-3 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="text-green-600 font-bold hover:text-green-800 transition-colors inline-flex items-center gap-2 group mt-auto">
                    View Details <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <a href="#" className="text-green-700 font-bold hover:text-green-900 transition-colors">
              View All Projects →
            </a>
          </div>
        </div>
      </section>
      
      <footer className="bg-green-50 py-16 text-center border-t border-green-200/60">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-950 mb-6">Let's build something efficient.</h2>
          <a href="mailto:cey0@proton.me" className="inline-block bg-green-900 text-green-50 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full hover:bg-green-800 transition-colors shadow-lg shadow-green-900/20 mb-12 sm:mb-16">
            Get In Touch
          </a>
          <div className="flex flex-col md:flex-row justify-between items-center text-green-900/60 text-sm gap-4">
            <p>© {new Date().getFullYear()} Nadra Zaki Saputra. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              <span>Made with</span> <span className="text-green-500 text-lg">💚</span> <span>and sustainable logic</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-green-950/40 backdrop-blur-sm transition-opacity"></div>
          
          <div 
            className="relative bg-white rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors font-bold cursor-pointer"
            >
              ✕
            </button>
            
            <div className="w-full h-64 sm:h-80 relative shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 sm:p-10 overflow-y-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-200">{tech}</span>
                ))}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-green-950 mb-6">{selectedProject.title}</h3>
              
              <div className="prose prose-green max-w-none text-green-900 leading-relaxed space-y-4 mb-10">
                <p className="text-xl font-medium">{selectedProject.description}</p>
                <p>{selectedProject.fullDescription}</p>
              </div>
              
              <a 
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-green-600/20 w-full sm:w-auto cursor-pointer"
              >
                Visit Project ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
