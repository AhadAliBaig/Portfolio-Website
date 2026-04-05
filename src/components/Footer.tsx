import { Activity, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-10 bg-obsidian-dark border-t border-outline-v/10 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src="/images/Submark.png"
            alt="Ahad Baig"
            className="h-8 w-auto max-w-[110px] object-contain opacity-90"
          />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
            © {new Date().getFullYear()} Ahad Baig. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-700">
            Built with React + TypeScript
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <a
            href="https://github.com/AhadAliBaig"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-cyan-glow transition-colors flex items-center gap-2"
          >
            <Github className="w-3 h-3" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahadalibaig/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-cyan-glow transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-3 h-3" /> LinkedIn
          </a>
          <a
            href="https://stats.uptimerobot.com/jBqpMwt8qI/802770866"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-glow transition-colors"
          >
            <Activity className="w-3 h-3" />
            Live status
          </a>
        </div>
      </div>
    </footer>
  );
}
