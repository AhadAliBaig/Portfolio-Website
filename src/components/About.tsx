import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES, EDUCATION } from "../constants";
import { GraduationCap, MapPin, Code2, Briefcase, BookOpen, Github } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "github", label: "GitHub", icon: Github },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_#00e3fd]" />
        <h2 className="font-mono text-base uppercase tracking-[0.3em] text-aluminum">About Me</h2>
        <div className="flex-grow h-px bg-outline-v/20" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="md:col-span-2 md:row-span-2 bento-card flex flex-col justify-center">
          <h3 className="font-headline font-bold text-3xl md:text-4xl tracking-tight text-aluminum mb-4 uppercase">Hey, I'm Ahad</h3>
          <p className="text-aluminum/70 text-base md:text-lg leading-relaxed">
            CS student at UNBC focused on backend development, data analysis, and DevOps. 
            I enjoy building APIs, working with data pipelines, and deploying applications to the cloud.
          </p>
        </div>

        <div className="bento-card flex flex-col items-center justify-center text-center">
          <GraduationCap className="w-6 h-6 text-cyan-glow mb-2" />
          <div className="font-mono text-sm uppercase tracking-wider text-aluminum/40">UNBC</div>
          <div className="font-bold text-sm text-aluminum">B.Sc. Computer Science</div>
        </div>

        <div className="bento-card flex flex-col items-center justify-center text-center">
          <MapPin className="w-6 h-6 text-cyan-glow mb-2" />
          <div className="font-mono text-sm uppercase tracking-wider text-aluminum/40">Canada</div>
          <div className="font-bold text-sm text-aluminum">Prince George, BC</div>
        </div>

        <div className="md:col-span-2 bento-card">
          <div className="font-mono text-sm uppercase tracking-wider text-aluminum/40 mb-4">Tech Stack</div>
          <div className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "AWS"].map((tech) => (
              <span key={tech} className="font-mono text-sm px-2 py-1 bg-charcoal border border-outline-v/20 text-aluminum/60 uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      

      {/* Tabs Section */}
      <div className="bg-charcoal-low border border-outline-v/15 rounded-sm overflow-hidden">
        <div className="flex border-b border-outline-v/15 bg-obsidian-dark">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-mono text-sm uppercase tracking-wider transition-all ${
                activeTab === tab.id 
                ? "text-cyan-glow bg-charcoal border-b-2 border-cyan-glow" 
                : "text-aluminum/40 hover:text-aluminum hover:bg-charcoal/50"
              }`}
            >
              <tab.icon className="w-3 h-3" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-glow mb-4">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "JavaScript", "TypeScript", "SQL"].map(s => <SkillBadge key={s} name={s} />)}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-glow mb-4">Backend & Web</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "React", "Angular", "Express", "PostgreSQL", "REST APIs"].map(s => <SkillBadge key={s} name={s} />)}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-glow mb-4">Data & ML</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Scikit-learn", "Tableau", "Power BI"].map(s => <SkillBadge key={s} name={s} />)}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-glow mb-4">DevOps & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Azure", "GitHub Actions", "CI/CD"].map(s => <SkillBadge key={s} name={s} />)}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-glow group-hover:scale-150 transition-transform" />
                      <div className="flex-grow w-px bg-outline-v/20 my-2" />
                    </div>
                    <div className="pb-6">
                      <div className="font-mono text-sm text-cyan-glow mb-1">{exp.year} | {exp.location}</div>
                      <div className="font-bold text-aluminum text-lg">{exp.role}</div>
                      <div className="font-mono text-sm text-aluminum/40">{exp.company}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div>
                  <div className="font-mono text-sm text-cyan-glow mb-1">{EDUCATION.period} | {EDUCATION.location}</div>
                  <div className="font-bold text-aluminum text-xl mb-1">{EDUCATION.institution}</div>
                  <div className="text-aluminum/70 mb-4">{EDUCATION.degree}</div>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.courses.map(c => (
                      <span key={c} className="text-sm text-aluminum/40 border border-outline-v/10 px-2 py-0.5 rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-glow">Awards</h4>
                  {EDUCATION.awards.map((a, i) => (
                    <div key={i} className="p-4 bg-charcoal border border-outline-v/10 rounded-sm">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-bold text-aluminum">{a.title}</div>
                        <div className="font-mono text-sm text-cyan-glow">{a.date}</div>
                      </div>
                      <div className="text-sm text-aluminum/50">{a.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "github" && (
              <motion.div
                key="github"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                  <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=AhadAliBaig&theme=dark&hide_border=true&background=0e0e0e&stroke=00e3fd&ring=00e3fd&fire=00e3fd&currStreakLabel=00e3fd" 
                    alt="GitHub Streak"
                    className="w-full rounded-sm border border-outline-v/10"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://ghchart.rshah.org/00e3fd/AhadAliBaig" 
                    alt="GitHub Contributions"
                    className="w-full rounded-sm border border-outline-v/10 p-4 bg-obsidian-dark"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <a 
                  href="https://github.com/AhadAliBaig"
                  target="_blank"
                  className="flex items-center gap-2 font-mono text-sm text-cyan-glow hover:underline"
                >
                  View Full Profile <Github className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="font-mono text-sm px-3 py-1.5 bg-charcoal border border-outline-v/20 text-aluminum hover:border-cyan-glow hover:text-cyan-glow transition-colors uppercase">
      {name}
    </span>
  );
}
