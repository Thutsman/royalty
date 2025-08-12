export default function Testimonials() {
  const items = [
    { quote: "Royalty delivered on time and exceeded quality expectations.", author: "C Masuku, Care Construction (Developer)" },
    { quote: "Professional team with strong project coordination.", author: "Eng S.T Zondo, City of Bulawayo" },
  ];
  return (
    <section className="container py-20">
      <h2 className="section-title text-2xl md:text-3xl">Client Testimonials</h2>
      <p className="subtle mt-2">What our clients say.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((t) => (
          <blockquote key={t.author} className="card p-6 bg-gradient-to-br from-white to-slate-50">
            <p className="text-[color:var(--foreground)] text-lg">“{t.quote}”</p>
            <footer className="subtle mt-3">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}


