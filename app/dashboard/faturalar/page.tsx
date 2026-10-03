'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface Fatura {
  id: string;
  invoice_no: string;
  title: string;
  type: string;
  amount: number;
  kdv_amount: number;
  date: string;
  status: string;
}

export default function FaturalarPage() {
  const [tab, setTab] = useState<'gelen' | 'giden'>('gelen');
  const [faturalar, setFaturalar] = useState<Fatura[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Supabase'den Faturaları Çek
  useEffect(() => {
    async function faturalariGetir() {
      setLoading(true);
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('date', { ascending: false });

      if (!error && data) {
        setFaturalar(data as Fatura[]);
      }
      setLoading(false);
    }

    faturalariGetir();
  }, []);

  const gelenFaturalar = faturalar.filter((f) => f.type === 'gelen');
  const gidenFaturalar = faturalar.filter((f) => f.type === 'giden');
  const faturaListesi = tab === 'gelen' ? gelenFaturalar : gidenFaturalar;

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">🧾 Fatura Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">E-Fatura ve SMM evraklarınızı doğrudan Supabase veritabanından takip edin.</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition">
            + Yeni Fatura Yükle
          </button>
        </div>

        {/* Sekme Butonları */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6">
          <button
            onClick={() => setTab('gelen')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'gelen'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📥 Gelen Faturalar ({gelenFaturalar.length})
          </button>
          <button
            onClick={() => setTab('giden')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'giden'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📤 Giden Faturalar ({gidenFaturalar.length})
          </button>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Veriler Supabase'den yükleniyor...</div>
          ) : faturaListesi.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Henüz bu kategoride kayıtlı fatura bulunmuyor.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Fatura No</th>
                    <th className="p-4">Firma / Unvan</th>
                    <th className="p-4">Tarih</th>
                    <th className="p-4">Tutar</th>
                    <th className="p-4">KDV</th>
                    <th className="p-4">Durum</th>
                    <th className="p-4 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {faturaListesi.map((fatura) => (
                    <tr key={fatura.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono text-amber-400 font-semibold">{fatura.invoice_no}</td>
                      <td className="p-4 font-medium text-slate-100">{fatura.title}</td>
                      <td className="p-4 text-slate-400">{fatura.date}</td>
                      <td className="p-4 font-semibold text-slate-200">{fatura.amount.toLocaleString('tr-TR')} ₺</td>
                      <td className="p-4 text-slate-400">{fatura.kdv_amount.toLocaleString('tr-TR')} ₺</td>
                      <td className="p-4">
                        <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {fatura.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition">
                          İndir (PDF)
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