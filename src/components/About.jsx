import React from 'react';

export default function About() {
  return (
    <section id="apie" className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.08),transparent_40%),radial-gradient(circle_at_100%_80%,rgba(239,68,68,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900">Apie mus</h2>
            <p className="mt-3 text-slate-600">Craftsmanship. Collaboration. Clarity.</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-slate-700">
              Esame profesionalų komanda, kuri tiki kruopščia meistryste ir glaudžiu bendradarbiavimu. Mūsų tikslas – suprasti jūsų verslo esmę ir ją išversti į aiškų, estetišką ir efektyvų skaitmeninį sprendimą. Dirbame su įvairaus dydžio ir sektorių organizacijomis – nuo ambicingų startuolių iki brandžių įmonių – Lietuvoje ir užsienyje.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-500">Požiūris</p>
                <p className="mt-1 font-semibold text-slate-900">Strategija + Dizainas + Technologijos</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-500">Vertybės</p>
                <p className="mt-1 font-semibold text-slate-900">Patikimumas, kokybė ir skaidrumas</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-500">Standartai</p>
                <p className="mt-1 font-semibold text-slate-900">World-class execution, local roots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
