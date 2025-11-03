import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-3 w-3 rounded-sm bg-emerald-600" />
            <span className="inline-block h-3 w-3 rounded-sm bg-amber-400" />
            <span className="inline-block h-3 w-3 rounded-sm bg-red-500" />
            <span className="ml-2">Flora Studio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#apie" className="hover:text-slate-900">Apie</a>
            <a href="#paslaugos" className="hover:text-slate-900">Paslaugos</a>
            <a href="#portfolio" className="hover:text-slate-900">Darbai</a>
            <a href="#kontaktai" className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Gaukite pasiūlymą</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />

        {/* Contact */}
        <section id="kontaktai" className="relative">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.08),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(245,158,11,0.1),transparent_35%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Susisiekime</h2>
                <p className="mt-2 text-slate-600">
                  Pasikalbėkime apie jūsų projektą. Atsakome per 1 darbo dieną. Let's build something great together.
                </p>
                <div className="mt-6 space-y-3 text-slate-700">
                  <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-emerald-600" /> +370 600 00000</p>
                  <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-500" /> hello@florastudio.lt</p>
                  <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-red-500" /> Vilnius, Lietuva</p>
                </div>
              </div>

              <form className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-sm font-medium text-slate-700">Vardas</label>
                    <input type="text" required className="w-full rounded-md border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Jūsų vardas" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-sm font-medium text-slate-700">El. paštas</label>
                    <input type="email" required className="w-full rounded-md border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="vardas@imone.lt" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-slate-700">Telefono numeris</label>
                    <input type="tel" className="w-full rounded-md border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="+370 6XX XXXXX" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-slate-700">Žinutė</label>
                    <textarea rows={4} required className="w-full resize-none rounded-md border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" placeholder="Trumpai apie projektą..." />
                  </div>
                </div>
                <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700">
                  Siųsti užklausą
                </button>
                <p className="mt-2 text-center text-xs text-slate-500">Pateikdami formą, sutinkate su privatumo politika.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Flora Studio — Lietuva</p>
            <div className="flex items-center gap-4">
              <a href="#apie" className="hover:text-slate-900">Apie</a>
              <a href="#paslaugos" className="hover:text-slate-900">Paslaugos</a>
              <a href="#portfolio" className="hover:text-slate-900">Darbai</a>
              <a href="#kontaktai" className="hover:text-slate-900">Kontaktai</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
