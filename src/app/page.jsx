"use client";
import { useState } from "react";
import SplitText from "@/components/SplitText";

const projectsData = [
  {
    id: 1,
    title: "Nex ERP",
    description: "A multi-tenant SaaS application for automotive workshop management. Simplifies service recording, cost estimation, and invoicing in one modern dashboard.",
    fullDescription: "A comprehensive digital solution for automotive workshop businesses. Designed with a multi-tenant architecture to centrally manage multiple workshops, simplifying workflows from work orders and spare parts estimation to customer approvals.",
    image: "/NexERP.png",
    techStack: ["React", "Next.js", "Tailwind"],
    link: "https://nex-erp-jet.vercel.app/dashboard"
  },
  {
    id: 2,
    title: "Qyva",
    description: "An all-in-one academic workspace combining courses, tasks, notes, and calendar events.",
    fullDescription: "Qyva Hub is a comprehensive academic workspace designed to enhance learning productivity. This platform integrates course management, tasks, notes, calendar schedules, and reminders in one place. Built with modern tech (React 19, Tailwind CSS, Fastify, and Prisma), it offers fast performance, a clean interface, and secure authentication.",
    image: "/Qyva.png",
    techStack: ["Vue", "Nuxt", "Tailwind"],
    link: "https://qyva.cey0.tech/"
  },
  {
    id: 3,
    title: "Absolvo",
    description: "WEB 3 Confession Website",
    fullDescription: "This project is an ongoing Web 3 Hackathon project organized by GMT (Girls Meet Tech).",
    image: "/Absolvo.png",
    techStack: ["Vue", "Tailwind", "Web3"],
    link: "https://github.com/cey0/Absolvo"
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-emerald-500/30 text-zinc-100 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center pt-20"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="title px-4 z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-400 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="font-bold text-3xl md:text-5xl text-center text-zinc-300 mb-2 tracking-tight">
            Hi, I'm <span className="text-white">Nadra Zaki Saputra</span>
          </h1>
          
          <SplitText
            text="Web Developer"
            className="text-6xl sm:text-7xl md:text-[8vw] font-bold text-center leading-tight tracking-tighter pb-4 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40, scale: 0.9 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          
          <p className="text-lg md:text-xl text-center max-w-2xl mt-4 text-zinc-400 font-medium">
            Bringing creative logic to interactive systems. <br className="hidden md:block"/> 
            Building clean, fast, and accessible digital experiences.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-4 w-full">
            <a
              href="#project"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-8 font-medium text-white transition-all hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] focus:outline-none w-full md:w-auto"
            >
              <span className="mr-2">View Projects</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white w-full md:w-auto backdrop-blur-sm"
            >
              About Me
            </a>
          </div>
          
          <div className="mt-20 animate-bounce">
            <a href="#about" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center py-32 px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto w-full z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Direct Bio & Professional Summary */}
            <div className="flex-1 space-y-8">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
                <p>
                  I am a Web Developer specialized in building scalable, responsive, and performance-driven applications. I focus on creating clean, maintainable code and seamless user experiences.
                </p>
                <p>
                  Whether it's developing a multi-tenant SaaS application or a high-performance academic workspace, my goal is to deliver tangible business value through robust technical solutions. I thrive in environments where I can tackle complex problems and deliver accessible, user-centric products.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/Nadra_Saputra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <a
                  href="mailto:cey0@proton.me"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg border border-white/10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Column: Hard Skills & Quick Facts */}
            <div className="flex-1 w-full space-y-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technical Arsenal
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Vue", "Nuxt", "TailwindCSS", "JavaScript", "TypeScript"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-zinc-300 font-medium">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Backend & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Fastify", "Prisma", "REST APIs", "Git"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-zinc-300 font-medium">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center">
                   <div className="text-3xl font-bold text-emerald-400 mb-1">3+</div>
                   <div className="text-sm text-zinc-400 font-medium">Years Experience</div>
                 </div>
                 <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center">
                   <div className="text-3xl font-bold text-cyan-400 mb-1">15+</div>
                   <div className="text-sm text-zinc-400 font-medium">Projects Delivered</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="project"
        className="relative min-h-screen py-32 px-6 lg:px-12"
      >
        <div className="absolute top-[20%] right-0 w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto w-full z-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Selected Work
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
            </div>
            <a href="#" className="group flex items-center gap-2 text-zinc-400 font-medium hover:text-emerald-400 transition-colors">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.3)] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-56 w-full relative overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60 z-10" />
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  
                  {/* Floating tags */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-emerald-300">
                      Case Study
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-white/5 text-zinc-300 text-xs font-medium rounded-md border border-white/5">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between text-emerald-400 font-medium text-sm group/btn">
                    <span>Explore Project</span>
                    <span className="p-2 bg-emerald-500/10 rounded-full group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
                      <svg className="w-4 h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-lg py-12 text-center mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to collaborate?</h2>
          <a href="mailto:cey0@proton.me" className="inline-flex items-center gap-2 bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-emerald-400 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] mb-12">
            Get In Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4 border-t border-white/5 pt-8">
            <p>© {new Date().getFullYear()} Nadra Zaki Saputra. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with <span className="text-emerald-500">💚</span> and sustainable logic
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"></div>
          
          <div 
            className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all font-bold cursor-pointer border border-white/10 hover:border-emerald-400"
            >
              ✕
            </button>
            
            <div className="w-full h-64 sm:h-[400px] relative shrink-0 bg-zinc-900 border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80 z-10" />
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            
            <div className="p-8 sm:p-10 overflow-y-auto relative z-20 -mt-20">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-black/60 backdrop-blur-md text-emerald-300 text-sm font-medium rounded-full border border-emerald-500/20 shadow-sm">{tech}</span>
                ))}
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{selectedProject.title}</h3>
              
              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-4 mb-10">
                <p className="text-lg font-medium text-zinc-200">{selectedProject.description}</p>
                <div className="h-px w-full bg-white/10 my-6"></div>
                <p>{selectedProject.fullDescription}</p>
              </div>
              
              <a 
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-emerald-400 hover:text-white transition-all shadow-lg hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] w-full sm:w-auto gap-2"
              >
                Visit Live Project
                <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
