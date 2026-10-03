'use client';
import { useState } from 'react';

export default function AdminEvraklarPage() {
  const [evraklar, setEvraklar] = useState([
    { id: 'EVR-101', firma: 'Başol Teknoloji Ltd. Şti.', dosya: 'Eylul_Akaryakit.pdf', tur: 'Gider Fişi', tarih: '02.10.2026', durum: 'İnceleniyor' },
    { id: 'EVR-102', firma: 'Yılmaz Lojistik A.Ş.', dosya: 'Banka_Dekontu.pdf', tur: 'Dekont', tarih: '01.10.2026', durum: 'Beklemede' },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-2xl font-extrabold text-amber-400">📑 Müşteri Evrak İnceleme & Onay</h1>
          <p className="text-slate-400 text-sm mt-1">Mükellefler tarafından yüklenen fiş, fatura ve dekontları inceleyin ve işleyin.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th className="p-4">Evrak Kod</th>
                <th className="p-4">Firma Unvanı</th>
                <th className="p-4">Dosya Adı</th>
                <th className="p-4">Tür</th>
                <th className="p-4">Tarih</th>
                <th className="p-4">Durum</th>
                <th className="p-4 text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {evraklar.map((e) => (
                <tr key={e.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-mono text-amber-400 font-semibold">{e.id}</td>
                  <td className="p-4 font-medium text-slate-100">{e.firma}</td>
                  <td className="p-4 text-slate-300">{e.dosya}</td>
                  <td className="p-4 text-slate-400">{e.tur}</td>
                  <td className="p-4 text-slate-400">{e.tarih}</td>
                  <td className="p-4">
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {e.durum}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded transition hover:bg-emerald-500/30">
                      Onayla / İşlendi
                    </button>
                    <button className="text-xs bg-rose-500/20 text-rose-400 border border-rose-500/30 px-3 py-1.5 rounded transition hover:bg-rose-500/30">
                      Reddet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}