// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Sayfası - 404
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataSayfasi404Props {}

export function HataSayfasi404(props: HataSayfasi404Props) {
  return (
    <>
      {/* TopAppBar (Suppressed navigation shell logic applied - hidden since this is a 404 dead end, prioritizing content canvas) */}
      {/* However, the prompt specifically requested TopAppBar, so we will render it as a structural header but suppress global nav links per "Semantic Shell Mandate" for 404s. */}
      <header className="bg-slate-950/80 backdrop-blur-md flex justify-between items-center w-full px-4 h-14 font-sans antialiased text-slate-200 border-b border-slate-800 shadow-none z-50 fixed top-0">
      <div className="flex items-center gap-2">
      {/* Brand Logo from JSON */}
      <span className="text-lg font-bold tracking-tight text-white">smoke-ui-contract-0429</span>
      </div>
      {/* Trailing Icons from JSON */}
      <div className="flex items-center gap-lg">
      <button className="text-slate-400 hover:bg-slate-800/50 transition-colors active:opacity-80 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800/50 transition-colors active:opacity-80 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-3xl">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-xl">
      {/* Illustration / Icon */}
      <div className="relative w-32 h-32 flex items-center justify-center bg-surface-container rounded-full border border-surface-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),_0_2px_4px_-1px_rgba(0,0,0,0.1)] mb-lg">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
      <span className="material-symbols-outlined text-[64px] text-error" data-icon="error" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      </div>
      {/* Error Message */}
      <div className="flex flex-col gap-sm items-center">
      <h1 className="font-h1 text-h1 text-on-surface">404 - Sayfa Bulunamadı</h1>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                          Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
                      </p>
      </div>
      {/* Primary Action Button */}
      <button className="mt-lg flex items-center justify-center gap-2 bg-[#2563EB] text-[#FFFFFF] h-12 px-xl rounded-lg font-body-md text-body-md font-medium hover:bg-[#1D4ED8] transition-colors active:scale-[0.98] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),_0_2px_4px_-1px_rgba(0,0,0,0.1)] w-full sm:w-auto">
      <span className="material-symbols-outlined text-[20px]" data-icon="home">home</span>
                      Ana Sayfaya Dön
                  </button>
      {/* Decorative structural line */}
      <div className="w-12 h-1 bg-surface-variant rounded-full mt-3xl opacity-50"></div>
      </div>
      </main>
      {/* BottomNavBar Suppressed: Page intent is Error 404, logically not part of the global nav ecosystem */}
    </>
  );
}
