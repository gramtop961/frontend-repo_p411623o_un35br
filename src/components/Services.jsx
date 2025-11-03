import React from 'react';
import { Palette, Code, ShoppingCart, Search, Wrench } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Dizainas',
    desc: 'Modernus, minimalistinis ir pritaikytas jūsų prekės ženklui. UX/UI kūrimas, prototipai, dizaino sistemos.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Code,
    title: 'Programavimas',
    desc: 'Greitos, saugios ir reaguojančios svetainės su šiuolaikinėmis technologijomis. Performance-first.',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-komercija',
    desc: 'Pilni el. parduotuvių sprendimai: katalogas, apmokėjimai, integracijos, analitika.',
    color: 'from-red-400 to-red-500',
  },
  {
    icon: Search,
    title: 'SEO ir augimas',
    desc: 'Turinio architektūra, techninis SEO, našumo optimizavimas ir matuojami rezultatai.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Wrench,
    title: 'Priežiūra',
    desc: 'Nuolatiniai atnaujinimai, saugumo stebėsena ir pagalba. Mes esame šalia ilgajam etapui.',
    color: 'from-amber-400 to-amber-500',
  },
];

export default function Services() {
  return (
    <section id="paslaugos" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Paslaugos</h2>
          <p className="mt-2 text-slate-600">Verslui pritaikyti sprendimai nuo strategijos iki paleidimo.</p>
        </div>
        <a href="#kontaktai" className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm text-white ring-1 ring-slate-900/10 hover:bg-slate-800 md:block">
          Prašyti pasiūlymo
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-sm`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
