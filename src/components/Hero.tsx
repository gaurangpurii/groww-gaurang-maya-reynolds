export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-24 md:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">In-person in Santa Monica &amp; telehealth across California</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] text-primary-dark md:text-5xl lg:text-6xl">Therapy for anxiety, trauma &amp; burnout — with space to breathe.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-foreground/70">Warm, collaborative therapy for adults who look capable on the outside but feel exhausted, overextended, or on edge inside.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition hover:bg-primary-dark">Book a Consultation</a>
            <a href="#support" className="rounded-full border border-primary/25 px-7 py-3.5 text-sm font-medium text-primary transition hover:bg-primary/5">Explore Support</a>
          </div>
          <p className="mt-6 text-sm text-foreground/55">Licensed Clinical Psychologist · PsyD · Santa Monica, CA</p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary shadow-sm">
          <img src="/images/maya-portrait.png" alt="Dr. Maya Reynolds, PsyD" className="h-[500px] w-full object-cover object-top sm:h-[560px] lg:h-[610px]" />
          <div className="absolute bottom-5 left-5 right-5 max-w-sm rounded-2xl bg-background/95 p-4 shadow-lg backdrop-blur">
            <p className="font-serif text-lg text-primary-dark">A calm, grounded place to begin.</p>
            <p className="mt-1 text-xs leading-5 text-foreground/65">A private Santa Monica office and secure telehealth for clients across California.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
