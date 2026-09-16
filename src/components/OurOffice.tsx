export default function OurOffice() {
  return (
    <section id="office" className="bg-secondary/45 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_.8fr]">
          <div><p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">A calm space for healing</p><h2 className="mt-3 font-serif text-3xl text-primary-dark md:text-4xl">Our Office</h2></div>
          <p className="leading-7 text-foreground/70">My Santa Monica office is quiet, private, and uncluttered, with natural light and a comfortable atmosphere designed to help you feel more at ease when you arrive.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-[1.15fr_.85fr]">
          <div className="overflow-hidden rounded-[2rem]"><img src="/images/office/office-1.jpeg" alt="Dr. Maya Reynolds therapy office" className="h-[420px] w-full object-cover md:h-[480px]" /></div>
          <div className="overflow-hidden rounded-[2rem]"><img src="/images/office/office-2.jpeg" alt="Seating area inside Dr. Maya Reynolds therapy office" className="h-[420px] w-full object-cover md:h-[480px]" /></div>
        </div>
        <div className="mt-8 grid gap-6 rounded-[1.5rem] bg-background p-7 sm:grid-cols-2"><div><h3 className="font-serif text-lg text-primary-dark">Santa Monica</h3><p className="mt-1 text-sm leading-6 text-foreground/70">123th Street 45 W<br />Santa Monica, CA 90401</p></div><div><h3 className="font-serif text-lg text-primary-dark">In-person + telehealth</h3><p className="mt-1 text-sm leading-6 text-foreground/70">In-person therapy from the office, plus secure telehealth sessions for clients located in California.</p></div></div>
      </div>
    </section>
  );
}
