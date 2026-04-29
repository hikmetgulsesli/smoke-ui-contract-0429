// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa - Alışkanlık Takibi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaAliskanlikTakibiProps {}

export function AnaSayfaAliskanlikTakibi(props: AnaSayfaAliskanlikTakibiProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-slate-950/80 backdrop-blur-md text-blue-600 font-sans antialiased text-slate-200 docked full-width top-0 border-b border-slate-800 flat no shadows flex justify-between items-center w-full px-4 h-14 sticky z-40">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold tracking-tight text-white">smoke-ui-contract-0429</span>
      </div>
      {/* Desktop Nav Items (Hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-6">
      <a className="text-blue-500 font-semibold hover:bg-slate-800/50 transition-colors active:opacity-80 px-3 py-1.5 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="home">home</span>
                      Ana Sayfa
                  </a>
      <a className="text-slate-400 hover:bg-slate-800/50 transition-colors active:opacity-80 px-3 py-1.5 rounded-lg flex items-center gap-2" href="#">
      <span className="material-symbols-outlined text-[20px]" data-icon="equalizer">equalizer</span>
                      İstatistikler
                  </a>
      </nav>
      <div className="flex items-center gap-2">
      <button className="p-2 rounded-full hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-slate-200">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      <button className="p-2 rounded-full hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-slate-200">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      </div>
      </header>
      <main className="max-w-5xl mx-auto p-4 md:p-lg lg:p-xl space-y-xl md:space-y-2xl">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-white">Günlük Özet</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Bugün 12 Ekim, Perşembe. İyi çalışmalar.</p>
      </div>
      {/* Habit Form */}
      <form className="w-full md:w-auto flex items-center gap-sm">
      <div className="input-inset flex items-center rounded-lg px-md h-[40px] md:h-[48px] w-full md:w-64 transition-colors">
      <span className="material-symbols-outlined text-outline-variant mr-sm text-[20px]" data-icon="add_task">add_task</span>
      <input className="bg-transparent border-none focus:ring-0 text-white w-full h-full text-body-sm placeholder:text-outline-variant p-0" placeholder="Yeni alışkanlık ekle..." type="text" />
      </div>
      <button className="bg-primary-container text-white h-[40px] md:h-[48px] px-lg rounded-lg font-body-sm font-medium hover:bg-blue-500 transition-colors flex-shrink-0" type="button">
                          Ekle
                      </button>
      </form>
      </div>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Stat Card 1 */}
      <div className="surface-card rounded-xl p-lg flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-md opacity-10">
      <span className="material-symbols-outlined text-[64px]" data-icon="checklist">checklist</span>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Toplam Alışkanlık</span>
      <div className="flex items-end gap-sm">
      <span className="font-h1 text-[40px] leading-none text-white font-bold">12</span>
      <span className="font-body-sm text-body-sm text-outline mb-1">aktif</span>
      </div>
      </div>
      {/* Stat Card 2 */}
      <div className="surface-card rounded-xl p-lg flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-md opacity-10">
      <span className="material-symbols-outlined text-[64px] text-secondary-container" data-icon="task_alt">task_alt</span>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Bugün Tamamlanan</span>
      <div className="flex items-end gap-sm">
      <span className="font-h1 text-[40px] leading-none text-white font-bold text-secondary-fixed">5</span>
      <span className="font-body-sm text-body-sm text-outline mb-1">/ 8 planlanan</span>
      </div>
      </div>
      {/* Stat Card 3 */}
      <div className="surface-card rounded-xl p-lg flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-md opacity-10">
      <span className="material-symbols-outlined text-[64px] text-primary-container" data-icon="donut_large">donut_large</span>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Tamamlanma Oranı (%)</span>
      <div className="flex items-center gap-md h-full mt-2">
      {/* Progress Ring CSS */}
      <div className="relative w-16 h-16 flex-shrink-0">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
      <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
      <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="62, 100" strokeWidth="4"></path>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-body-sm text-body-sm font-bold text-white">62%</span>
      </div>
      </div>
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-surface-tint">İyi gidiyorsun</span>
      <span className="font-label-caps text-[10px] text-outline-variant">+5% dünden</span>
      </div>
      </div>
      </div>
      </div>
      {/* Main Content Area */}
      <div className="space-y-lg">
      {/* Filter Bar */}
      <div className="flex items-center justify-between border-b border-surface-variant pb-md">
      <h2 className="font-h3 text-h3 text-white hidden md:block">Günlük Görevler</h2>
      <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg w-full md:w-auto">
      <button className="flex-1 md:flex-none px-lg py-1.5 rounded bg-surface-variant text-white font-body-sm text-body-sm font-medium shadow-sm">Tümü</button>
      <button className="flex-1 md:flex-none px-lg py-1.5 rounded text-on-surface-variant hover:text-white font-body-sm text-body-sm transition-colors">Tamamlanan</button>
      <button className="flex-1 md:flex-none px-lg py-1.5 rounded text-on-surface-variant hover:text-white font-body-sm text-body-sm transition-colors">Bekleyen</button>
      </div>
      </div>
      {/* Habit List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Completed Habit Card */}
      <div className="surface-card rounded-xl p-md flex items-center gap-md group hover:border-surface-variant transition-colors">
      <button className="w-6 h-6 rounded-full bg-secondary-container text-white flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-[16px]" data-icon="check" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
      </button>
      <div className="flex-1 min-w-0">
      <h3 className="font-body-md text-body-md text-outline line-through truncate">Sabah koşusu (30 dk)</h3>
      <div className="flex items-center gap-2 mt-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#334155] text-[10px] font-label-caps text-outline-variant">Sağlık</span>
      <span className="text-[10px] text-secondary-fixed flex items-center gap-1"><span className="material-symbols-outlined text-[12px]" data-icon="local_fire_department">local_fire_department</span> 5 Gün</span>
      </div>
      </div>
      </div>
      {/* Pending Habit Card */}
      <div className="surface-card rounded-xl p-md flex items-center gap-md group hover:border-surface-variant transition-colors border-l-2 border-l-primary-container">
      <button className="w-6 h-6 rounded-full border-2 border-outline hover:border-primary-container flex items-center justify-center flex-shrink-0 transition-colors">
      </button>
      <div className="flex-1 min-w-0">
      <h3 className="font-body-md text-body-md text-white font-medium truncate">Kitap Oku (20 sayfa)</h3>
      <div className="flex items-center gap-2 mt-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#334155] text-[10px] font-label-caps text-outline-variant">Gelişim</span>
      </div>
      </div>
      </div>
      {/* Pending Habit Card 2 */}
      <div className="surface-card rounded-xl p-md flex items-center gap-md group hover:border-surface-variant transition-colors border-l-2 border-l-primary-container">
      <button className="w-6 h-6 rounded-full border-2 border-outline hover:border-primary-container flex items-center justify-center flex-shrink-0 transition-colors">
      </button>
      <div className="flex-1 min-w-0">
      <h3 className="font-body-md text-body-md text-white font-medium truncate">Su İç (2 Litre)</h3>
      <div className="flex items-center gap-2 mt-1">
      <div className="flex gap-1">
      <div className="w-4 h-4 rounded-sm bg-primary-container/20 border border-primary-container/50"></div>
      <div className="w-4 h-4 rounded-sm bg-primary-container/20 border border-primary-container/50"></div>
      <div className="w-4 h-4 rounded-sm border border-[#334155]"></div>
      <div className="w-4 h-4 rounded-sm border border-[#334155]"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Pending Habit Card 3 */}
      <div className="surface-card rounded-xl p-md flex items-center gap-md group hover:border-surface-variant transition-colors">
      <button className="w-6 h-6 rounded-full border-2 border-outline hover:border-primary-container flex items-center justify-center flex-shrink-0 transition-colors">
      </button>
      <div className="flex-1 min-w-0">
      <h3 className="font-body-md text-body-md text-white font-medium truncate">Meditasyon (10 dk)</h3>
      <div className="flex items-center gap-2 mt-1">
      <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#334155] text-[10px] font-label-caps text-outline-variant">Zihin</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden bg-slate-900 text-blue-500 text-[11px] font-medium Inter docked full-width bottom-0 border-t border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe px-6">
      <a className="flex flex-col items-center justify-center text-blue-500 bg-blue-500/10 rounded-xl px-4 py-1 hover:text-slate-300 active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="home" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
                  Ana Sayfa
              </a>
      <a className="flex flex-col items-center justify-center text-slate-500 px-4 py-1 hover:text-slate-300 active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="equalizer">equalizer</span>
                  İstatistikler
              </a>
      </nav>
    </>
  );
}
