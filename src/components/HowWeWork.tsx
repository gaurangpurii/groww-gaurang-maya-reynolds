const sessionImage = "https://images.pexels.com/photos/7176050/pexels-photo-7176050.jpeg?cs=srgb&dl=pexels-shvets-production-7176050.jpg&fm=jpg";
export default function HowWeWork() {
  return (
    <section className="bg-secondary/45 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_.9fr]">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">How We Work</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-primary-dark md:text-4xl">Practical tools, with room for depth.</h2>
          <p className="mt-5 leading-8 text-foreground/70">Sessions are structured enough to feel supportive while still leaving space for reflection. I take a warm, collaborative, and grounded approach, adapting the work to your needs.</p>
          <p className="mt-4 leading-8 text-foreground/70">I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Trauma work is paced carefully, with an emphasis on safety, stabilization, and feeling more regulated in daily life.</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><img src={sessionImage} alt="Supportive therapy conversation" className="h-full w-full object-cover" /></div>
      </div>
    </section>
  );
}
