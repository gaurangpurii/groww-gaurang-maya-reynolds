const specialties = [
  ["Anxiety & Panic", "Support for constant worry, racing thoughts, tension, panic, difficulty sleeping, and the feeling that you are always bracing for something to go wrong."],
  ["Trauma", "Carefully paced work for single-incident trauma and complex, long-standing patterns connected to childhood, relationships, or chronic stress."],
  ["EMDR", "EMDR can be integrated when it is an appropriate fit within a carefully paced trauma-focused process centered on safety and stabilization."],
  ["Burnout & Perfectionism", "Support for professionals, entrepreneurs, and creatives who feel disconnected from themselves after years of pushing through stress and high internal pressure."],
];
export default function Specialties() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div><p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Our specialties</p><h2 className="mt-3 font-serif text-3xl leading-tight text-primary-dark md:text-4xl">Honoring where you’ve been &amp; helping shape where you’re headed.</h2></div>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {specialties.map(([title, body]) => <div key={title} className="border-t border-primary/15 pt-5"><h3 className="font-serif text-xl text-primary-dark">{title}</h3><p className="mt-2 text-sm leading-7 text-foreground/70">{body}</p><a href="#contact" className="mt-4 inline-block text-sm font-semibold text-primary">Learn more →</a></div>)}
        </div>
      </div>
    </section>
  );
}
