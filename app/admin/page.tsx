'use client';
import { useState } from 'react';

export default function AdminDashboardPage() {
  const [musteriler, setMusteriler] = useState([
    { id: 'MST-001', unvan: 'Başol Teknoloji & Yazılım Ltd. Şti.', vkn: '1234567890', kdvDurum: 'Onaylandı', muhtasarDurum: 'Hazırlanıyor', sonEvrak: '02.10.2026' },
    { id: 'MST-002', unvan: 'Yılmaz Lojistik San. Tic. A.Ş.', vkn: '9876543210', kdvDurum: 'Beklemede', muhtasarDurum: 'Beklemede', sonEvrak: '29.09.2026' },
    { id: 'MST-003', unvan: 'Kaya Mimarlık Mühendislik', vkn: '5544332211', kdvDurum: 'Onaylandı', muhtasarDurum: 'Onaylandı', sonEvrak: '28.09.2026' },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Üst Yönetim Bandı */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs text-amber-400 font-bold tracking-widest uppercase">MALI MÜŞAVİR YÖNETİM PANELİ</span>
            <h1 className="text-2xl font-extrabold text-white mt-1">👨‍💻 SMMM Yönetim Kontrol Merkezi</h1>
          </div>
          <div className="flex gap-3">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
              + Yeni Müşellef / Müşteri Ekle
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-4 py-2 rounded-lg text-sm transition">
              📢 Toplu Duyuru / SMS Gönder
            </button>
          </div>
        </div>

        {/* Özet Metrik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Aktif Müşteri Sayısı</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">24 Mükellef</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Bekleyen Beyannameler</span>
            <div className="text-2xl font-bold text-rose-400 mt-1">8 Adet</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">İncelenecek Evraklar</span>
            <div className="text-2xl font-bold text-slate-100 mt-1">12 Adet Fiş/Fatura</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Bu Ay Onaylanan</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">16 Beyanname</div>
          </div>
        </div>

        {/* Müşteri Yönetim Tablosu */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center">
            <h2 className="font-bold text-slate-100">📋 Mükellef Beyanname & Evrak Takip Listesi</h2>
            <input type="text" placeholder="Müşteri ara (Unvan veya VKN)..." className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400 w-64" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Kodu</th>
                  <th className="p-4">Mükellef Unvanı</th>
                  <th className="p-4">VKN / TCKN</th>
                  <th className="p-4">KDV Beyanname</th>
                  <th className="p-4">Muhtasar</th>
                  <th className="p-4">Son Evrak</th>
                  <th className="p-4 text-right">Yönetim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {musteriler.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-mono text-amber-400 font-semibold">{m.id}</td>
                    <td className="p-4 font-medium text-slate-100">{m.unvan}</td>
                    <td className="p-4 text-slate-400">{m.vkn}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${m.kdvDurum === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                        {m.kdvDurum}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${m.muhtasarDurum === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                        {m.muhtasarDurum}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 text-xs">{m.sonEvrak}</td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <button className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded border border-amber-500/30 transition">
                        Beyanname Yükle
                      </button>
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
      </div>
    </div>
  );
}
