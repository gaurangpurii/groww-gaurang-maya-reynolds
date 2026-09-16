const links = [
  { href: "#about", label: "About" },
  { href: "#support", label: "Who I Help" },
  { href: "#services", label: "Specialties" },
  { href: "#office", label: "Our Office" },
  { href: "#faq", label: "FAQs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg tracking-wide text-primary">
          Dr. Maya Reynolds, <span className="italic">PsyD</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-foreground/80 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-dark">
            Book a Consultation
          </a>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-primary/20 px-3 py-2 text-sm text-primary" aria-label="Open menu">Menu</summary>
            <nav className="absolute right-0 mt-2 w-52 rounded-2xl border border-primary/10 bg-background p-3 shadow-xl">
              {links.map((l) => <a key={l.href} href={l.href} className="block rounded-xl px-3 py-2.5 text-sm hover:bg-secondary">{l.label}</a>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
