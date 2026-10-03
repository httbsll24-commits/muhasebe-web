'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface SummaryData {
  toplamFatura: number;
  toplamTahakkuk: number;
  bekleyenEvrak: number;
  okunmamisBildirim: number;
}

export default function DashboardPage() {
  const [summary, setSummary] = useState<SummaryData>({
    toplamFatura: 0,
    toplamTahakkuk: 0,
    bekleyenEvrak: 0,
    okunmamisBildirim: 0,
  });
  const [recentDocs, setRecentDocs] = useState<any[]>([]);
  const [recentNotifications, setRecentNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function dashboardVerileriniGetir() {
      setLoading(true);

      // 1. Faturalar
      const { data: invoices } = await supabase.from('invoices').select('amount');
      const faturaSayisi = invoices?.length || 0;

      // 2. Beyannameler / Tahakkuk Toplamı
      const { data: declarations } = await supabase.from('declarations').select('amount');
      const tahakkukToplam = declarations?.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0) || 0;

      // 3. Bekleyen Evraklar
      const { data: docs } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      const bekleyen = docs?.filter((d) => d.status === 'Beklemede').length || 0;

      // 4. Okunmamış Bildirimler
      const { data: notifications } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      const okunmamis = notifications?.filter((n) => !n.is_read).length || 0;

      setSummary({
        toplamFatura: faturaSayisi,
        toplamTahakkuk: tahakkukToplam,
        bekleyenEvrak: bekleyen,
        okunmamisBildirim: okunmamis,
      });

      setRecentDocs(docs || []);
      setRecentNotifications(notifications || []);
      setLoading(false);
    }

    dashboardVerileriniGetir();
  }, []);

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-2xl font-extrabold text-amber-400">📊 Mükellef Kontrol Paneli</h1>
          <p className="text-slate-400 text-sm mt-1">Mali durumunuz, vergi beyanlarınız ve son evrak hareketleriniz.</p>
        </div>

        {/* Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <span className="text-xs text-slate-400 uppercase font-semibold">Aktif Dönem Vergi Tahakkuku</span>
            <div className="text-2xl font-black text-amber-400 mt-2">
              {loading ? '...' : `${summary.toplamTahakkuk.toLocaleString('tr-TR')} ₺`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Supabase veritabanından</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <span className="text-xs text-slate-400 uppercase font-semibold">Kayıtlı Fatura Sayısı</span>
            <div className="text-2xl font-black text-slate-100 mt-2">
              {loading ? '...' : `${summary.toplamFatura} Adet`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Gelen / Giden e-faturalar</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <span className="text-xs text-slate-400 uppercase font-semibold">İnceleme Bekleyen Evrak</span>
            <div className="text-2xl font-black text-amber-400 mt-2">
              {loading ? '...' : `${summary.bekleyenEvrak} Adet`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Mali müşavir onayında</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <span className="text-xs text-slate-400 uppercase font-semibold">Okunmamış Duyuru</span>
            <div className="text-2xl font-black text-emerald-400 mt-2">
              {loading ? '...' : `${summary.okunmamisBildirim} Adet`}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">Güncel bildirimler</span>
          </div>
        </div>

        {/* Son İşlemler & Duyurular Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Son Yüklenen Evraklar */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <span>📄 Son Yüklenen Evraklar</span>
            </h2>
            {loading ? (
              <p className="text-slate-500 text-xs py-4">Evraklar yükleniyor...</p>
            ) : recentDocs.length === 0 ? (
              <p className="text-slate-500 text-xs py-4">Henüz yüklenmiş evrak bulunmuyor.</p>
            ) : (
              <div className="space-y-3">
                {recentDocs.map((doc) => (
                  <div key={doc.id} className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl text-xs">
                    <div>
                      <p className="font-semibold text-slate-200">{doc.file_name}</p>
                      <span className="text-slate-500">{doc.file_type}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded font-semibold ${
                        doc.status === 'İşlendi'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Son Yayınlanan Duyurular */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <span>🔔 Son Duyurular & Hatırlatmalar</span>
            </h2>
            {loading ? (
              <p className="text-slate-500 text-xs py-4">Duyurular yükleniyor...</p>
            ) : recentNotifications.length === 0 ? (
              <p className="text-slate-500 text-xs py-4">Henüz duyuru bulunmuyor.</p>
            ) : (
              <div className="space-y-3">
                {recentNotifications.map((n) => (
                  <div key={n.id} className="p-3 bg-slate-800/40 rounded-xl text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-amber-400">{n.title}</span>
                      <span className="text-slate-500">{new Date(n.created_at).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <p className="text-slate-400 line-clamp-1">{n.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}