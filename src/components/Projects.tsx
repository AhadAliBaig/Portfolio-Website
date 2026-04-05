import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import type { Project } from "../types";
import { ExternalLink, Github, X } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 px-6 bg-obsidian-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_#00e3fd]" />
          <h2 className="font-mono text-base uppercase tracking-[0.3em] text-aluminum">Projects</h2>
          <div className="flex-grow h-px bg-outline-v/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bento-card cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden mb-4 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-headline font-bold text-xl md:text-2xl text-aluminum mb-2 group-hover:text-cyan-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-aluminum/50 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="font-mono text-xs px-1.5 py-0.5 bg-charcoal border border-outline-v/10 text-aluminum/40 uppercase">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="font-mono text-xs px-1.5 py-0.5 text-aluminum/20 uppercase">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-aluminum/30 mb-4">Want to talk about how I built these?</p>
          <a 
            href="#contact"
            className="inline-block font-mono text-sm text-cyan-glow border-b border-cyan-glow pb-1 hover:text-aluminum hover:border-aluminum transition-all"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-charcoal-low border border-outline-v/20 rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-obsidian/50 text-aluminum hover:text-cyan-glow transition-colors rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="font-mono text-sm text-cyan-glow mb-2 uppercase tracking-wider">Project Details</div>
                <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-aluminum mb-6 uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-sm text-aluminum/40 uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-aluminum/70 text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm text-aluminum/40 uppercase tracking-wider mb-2">Impact & Results</h4>
                    <ul className="space-y-1">
                      {selectedProject.impactTags.map((tag, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-aluminum/60">
                          <div className="w-1 h-1 bg-cyan-glow rounded-full" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm text-aluminum/40 uppercase tracking-wider mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="font-mono text-xs px-2 py-1 bg-charcoal border border-outline-v/10 text-aluminum/60 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-aluminum text-obsidian-dark font-mono text-sm font-bold py-3 uppercase tracking-wider hover:bg-cyan-glow transition-colors"
                    >
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://github.com/AhadAliBaig"
                      target="_blank"
                      className="flex items-center justify-center p-3 border border-outline-v/20 text-aluminum hover:text-cyan-glow hover:border-cyan-glow transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
