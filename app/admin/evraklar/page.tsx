'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface DocumentItem {
  id: string;
  file_name: string;
  file_type: string;
  file_size: string;
  file_url: string;
  note?: string;
  status: string;
  created_at: string;
}

export default function AdminEvraklarPage() {
  const [evraklar, setEvraklar] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Evrakları Supabase'den Çek
  const evraklariGetir = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEvraklar(data as DocumentItem[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    evraklariGetir();
  }, []);

  // Evrak Durumunu Güncelle (Onayla / Reddet)
  const durumGuncelle = async (id: string, yeniDurum: string) => {
    setUpdatingId(id);
    const { error } = await supabase
      .from('documents')
      .update({ status: yeniDurum })
      .eq('id', id);

    if (!error) {
      setEvraklar((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status: yeniDurum } : e))
      );
    } else {
      alert('Durum güncellenirken bir hata oluştu: ' + error.message);
    }
    setUpdatingId(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📑 Müşteri Evrak İnceleme & Onay</h1>
            <p className="text-slate-400 text-sm mt-1">Mükellefler tarafından yüklenen fiş, fatura ve dekontları inceleyin ve durumlarını güncelleyin.</p>
          </div>
          <button
            onClick={evraklariGetir}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            🔄 Listeyi Yenile
          </button>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Evraklar Supabase veritabanından yükleniyor...</div>
          ) : evraklar.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Henüz inceleme bekleyen veya yüklenen evrak bulunmuyor.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Dosya Adı</th>
                    <th className="p-4">Belge Türü</th>
                    <th className="p-4">Yükleme Tarihi</th>
                    <th className="p-4">Müşteri Notu</th>
                    <th className="p-4">Durum</th>
                    <th className="p-4 text-right">Aksiyonlar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {evraklar.map((e) => (
                    <tr key={e.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-medium text-slate-100">{e.file_name}</td>
                      <td className="p-4 text-slate-400">{e.file_type}</td>
                      <td className="p-4 text-slate-400">{new Date(e.created_at).toLocaleDateString('tr-TR')}</td>
                      <td className="p-4 text-slate-400 text-xs italic">{e.note || '-'}</td>
                      <td className="p-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            e.status === 'İşlendi'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : e.status === 'Reddedildi'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}
                        >
                          {e.status}
                        </span>
                      </td>
                      <td className="p-4 text-right flex justify-end gap-2 items-center">
                        <a
                          href={e.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition"
                        >
                          Aç
                        </a>
                        <button
                          disabled={updatingId === e.id}
                          onClick={() => durumGuncelle(e.id, 'İşlendi')}
                          className="text-xs bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded transition disabled:opacity-50"
                        >
                          Onayla
                        </button>
                        <button
                          disabled={updatingId === e.id}
                          onClick={() => durumGuncelle(e.id, 'Reddedildi')}
                          className="text-xs bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 px-3 py-1.5 rounded transition disabled:opacity-50"
                        >
                          Reddet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}