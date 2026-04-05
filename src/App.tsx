import { useState, useEffect, type ReactNode } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ErrorBoundary({ children }: { children: ReactNode }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Uncaught error:", event.error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-obsidian-dark text-aluminum p-6 text-center">
        <h1 className="font-headline font-bold text-4xl mb-4 uppercase tracking-tighter text-aluminum">System Error</h1>
        <p className="font-mono text-sm text-aluminum/60 mb-8 max-w-md">
          The application encountered an unexpected state. Please refresh the page or check the console for details.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-aluminum text-obsidian-dark font-mono text-xs font-bold px-8 py-3 uppercase tracking-widest hover:bg-cyan-glow transition-colors"
        >
          Reboot System
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

function App() {
  return (
    <ErrorBoundary>
      <div className="relative bg-obsidian-dark selection:bg-cyan-glow selection:text-obsidian-dark overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
