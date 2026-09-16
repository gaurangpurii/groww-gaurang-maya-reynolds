const areas = ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "CBT", "Mindfulness", "Body-oriented work", "High internal pressure"];
export default function Expertise() {
  return (
    <section className="bg-primary py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="text-sm font-medium uppercase tracking-[0.18em] text-secondary">Areas of expertise</p><h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-4xl">You deserve a place where your story is heard, valued, and understood.</h2></div>
          <p className="max-w-2xl leading-8 text-white/80">I support adults navigating anxiety, panic, trauma, burnout, perfectionism, and high internal pressure, using practical tools alongside space for reflection and depth.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">{areas.map((a) => <span key={a} className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/90">{a}</span>)}</div>
      </div>
    </section>
  );
}
