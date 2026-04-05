import { Github, Linkedin, Mail, MapPin, Send, type LucideIcon } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_FORM_ID || "mvzbrped"
  );

  return (
    <section id="contact" className="pt-16 md:pt-20 pb-10 md:pb-12 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_#00e3fd]" />
        <h2 className="font-mono text-base uppercase tracking-[0.3em] text-aluminum">
          Contact Me
        </h2>
        <div className="flex-grow h-px bg-outline-v/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="font-headline font-extrabold text-5xl md:text-6xl text-aluminum mb-6 uppercase tracking-tight">
            Let&apos;s Connect
          </h3>
          <p className="text-aluminum/60 text-lg md:text-xl leading-relaxed mb-10">
            I&apos;m most interested in software engineering, backend work, and data analytics.
            If you have something that might be a fit or you just want to talk shop, send a
            message. I&apos;m always happy to connect.
          </p>

          <div className="space-y-6">
            <ContactInfo
              icon={Mail}
              label="Email"
              value="ahadalibaig689@gmail.com"
              href="mailto:ahadalibaig689@gmail.com"
              external={false}
            />
            <ContactInfo
              icon={Github}
              label="GitHub"
              value="github.com/AhadAliBaig"
              href="https://github.com/AhadAliBaig"
              external
            />
            <ContactInfo
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/ahadalibaig"
              href="https://www.linkedin.com/in/ahadalibaig/"
              external
            />
          </div>

          <div className="mt-12 p-6 bg-charcoal-low border border-outline-v/15 rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-glow" />
              </div>
              <span className="font-mono text-sm uppercase tracking-wider text-aluminum">
                Available for New Challenges
              </span>
            </div>
            <div className="flex items-center gap-2 text-aluminum/40">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono text-sm uppercase tracking-wider">
                Prince George, BC, Canada
              </span>
            </div>
          </div>
        </div>

        <div className="bg-charcoal-low border border-outline-v/15 p-8 md:p-12 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {state.succeeded && (
              <p className="font-mono text-sm text-cyan-glow text-center uppercase tracking-wider">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {state.errors && Object.keys(state.errors).length > 0 && (
              <p className="font-mono text-sm text-red-500 text-center uppercase tracking-wider">
                Failed to send message. Please try again or contact me directly
                via email.
              </p>
            )}

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-sm uppercase tracking-wider text-aluminum/40 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                disabled={state.submitting}
                className="w-full bg-obsidian border border-outline-v/20 p-4 font-mono text-base text-aluminum focus:outline-none focus:border-cyan-glow transition-colors"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block font-mono text-sm uppercase tracking-wider text-aluminum/40 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Subject for the email"
                disabled={state.submitting}
                className="w-full bg-obsidian border border-outline-v/20 p-4 font-mono text-base text-aluminum focus:outline-none focus:border-cyan-glow transition-colors"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-sm uppercase tracking-wider text-aluminum/40 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message here..."
                disabled={state.submitting}
                className="w-full bg-obsidian border border-outline-v/20 p-4 font-mono text-base text-aluminum focus:outline-none focus:border-cyan-glow transition-colors resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full flex items-center justify-center gap-3 bg-aluminum text-obsidian-dark font-mono text-sm font-bold py-4 uppercase tracking-wider hover:bg-cyan-glow transition-all active:scale-95 disabled:opacity-50"
            >
              {state.submitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-4 group"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-charcoal border border-outline-v/15 text-aluminum/40 group-hover:text-cyan-glow group-hover:border-cyan-glow transition-all">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-wider text-aluminum/30">
          {label}
        </div>
        <div className="font-mono text-sm text-aluminum group-hover:text-cyan-glow transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}
