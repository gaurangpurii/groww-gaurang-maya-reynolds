export default function Intro() {
  const image = "https://images.pexels.com/photos/37129604/pexels-photo-37129604.jpeg?cs=srgb&dl=pexels-mavihnt-37129604.jpg&fm=jpg";
  return (
    <section id="about" className="bg-secondary/50 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[.92fr_1.08fr]">
        <div className="overflow-hidden rounded-[2rem]">
          <img src={image} alt="Person reflecting and journaling in a calm setting" className="h-[420px] w-full object-cover md:h-[500px]" />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">You deserve support that feels human</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-primary-dark md:text-4xl">You can be high-functioning and still feel overwhelmed.</h2>
          <p className="mt-5 leading-8 text-foreground/70">Many of the adults I work with are thoughtful, self-aware, and successful on the outside — while privately feeling exhausted, stuck in overthinking, or emotionally on edge.</p>
          <p className="mt-4 leading-8 text-foreground/70">Therapy can become a place to slow down, understand what your mind and body are responding to, and develop more sustainable ways of living and working.</p>
          <a href="#contact" className="mt-7 inline-block text-sm font-semibold text-primary underline decoration-accent underline-offset-4">See if we may be a good fit →</a>
        </div>
      </div>
    </section>
  );
}
