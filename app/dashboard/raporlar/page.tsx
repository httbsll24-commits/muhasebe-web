'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function RaporlarPage() {
  const raporlar = [
    { id: 'RPR-2026-03', ad: '2026 3. Çeyrek Mali Analiz & Kar-Zarar Raporu', tarih: '30.09.2026', tur: 'Mali Analiz', durum: 'Hazır' },
    { id: 'RPR-2026-02', ad: '2026 Ağustos Ayı KDV ve Vergi Yükü Özeti', tarih: '31.08.2026', tur: 'Vergi Raporu', durum: 'Hazır' },
    { id: 'RPR-2026-01', ad: '2026 2. Çeyrek Bilanço ve Gelir Tablosu', tarih: '30.06.2026', tur: 'Bilanço', durum: 'Hazır' },
  ];

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📈 Finansal Raporlar & Analizler</h1>
            <p className="text-slate-400 text-sm mt-1">Mali müşaviriniz tarafından hazırlanan periyodik bilanço, kar-zarar ve vergi raporlarınızı inceleyin.</p>
          </div>
        </div>

        {/* Özet Metrik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Yıllık Toplam Ciro</span>
            <div className="text-2xl font-bold text-slate-100 mt-1">185.400,00 ₺</div>
            <span className="text-[11px] text-emerald-400 font-semibold">↑ geçen yıla göre %18 artış</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Ortalama Aylık Vergi Yükü</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">14.200,00 ₺</div>
            <span className="text-[11px] text-slate-400">Matrah optimizasyonu uygulandı</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Net Kar Marjı</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">%34.5</div>
            <span className="text-[11px] text-slate-400">Sektör ortalamasının üzerinde</span>
          </div>
        </div>

        {/* Görsel Kar/Zarar Çubuğu */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mb-8">
          <h2 className="text-base font-bold text-slate-100 mb-4">📊 2026 Yılı Gelir / Gider Dağılım Oranı</h2>
          <div className="w-full bg-slate-800 h-6 rounded-full overflow-hidden flex">
            <div className="bg-emerald-500 h-full text-[10px] text-slate-950 font-bold flex items-center justify-center" style={{ width: '65%' }}>
              Gelir (%65)
            </div>
            <div className="bg-rose-500 h-full text-[10px] text-white font-bold flex items-center justify-center" style={{ width: '35%' }}>
              Gider (%35)
            </div>
          </div>
        </div>

        {/* Rapor İndirme Tablosu */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Rapor Kod</th>
                  <th className="p-4">Rapor Adı</th>
                  <th className="p-4">Rapor Türü</th>
                  <th className="p-4">Hazırlanma Tarihi</th>
                  <th className="p-4">Durum</th>
                  <th className="p-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {raporlar.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-mono text-amber-400 font-semibold">{item.id}</td>
                    <td className="p-4 font-medium text-slate-100">{item.ad}</td>
                    <td className="p-4 text-slate-400">{item.tur}</td>
                    <td className="p-4 text-slate-300">{item.tarih}</td>
                    <td className="p-4">
                      <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.durum}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded border border-amber-500/30 transition font-semibold">
                        Raporu İndir (PDF)
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}