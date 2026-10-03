'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface NotificationItem {
  id: string;
  title: string;
  content: string;
  category: string;
  is_read: boolean;
  created_at: string;
}

export default function BildirimlerPage() {
  const [bildirimler, setBildirimler] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Bildirimleri Supabase'den Çek
  const bildirimleriGetir = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBildirimler(data as NotificationItem[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    bildirimleriGetir();
  }, []);

  // Okundu Olarak İşaretle
  const okunduIsaretle = async (id: string) => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id);

    if (!error) {
      setBildirimler((prev) =>
        prev.map((b) => (b.id === id ? { ...b, is_read: true } : b))
      );
    }
  };

  const okunmamisSayisi = bildirimler.filter((b) => !b.is_read).length;

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">🔔 Duyuru & Bildirimler</h1>
            <p className="text-slate-400 text-sm mt-1">Mali müşavirinizden gelen güncel mevzuat duyuruları ve vergi hatırlatmaları.</p>
          </div>
          {okunmamisSayisi > 0 && (
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold px-3 py-1.5 rounded-full self-start md:self-auto">
              {okunmamisSayisi} Okunmamış Bildirim
            </span>
          )}
        </div>

        {/* Liste */}
        <div className="space-y-4 max-w-4xl">
          {loading ? (
            <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-xl border border-slate-800">
              Bildirimler Supabase'den yükleniyor...
            </div>
          ) : bildirimler.length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-xl border border-slate-800">
              Henüz yayınlanmış bir bildirim veya duyuru bulunmuyor.
            </div>
          ) : (
            bildirimler.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-xl border transition ${
                  item.is_read
                    ? 'bg-slate-900/50 border-slate-800/80 text-slate-400'
                    : 'bg-slate-900 border-amber-500/30 text-slate-100 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                      {item.category || 'Duyuru'}
                    </span>
                    <h3 className="font-bold text-base text-slate-100">{item.title}</h3>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {new Date(item.created_at).toLocaleDateString('tr-TR')}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{item.content}</p>

                {!item.is_read && (
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex justify-end">
                    <button
                      onClick={() => okunduIsaretle(item.id)}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                    >
                      ✓ Okundu Olarak İşaretle
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
