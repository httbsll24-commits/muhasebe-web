'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface Beyanname {
  id: string;
  type: string;
  period: string;
  due_date: string;
  amount: number;
  status: string;
  pdf_url?: string;
  tahakkuk_pdf_url?: string;
}

export default function BeyannamelerPage() {
  const [filter, setFilter] = useState<string>('hepsi');
  const [beyannameler, setBeyannameler] = useState<Beyanname[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function beyannameleriGetir() {
      setLoading(true);
      const { data, error } = await supabase
        .from('declarations')
        .select('*')
        .order('due_date', { ascending: false });

      if (!error && data) {
        setBeyannameler(data as Beyanname[]);
      }
      setLoading(false);
    }

    beyannameleriGetir();
  }, []);

  const filtrelenmisList = filter === 'hepsi'
    ? beyannameler
    : beyannameler.filter(b => b.status.toLowerCase() === filter.toLowerCase());

  const onaylananSayisi = beyannameler.filter(b => b.status === 'Onaylandı').length;
  const toplamTahakkuk = beyannameler.reduce((acc, b) => acc + (Number(b.amount) || 0), 0);

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📄 Beyannameler & Tahakkuklar</h1>
            <p className="text-slate-400 text-sm mt-1">Vergi beyannamelerinizi, tahakkuk fişlerinizi ve ödeme durumlarını Supabase üzerinden takip edin.</p>
          </div>
        </div>

        {/* Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Aktif Dönem Tahakkuk</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">{toplamTahakkuk.toLocaleString('tr-TR')} ₺</div>
            <span className="text-[11px] text-slate-400">Toplam vergi tahakkuku</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Toplam Kayıtlı Beyanname</span>
            <div className="text-2xl font-bold text-slate-100 mt-1">{beyannameler.length} Adet</div>
            <span className="text-[11px] text-slate-400">Veritabanındaki toplam beyanname</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Onaylanan Beyanname</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{onaylananSayisi} Adet</div>
            <span className="text-[11px] text-emerald-400 font-semibold">GİB sistemine iletildi</span>
          </div>
        </div>

        {/* Filtreleme */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6 overflow-x-auto">
          {['hepsi', 'onaylandı', 'hazırlanıyor', 'ödendi'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`pb-3 px-4 font-semibold text-sm transition capitalize border-b-2 whitespace-nowrap ${
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
          {loading ? (
            <div className="p-8 text-center text-slate-400">Beyannameler Supabase'den çekiliyor...</div>
          ) : filtrelenmisList.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Kayıtlı beyanname bulunamadı.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
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
                      <td className="p-4 font-semibold text-slate-100">{item.type}</td>
                      <td className="p-4 text-slate-300">{item.period}</td>
                      <td className="p-4 text-slate-400">{item.due_date}</td>
                      <td className="p-4 font-bold text-amber-400">{Number(item.amount).toLocaleString('tr-TR')} ₺</td>
                      <td className="p-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            item.status === 'Onaylandı'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : item.status === 'Ödendi'
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition">
                          Beyanname (PDF)
                        </button>
                        <button className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded border border-amber-500/30 transition">
                          Tahakkuk (PDF)
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
