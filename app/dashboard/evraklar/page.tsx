'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
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

export default function EvraklarPage() {
  const [tab, setTab] = useState<'yukle' | 'list' | 'arsiv'>('yukle');
  const [evraklar, setEvraklar] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Form State
  const [fileType, setFileType] = useState<string>('Gider Fişi / Alış Faturası');
  const [fileName, setFileName] = useState<string>('');
  const [fileUrl, setFileUrl] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Evrakları Çek
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

  // Yeni Evrak Kaydet
  const handleEvrakYukle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName || !fileUrl) {
      setMessage({ text: 'Lütfen dosya adı ve dosya URL bilgilerini giriniz.', type: 'error' });
      return;
    }

    setUploading(true);
    setMessage(null);

    const { error } = await supabase.from('documents').insert([
      {
        file_name: fileName,
        file_type: fileType,
        file_size: '1.5 MB',
        file_url: fileUrl,
        note: note,
        status: 'Beklemede',
      },
    ]);

    if (error) {
      setMessage({ text: 'Evrak kaydedilirken hata oluştu: ' + error.message, type: 'error' });
    } else {
      setMessage({ text: 'Evrak başarıyla kaydedildi!', type: 'success' });
      setFileName('');
      setFileUrl('');
      setNote('');
      evraklariGetir();
      setTab('list');
    }
    setUploading(false);
  };

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📁 Evrak & Belge Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">Muhasebecinize iletmek istediğiniz fiş, fatura ve dekontları yükleyin.</p>
          </div>
        </div>

        {/* Sekmeler */}
        <div className="flex space-x-2 border-b border-slate-800 mb-6">
          <button
            onClick={() => setTab('yukle')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'yukle' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📤 Yeni Evrak Yükle
          </button>
          <button
            onClick={() => setTab('list')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'list' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📑 Evraklarım ({evraklar.length})
          </button>
          <button
            onClick={() => setTab('arsiv')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'arsiv' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📦 Evrak Arşivi
          </button>
        </div>

        {/* 1. SEKMELER: YENİ EVRAK YÜKLE */}
        {tab === 'yukle' && (
          <div className="max-w-2xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-100 mb-4">Evrak Detayları</h2>

            {message && (
              <div
                className={`p-3 rounded-lg text-xs mb-4 text-center border ${
                  message.type === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleEvrakYukle} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Belge Türü</label>
                <select
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option>Gider Fişi / Alış Faturası</option>
                  <option>Banka Dekontu</option>
                  <option>SGK / Personel Evrağı</option>
                  <option>Sözleşme / Resmi Belge</option>
                  <option>Diğer Evraklar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Dosya Adı</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Eylul_Akaryakit_Fisi.pdf"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Dosya Bağlantısı (URL / Supabase Storage)</label>
                <input
                  type="text"
                  required
                  placeholder="https://..."
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Açıklama / Not (Opsiyonel)</label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Mali müşavirinize iletmek istediğiniz not..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-lg transition text-sm disabled:opacity-50"
              >
                {uploading ? 'Kaydediliyor...' : 'Evrağı Gönder'}
              </button>
            </form>
          </div>
        )}

        {/* 2. SEKMELER: EVRAKLARIM LISTESI */}
        {tab === 'list' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            {loading ? (
              <div className="p-8 text-center text-slate-400">Evraklar yükleniyor...</div>
            ) : evraklar.length === 0 ? (
              <div className="p-8 text-center text-slate-400">Kayıtlı evrak bulunmuyor.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-4">Dosya Adı</th>
                      <th className="p-4">Belge Türü</th>
                      <th className="p-4">Yükleme Tarihi</th>
                      <th className="p-4">Durum</th>
                      <th className="p-4 text-right">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {evraklar.map((evrak) => (
                      <tr key={evrak.id} className="hover:bg-slate-800/40 transition">
                        <td className="p-4 font-medium text-slate-100">{evrak.file_name}</td>
                        <td className="p-4 text-slate-400">{evrak.file_type}</td>
                        <td className="p-4 text-slate-300">{new Date(evrak.created_at).toLocaleDateString('tr-TR')}</td>
                        <td className="p-4">
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                              evrak.status === 'İşlendi'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}
                          >
                            {evrak.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <a
                            href={evrak.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded transition inline-block"
                          >
                            Görüntüle
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 3. SEKMELER: ARŞİV */}
        {tab === 'arsiv' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
            📦 Arşivlenmiş evraklar burada listelenir.
          </div>
        )}
      </main>
    </div>
  );
}