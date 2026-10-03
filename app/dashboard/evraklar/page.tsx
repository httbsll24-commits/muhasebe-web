'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function EvraklarPage() {
  const [tab, setTab] = useState<'yukle' | 'list' | 'arsiv'>('yukle');

  const evraklar = [
    { id: 'EVR-2026-045', ad: 'Eylul_Akaryakit_Fisi.pdf', tur: 'Gider Fişi', yuklemeTarihi: '02.10.2026', boyut: '1.2 MB', durum: 'İnceleniyor' },
    { id: 'EVR-2026-044', ad: 'Ofis_Kira_Dekontu.pdf', tur: 'Banka Dekontu', yuklemeTarihi: '01.10.2026', boyut: '850 KB', durum: 'İşlendi' },
    { id: 'EVR-2026-041', ad: 'Yemek_Faturasi.pdf', tur: 'Fatura', yuklemeTarihi: '28.09.2026', boyut: '2.1 MB', durum: 'İşlendi' },
  ];

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📁 Evrak & Belge Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">Muhasebecinize iletmek istediğiniz fiş, fatura ve dekontları yükleyin veya geçmiş evraklarınızı inceleyin.</p>
          </div>
        </div>

        {/* Sekme Butonları */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6">
          <button
            onClick={() => setTab('yukle')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'yukle'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📤 Yeni Evrak Yükle
          </button>
          <button
            onClick={() => setTab('list')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'list'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📑 Evraklarım ({evraklar.length})
          </button>
          <button
            onClick={() => setTab('arsiv')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'arsiv'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📦 Evrak Arşivi
          </button>
        </div>

        {/* 1. SEKMELER: YENİ EVRAK YÜKLE */}
        {tab === 'yukle' && (
          <div className="max-w-2xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-100 mb-4">Evrak Detayları</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Belge Türü</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400">
                  <option>Gider Fişi / Alış Faturası</option>
                  <option>Banka Dekontu</option>
                  <option>SGK / Personel Evrağı</option>
                  <option>Sözleşme / Resmi Belge</option>
                  <option>Diğer Evraklar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Dosya Seçin (PDF, PNG, JPG)</label>
                <div className="border-2 border-dashed border-slate-700 hover:border-amber-400 rounded-xl p-8 text-center cursor-pointer bg-slate-800/40 transition">
                  <div className="text-3xl mb-2">📄</div>
                  <span className="text-sm font-medium text-slate-300 block">Sürükleyip bırakın veya dosya seçin</span>
                  <span className="text-xs text-slate-500 mt-1 block">Maksimum dosya boyutu: 10MB</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Açıklama / Not (Opsiyonel)</label>
                <textarea rows={3} placeholder="Mali müşavirinize iletmek istediğiniz not..." className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-lg transition text-sm">
                Evrağı Gönder
              </button>
            </form>
          </div>
        )}

        {/* 2. SEKMELER: EVRAKLARIM LISTESI */}
        {tab === 'list' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Evrak Kod</th>
                    <th className="p-4">Dosya Adı</th>
                    <th className="p-4">Belge Türü</th>
                    <th className="p-4">Yükleme Tarihi</th>
                    <th className="p-4">Boyut</th>
                    <th className="p-4">Durum</th>
                    <th className="p-4 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {evraklar.map((evrak) => (
                    <tr key={evrak.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono text-amber-400 font-semibold">{evrak.id}</td>
                      <td className="p-4 font-medium text-slate-100">{evrak.ad}</td>
                      <td className="p-4 text-slate-400">{evrak.tur}</td>
                      <td className="p-4 text-slate-300">{evrak.yuklemeTarihi}</td>
                      <td className="p-4 text-slate-400">{evrak.boyut}</td>
                      <td className="p-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            evrak.durum === 'İşlendi'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}
                        >
                          {evrak.durum}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition">
                          Görüntüle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. SEKMELER: ARSIV */}
        {tab === 'arsiv' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
            📦 Geçmiş dönemlere ait arşivlenmiş evraklar burada listelenir.
          </div>
        )}
      </main>
    </div>
  );
}