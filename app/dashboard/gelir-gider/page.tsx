'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function GelirGiderPage() {
  const [filter, setFilter] = useState<'hepsi' | 'gelir' | 'gider'>('hepsi');

  const hareketler = [
    { id: 'HRK-001', tip: 'gelir', aciklama: 'Yılmaz Lojistik Danışmanlık Ücreti', tarih: '01.10.2026', kategori: 'Hizmet Geliri', tutar: '+12.500,00 ₺' },
    { id: 'HRK-002', tip: 'gider', aciklama: 'Ofis Kira Ödemesi', tarih: '01.10.2026', kategori: 'Kira Gideri', tutar: '-6.500,00 ₺' },
    { id: 'HRK-003', tip: 'gelir', aciklama: 'Kaya Mimarlık Sözleşme Faturası', tarih: '29.09.2026', kategori: 'Hizmet Geliri', tutar: '+8.000,00 ₺' },
    { id: 'HRK-004', tip: 'gider', aciklama: 'Elektrik & İnternet Faturası', tarih: '25.09.2026', kategori: 'Fatura Gideri', tutar: '-1.450,00 ₺' },
    { id: 'HRK-005', tip: 'gider', aciklama: 'Ofis Mutfak & Kırtasiye Alışverişi', tarih: '20.09.2026', kategori: 'Genel Gider', tutar: '-850,00 ₺' },
  ];

  const filtrelenmisList = filter === 'hepsi' 
    ? hareketler 
    : hareketler.filter(h => h.tip === filter);

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">💰 Gelir & Gider Takibi</h1>
            <p className="text-slate-400 text-sm mt-1">İşletmenizin finansal nakit akışını, gelir ve gider dengesini anlık takip edin.</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
            + Yeni İşlem Ekle
          </button>
        </div>

        {/* Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Toplam Gelir (Bu Ay)</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">20.500,00 ₺</div>
            <span className="text-[11px] text-slate-400">Tahsil edilen toplam tutar</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Toplam Gider (Bu Ay)</span>
            <div className="text-2xl font-bold text-rose-400 mt-1">8.800,00 ₺</div>
            <span className="text-[11px] text-slate-400">Kira, fatura ve genel harcamalar</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Net Kar / Nakit Akışı</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">+11.700,00 ₺</div>
            <span className="text-[11px] text-emerald-400 font-semibold">%57 Karlılık oranı</span>
          </div>
        </div>

        {/* Filtreleme */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6">
          <button
            onClick={() => setFilter('hepsi')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              filter === 'hepsi'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tüm Hareketler
          </button>
          <button
            onClick={() => setFilter('gelir')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              filter === 'gelir'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📈 Gelirler
          </button>
          <button
            onClick={() => setFilter('gider')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              filter === 'gider'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📉 Giderler
          </button>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">İşlem Kodu</th>
                  <th className="p-4">Açıklama</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4">Tarih</th>
                  <th className="p-4">Tutar</th>
                  <th className="p-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtrelenmisList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-mono text-amber-400 font-semibold">{item.id}</td>
                    <td className="p-4 font-medium text-slate-100">{item.aciklama}</td>
                    <td className="p-4 text-slate-400">{item.kategori}</td>
                    <td className="p-4 text-slate-300">{item.tarih}</td>
                    <td className={`p-4 font-bold ${item.tip === 'gelir' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.tutar}
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition">
                        Detay
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