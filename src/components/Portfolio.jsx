import React from 'react';
import { Star } from 'lucide-react';

const projects = [
  { name: 'Aukštaitija Craft', tag: 'Brand website', tone: 'from-emerald-500 to-amber-400' },
  { name: 'Baltic Waves', tag: 'Tourism portal', tone: 'from-emerald-600 to-emerald-400' },
  { name: 'Amber & Co.', tag: 'E‑commerce', tone: 'from-amber-400 to-red-400' },
  { name: 'Forest Labs', tag: 'Startup site', tone: 'from-emerald-500 to-emerald-700' },
];

const testimonials = [
  {
    name: 'Gabija, marketingo vadovė',
    quote:
      'Profesionali komanda, kuri girdi ir pasiūlo geriausią kelią. Rezultatas – greita ir konvertuojanti svetainė.',
  },
  {
    name: 'Mantas, įkūrėjas',
    quote:
      'Aiškus procesas nuo konsultacijos iki paleidimo. Jaučiama meistrystė kiekvienoje detalėje.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Darbai ir atsiliepimai</h2>
          <p className="mt-2 text-slate-600">Atrinkti projektai ir klientų įžvalgos.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
              <div className={`aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br ${p.tone}`}></div>
              <div className="mt-3">
                <p className="text-sm text-slate-500">{p.tag}</p>
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Kaip dirbame</h3>
              <p className="mt-1 text-slate-300">Aiškus 4 žingsnių procesas nuo idėjos iki paleidimo.</p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 md:w-auto">
              {['Konsultacija', 'Dizainas', 'Programavimas', 'Paleidimas'].map((step, idx) => (
                <div key={step} className="rounded-lg bg-white/10 px-3 py-2 text-center text-sm">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">{idx + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
