import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-glow to-transparent z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={cn(
          "fixed top-1 w-full h-14 flex items-center justify-between px-6 z-[90] transition-all duration-300 border-b",
          isScrolled
            ? "bg-obsidian-dark/80 backdrop-blur-md border-outline-v/20"
            : "bg-transparent border-transparent",
          !isVisible && "translate-y-[-100%]"
        )}
      >
        <a href="#hero" className="flex items-center shrink-0" onClick={closeMenu}>
          <img
            src="/images/Submark.png"
            alt="Ahad Baig"
            className="h-9 w-auto max-w-[130px] object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider text-aluminum/70 hover:text-cyan-glow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-aluminum text-obsidian-dark font-mono text-sm font-bold px-4 py-2 uppercase tracking-wider hover:bg-cyan-glow transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="text-aluminum p-2 -mr-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[85] bg-obsidian-dark/98 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-8 transition-opacity duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className="font-mono text-2xl uppercase tracking-wide text-aluminum hover:text-cyan-glow transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="bg-aluminum text-obsidian-dark font-mono text-sm font-bold px-8 py-3 uppercase tracking-wider hover:bg-cyan-glow transition-colors"
        >
          Resume
        </a>
      </div>
    </>
  );
}
