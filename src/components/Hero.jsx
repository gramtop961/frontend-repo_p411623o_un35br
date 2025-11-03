import React from 'react';
import { Rocket, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with Lithuanian-inspired tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-amber-400/40 to-red-500/30 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20">
              <Globe className="h-4 w-4" /> Lietuviška kūryba. Pasauliniai standartai.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Kuriame svetaines, kurios įkvepia pasitikėjimą
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Aukštos kokybės, reaguojantys ir estetiški sprendimai verslui Lietuvoje ir už jos ribų. We blend strategy, design, and technology to build experiences that convert.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontaktai"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Rocket className="h-5 w-5" /> Gaukite pasiūlymą
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Peržiūrėti darbus
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" /> Patikimumas
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-amber-600" /> Globali perspektyva
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -right-6 bottom-0 h-56 w-56 rounded-full bg-amber-400/30 blur-3xl" />
            <div className="relative rounded-2xl bg-white/60 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-amber-400">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-center text-xl font-semibold text-white">
                    Lietuviškos miško žalumos ir gintaro šviesos įkvėptas dizainas
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
                <div className="rounded-lg bg-slate-50 p-3">Greita</div>
                <div className="rounded-lg bg-slate-50 p-3">Saugus</div>
                <div className="rounded-lg bg-slate-50 p-3">Reaguojantis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
