const people = [
  { title: "High-achieving adults", image: "https://images.pexels.com/photos/9063397/pexels-photo-9063397.jpeg?cs=srgb&dl=pexels-cottonbro-9063397.jpg&fm=jpg", alt: "Adult professional taking a pause during a stressful day", body: "For adults who are carrying constant worry, pressure, perfectionism, or the feeling that they always have to keep it together." },
  { title: "Entrepreneurs & creatives", image: "https://images.pexels.com/photos/6173659/pexels-photo-6173659.jpeg?cs=srgb&dl=pexels-anna-tarazevich-6173659.jpg&fm=jpg", alt: "Creative professional taking a reflective break", body: "A supportive space for people whose work is deeply connected to their identity and who want more sustainable ways of working and living." },
  { title: "Adults healing from trauma", image: "https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?cs=srgb&dl=pexels-shvets-production-7176027.jpg&fm=jpg", alt: "Therapist and adult client in a supportive conversation", body: "Carefully paced support for single-incident trauma and longer-standing patterns connected to childhood, relationships, or chronic stress." },
];

export default function Services() {
  return (
    <section id="support" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Who I Help</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-primary-dark md:text-4xl">A thoughtful place for adults who are ready to feel more like themselves.</h2>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {people.map((s) => (
          <article key={s.title} className="group">
            <div className="overflow-hidden rounded-[1.5rem] bg-secondary"><img src={s.image} alt={s.alt} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]" /></div>
            <h3 className="mt-5 font-serif text-xl text-primary-dark">{s.title}</h3>
            <p className="mt-2 text-sm leading-7 text-foreground/70">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
