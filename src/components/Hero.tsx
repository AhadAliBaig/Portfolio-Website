import { useState, useEffect, useMemo } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Ahad Baig";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const taglines = useMemo(
    () => [
      "Building backend systems & APIs",
      "Transforming data into insights",
      "Solving problems with clean code",
    ],
    []
  );
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineText, setTaglineText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[taglineIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTaglineText(currentTagline.substring(0, taglineText.length + 1));
        if (taglineText === currentTagline) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTaglineText(currentTagline.substring(0, taglineText.length - 1));
        if (taglineText === "") {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [taglineText, isDeleting, taglineIndex, taglines]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian-dark pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#484848 1px, transparent 1px), linear-gradient(90deg, #484848 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="z-10 max-w-4xl w-full px-6">
        <div className="font-mono text-cyan-glow text-base mb-4 opacity-70">
          ~/portfolio $ whoami
        </div>
        
        <h1 className="font-headline font-extrabold text-6xl md:text-8xl tracking-tighter text-aluminum mb-2 uppercase">
          {text}<span className="animate-pulse text-cyan-glow">_</span>
        </h1>
        
        <div className="font-mono text-xl md:text-2xl text-aluminum/60 mb-8 h-8">
          <span className="text-cyan-glow">// </span>
          {taglineText}
          <span className="border-r-2 border-cyan-glow ml-1 animate-blink-caret" />
        </div>

        <p className="font-body text-aluminum/70 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
          Fourth-year CS student at UNBC. I like building backends, working with data, and
          shipping dependable software and I&apos;m open to internships or early-career roles
          in engineering, backends, or analytics.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="#projects"
            className="bg-aluminum text-obsidian-dark font-mono text-sm font-bold tracking-wider uppercase px-10 py-4 hover:bg-cyan-glow transition-all active:scale-95 text-center"
          >
            Audit Projects
          </a>
          <a 
            href="/Resume.pdf"
            target="_blank"
            className="border border-outline-v/30 text-aluminum font-mono text-sm font-bold tracking-wider uppercase px-10 py-4 hover:border-cyan-glow hover:text-cyan-glow transition-all active:scale-95 text-center"
          >
            Request Resume
          </a>
        </div>

        <div className="mt-12 p-5 sm:p-6 bg-charcoal-low border border-outline-v/10 rounded-sm max-w-lg">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-pulse shrink-0" />
            <span className="font-mono text-sm sm:text-base uppercase tracking-wider text-cyan-glow">
              Infrastructure Status
            </span>
          </div>
          <p className="font-mono text-base sm:text-lg text-aluminum/80 leading-relaxed mb-4">
            This site runs on my own Oracle Cloud server. I handle deployment, CI/CD, and infrastructure just like a production application.
          </p>
          <a
            href="https://stats.uptimerobot.com/jBqpMwt8qI/802770866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-glow hover:text-aluminum border-b border-cyan-glow/50 hover:border-aluminum pb-0.5 transition-colors"
          >
            External uptime &amp; response metrics (UptimeRobot)
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Decorative Wireframe */}
      <div className="absolute bottom-12 right-12 w-48 h-48 pointer-events-none opacity-10 hidden md:block">
        <svg className="w-full h-full stroke-aluminum fill-none stroke-[0.5]" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" />
          <circle cx="50" cy="50" r="30" />
          <line x1="10" y1="10" x2="90" y2="90" />
          <line x1="90" y1="10" x2="10" y2="90" />
        </svg>
      </div>
    </section>
  );
}
