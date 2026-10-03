'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface ReportStats {
  toplamGelir: number;
  toplamGider: number;
  toplamTahakkuk: number;
  faturaAdet: number;
}

export default function RaporlarPage() {
  const [stats, setStats] = useState<ReportStats>({
    toplamGelir: 0,
    toplamGider: 0,
    toplamTahakkuk: 0,
    faturaAdet: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function raporDataGetir() {
      setLoading(true);

      // 1. Gelir & Giderler
      const { data: expenses } = await supabase.from('expenses').select('*');
      const gelir = expenses?.filter((e) => e.type === 'gelir').reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0) || 0;
      const gider = expenses?.filter((e) => e.type === 'gider').reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0) || 0;

      // 2. Vergi Tahakkukları
      const { data: declarations } = await supabase.from('declarations').select('amount');
      const tahakkuk = declarations?.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0) || 0;

      // 3. Fatura İstatistikleri
      const { data: invoices } = await supabase.from('invoices').select('id');
      const faturaCount = invoices?.length || 0;

      setStats({
        toplamGelir: gelir,
        toplamGider: gider,
        toplamTahakkuk: tahakkuk,
        faturaAdet: faturaCount,
      });

      setLoading(false);
    }

    raporDataGetir();
  }, []);

  const netKar = stats.toplamGelir - stats.toplamGider;

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📈 Mali Raporlar & Analizler</h1>
            <p className="text-slate-400 text-sm mt-1">Supabase canlı verilerinden hesaplanan mali performans raporları.</p>
          </div>
          <button
            onClick={() => window.print()}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            🖨️ Raporu Yazdır / PDF
          </button>
        </div>

        {/* Rapor Özeti Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Toplam Gelir</span>
            <div className="text-2xl font-black text-emerald-400 mt-2">
              {loading ? '...' : `+${stats.toplamGelir.toLocaleString('tr-TR')} ₺`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Tüm kayıtlı satış/gelirler</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Toplam Gider</span>
            <div className="text-2xl font-black text-rose-400 mt-2">
              {loading ? '...' : `-${stats.toplamGider.toLocaleString('tr-TR')} ₺`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Tüm işletme giderleri</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Net Dönem Karı/Zararı</span>
            <div className={`text-2xl font-black mt-2 ${netKar >= 0 ? 'text-amber-400' : 'text-rose-500'}`}>
              {loading ? '...' : `${netKar.toLocaleString('tr-TR')} ₺`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Brüt işletme karı</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Toplam Vergi Yükü</span>
            <div className="text-2xl font-black text-amber-400 mt-2">
              {loading ? '...' : `${stats.toplamTahakkuk.toLocaleString('tr-TR')} ₺`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">KDV + Muhtasar + Geçici</span>
          </div>
        </div>

        {/* Detaylı Rapor Tabloları */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-3">
              📊 Mali Performans Özeti
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">İşletme Hacmi (Fatura Sayısı)</span>
                <span className="font-bold text-slate-200">{stats.faturaAdet} Adet Fatura</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Gider / Gelir Oranı</span>
                <span className="font-bold text-amber-400">
                  {stats.toplamGelir > 0 ? `%${((stats.toplamGider / stats.toplamGelir) * 100).toFixed(1)}` : '%0'}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
                <span className="text-slate-400">Vergi / Gelir Oranı</span>
                <span className="font-bold text-amber-400">
                  {stats.toplamGelir > 0 ? `%${((stats.toplamTahakkuk / stats.toplamGelir) * 100).toFixed(1)}` : '%0'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-3">
              📌 Mali Müşavir Değerlendirmesi
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Dönem içerisindeki net kar oranınız ve vergi yükünüz Supabase verileri üzerinden anlık olarak analiz edilmiştir. Detaylı bilanço ve gelir tablosu dökümleriniz için mali müşavirinizle iletişime geçebilirsiniz.
            </p>
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-400 font-semibold">
              ℹ️ Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
