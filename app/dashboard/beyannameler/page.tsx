'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function BeyannamelerPage() {
  const [filter, setFilter] = useState<string>('hepsi');

  const beyannameler = [
    { id: 'BYN-2026-101', tur: 'KDV1 Beyannamesi', donem: 'Eylül 2026', sonTarih: '26.10.2026', tahakkuk: '14.250,00 ₺', durum: 'Onaylandı' },
    { id: 'BYN-2026-102', tur: 'Muhtasar ve Prim Hizmet', donem: 'Eylül 2026', sonTarih: '26.10.2026', tahakkuk: '8.100,00 ₺', durum: 'Hazırlanıyor' },
    { id: 'BYN-2026-103', tur: 'Geçici Vergi Beyannamesi', donem: '2026 / 3. Dönem', sonTarih: '17.11.2026', tahakkuk: '22.800,00 ₺', durum: 'Beklemede' },
    { id: 'BYN-2026-098', tur: 'KDV1 Beyannamesi', donem: 'Ağustos 2026', sonTarih: '26.09.2026', tahakkuk: '11.400,00 ₺', durum: 'Ödendi' },
  ];

  const filtrelenmisList = filter === 'hepsi' 
    ? beyannameler 
    : beyannameler.filter(b => b.durum.toLowerCase() === filter.toLowerCase());

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📄 Beyanname & Tahakkuk Takibi</h1>
            <p className="text-slate-400 text-sm mt-1">Vergi dönemi beyannamelerinizi, onay durumlarını ve tahakkuk fişlerinizi görün.</p>
          </div>
        </div>

        {/* Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Aktif Dönem Tahakkuk</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">22.350,00 ₺</div>
            <span className="text-[11px] text-slate-400">Eylül 2026 toplam vergi tahakkuku</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Yaklaşan Son Ödeme</span>
            <div className="text-2xl font-bold text-slate-100 mt-1">26 Ekim 2026</div>
            <span className="text-[11px] text-amber-400 font-semibold">KDV & Muhtasar son günü</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Onaylanan Beyanname</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">2 Adet</div>
            <span className="text-[11px] text-slate-400">GİB sistemine başarıyla iletildi</span>
          </div>
        </div>

        {/* Filtreleme Butonları */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6">
          {['hepsi', 'onaylandı', 'hazırlanıyor', 'ödendi'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`pb-3 px-4 font-semibold text-sm capitalize transition border-b-2 ${
                filter === f
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {f === 'hepsi' ? 'Tüm Beyannameler' : f}
            </button>
          ))}
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Kayıt No</th>
                  <th className="p-4">Beyanname Türü</th>
                  <th className="p-4">Dönem</th>
                  <th className="p-4">Son Ödeme</th>
                  <th className="p-4">Tahakkuk Tutar</th>
                  <th className="p-4">Durum</th>
                  <th className="p-4 text-right">Evraklar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtrelenmisList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-mono text-amber-400 font-semibold">{item.id}</td>
                    <td className="p-4 font-medium text-slate-100">{item.tur}</td>
                    <td className="p-4 text-slate-400">{item.donem}</td>
                    <td className="p-4 text-slate-300 font-medium">{item.sonTarih}</td>
                    <td className="p-4 font-semibold text-slate-200">{item.tahakkuk}</td>
                    <td className="p-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          item.durum === 'Onaylandı' || item.durum === 'Ödendi'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {item.durum}
                      </span>
                    </td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded transition">
                        Beyanname (PDF)
                      </button>
                      <button className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 px-2.5 py-1.5 rounded border border-amber-500/30 transition">
                        Tahakkuk (PDF)
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