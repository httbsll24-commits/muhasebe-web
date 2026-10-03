'use client';
import { useState } from 'react';

export default function AdminMusterilerPage() {
  const [musteriler, setMusteriler] = useState([
    { id: '1', unvan: 'Başol Teknoloji Ltd. Şti.', vkn: '1234567890', eposta: 'info@basol.com', telefon: '0532 000 0000', vergiDairesi: 'Selçuk VD', durum: 'Aktif' },
    { id: '2', unvan: 'Yılmaz Lojistik A.Ş.', vkn: '9876543210', eposta: 'muhasebe@yilmaz.com', telefon: '0533 111 2233', vergiDairesi: 'Mevlana VD', durum: 'Aktif' },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">🏢 Mükellef & Müşteri Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">Sistemdeki tüm kayıtlı mükellefleri listeleyin ve yeni müşteri tanımlayın.</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
            + Yeni Müşteri Tanımla
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
              <tr>
                <th className="p-4">VKN / TCKN</th>
                <th className="p-4">Firma Unvanı</th>
                <th className="p-4">E-Posta</th>
                <th className="p-4">Telefon</th>
                <th className="p-4">Vergi Dairesi</th>
                <th className="p-4">Durum</th>
                <th className="p-4 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {musteriler.map((m) => (
                <tr key={m.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-mono text-amber-400 font-semibold">{m.vkn}</td>
                  <td className="p-4 font-medium text-slate-100">{m.unvan}</td>
                  <td className="p-4 text-slate-400">{m.eposta}</td>
                  <td className="p-4 text-slate-300">{m.telefon}</td>
                  <td className="p-4 text-slate-400">{m.vergiDairesi}</td>
                  <td className="p-4">
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {m.durum}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition">
                      Düzenle
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