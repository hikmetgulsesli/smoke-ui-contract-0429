// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler - İlerleme Analizi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface IstatistiklerIlerlemeAnaliziProps {}

export function IstatistiklerIlerlemeAnalizi(props: IstatistiklerIlerlemeAnaliziProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-slate-950/80 backdrop-blur-md font-sans antialiased text-slate-200 border-b border-slate-800 flex justify-between items-center w-full px-4 h-14 sticky top-0 z-40 hidden md:flex">
      <div className="text-lg font-bold tracking-tight text-white">smoke-ui-contract-0429</div>
      <nav className="flex gap-6 h-full items-center">
      <a className="text-slate-400 hover:bg-slate-800/50 transition-colors h-full flex items-center px-2 active:opacity-80" href="#">Ana Sayfa</a>
      <a className="text-blue-500 font-semibold hover:bg-slate-800/50 transition-colors h-full flex items-center px-2 active:opacity-80" href="#">İstatistikler</a>
      </nav>
      <div className="flex gap-4">
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors p-2 rounded-full active:opacity-80">
      <span className="material-symbols-outlined">settings</span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors p-2 rounded-full active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      </div>
      </header>
      {/* Mobile Top Header (Just for brand on mobile) */}
      <header className="md:hidden bg-slate-950/80 backdrop-blur-md flex justify-between items-center w-full px-4 h-14 sticky top-0 z-40 border-b border-slate-800">
      <div className="text-lg font-bold tracking-tight text-white">smoke-ui-contract-0429</div>
      <div className="flex gap-2">
      <button className="text-slate-400 p-2"><span className="material-symbols-outlined">settings</span></button>
      <button className="text-slate-400 p-2"><span className="material-symbols-outlined">notifications</span></button>
      </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 lg:px-lg py-xl md:py-2xl flex flex-col gap-xl">
      {/* Page Title */}
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">İstatistikler</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Haftalık ve aylık performans özetiniz.</p>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
      {/* Weekly Summary Chart */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg col-span-1 md:col-span-2 lg:col-span-2 flex flex-col shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center mb-md">
      <h2 className="font-h3 text-h3 text-on-surface">Haftalık Tamamlama</h2>
      <span className="font-label-caps text-label-caps text-secondary px-2 py-1 border border-secondary-container rounded-DEFAULT">%85</span>
      </div>
      <div className="flex-1 flex items-end justify-between gap-2 mt-4 pt-4 border-t border-surface-variant">
      {/* Fake Bar Chart */}
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-primary-container rounded-t-sm transition-all duration-300 h-16 group-hover:bg-primary"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Pzt</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-primary-container rounded-t-sm transition-all duration-300 h-24 group-hover:bg-primary"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Sal</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-secondary-container rounded-t-sm transition-all duration-300 h-32 group-hover:bg-secondary-fixed"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Çar</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-primary-container rounded-t-sm transition-all duration-300 h-20 group-hover:bg-primary"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Per</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-primary-container rounded-t-sm transition-all duration-300 h-28 group-hover:bg-primary"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Cum</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-surface-variant rounded-t-sm transition-all duration-300 h-8 group-hover:bg-outline-variant"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Cts</span>
      </div>
      <div className="flex flex-col items-center gap-2 flex-1 group">
      <div className="w-full bg-surface-variant rounded-t-sm transition-all duration-300 h-4 group-hover:bg-outline-variant"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">Paz</span>
      </div>
      </div>
      </div>
      {/* Streak Cards Stack */}
      <div className="flex flex-col gap-lg col-span-1">
      {/* Current Streak */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex items-center justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]">
      <div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Mevcut Seri</p>
      <p className="font-h2 text-h2 text-secondary flex items-baseline gap-1">
                                  12 <span className="font-body-sm text-body-sm text-on-surface-variant">Gün</span>
      </p>
      </div>
      <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>local_fire_department</span>
      </div>
      </div>
      {/* Longest Streak */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex items-center justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]">
      <div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">En Uzun Seri</p>
      <p className="font-h2 text-h2 text-on-surface flex items-baseline gap-1">
                                  45 <span className="font-body-sm text-body-sm text-on-surface-variant">Gün</span>
      </p>
      </div>
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-outline">
      <span className="material-symbols-outlined">emoji_events</span>
      </div>
      </div>
      </div>
      {/* Category Breakdown */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg col-span-1 md:col-span-2 lg:col-span-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Kategori Dağılımı</h2>
      <div className="space-y-4">
      {/* Category 1 */}
      <div>
      <div className="flex justify-between items-center mb-1">
      <span className="font-body-sm text-body-sm text-on-surface">Sağlık</span>
      <span className="font-body-sm text-body-sm text-secondary-fixed-dim">%90</span>
      </div>
      <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-secondary-container rounded-full" style={{width: "90%"}}></div>
      </div>
      </div>
      {/* Category 2 */}
      <div>
      <div className="flex justify-between items-center mb-1">
      <span className="font-body-sm text-body-sm text-on-surface">İş</span>
      <span className="font-body-sm text-body-sm text-primary">%75</span>
      </div>
      <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary-container rounded-full" style={{width: "75%"}}></div>
      </div>
      </div>
      {/* Category 3 */}
      <div>
      <div className="flex justify-between items-center mb-1">
      <span className="font-body-sm text-body-sm text-on-surface">Öğrenme</span>
      <span className="font-body-sm text-body-sm text-tertiary-fixed-dim">%40</span>
      </div>
      <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-tertiary-container rounded-full" style={{width: "40%"}}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar */}
      <nav className="md:hidden bg-slate-900 text-[11px] font-medium Inter border-t border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe px-6">
      <a className="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:text-slate-300 active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-1">home</span>
                  Ana Sayfa
              </a>
      <a className="flex flex-col items-center justify-center text-blue-500 bg-blue-500/10 rounded-xl px-4 py-1 hover:text-slate-300 active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>equalizer</span>
                  İstatistikler
              </a>
      </nav>
    </>
  );
}
