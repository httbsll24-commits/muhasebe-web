'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Announcement {
  id: string;
  title: string;
  content: string;
  category: string;
  created_at: string;
}

export default function AdminIcerikYonetimiPage() {
  const [duyurular, setDuyurular] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [saving, setSaving] = useState(false);

  // Duyuruları Supabase'den Çek
  const duyurulariGetir = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setDuyurular(data as Announcement[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    duyurulariGetir();
  }, []);

  // Yeni Duyuru / Bildirim Gönder
  const handleDuyuruEkle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase.from('notifications').insert([
      {
        title,
        content,
        category,
        is_read: false,
      },
    ]);

    if (!error) {
      setTitle('');
      setContent('');
      setCategory('Duyuru');
      setShowModal(false);
      duyurulariGetir();
    } else {
      alert('Duyuru kaydedilirken hata oluştu: ' + error.message);
    }
    setSaving(false);
  };

  // Duyuru Sil
  const handleDuyuruSil = async (id: string) => {
    if (!confirm('Bu duyuruyu silmek istediğinize emin misiniz?')) return;

    const { error } = await supabase.from('notifications').delete().eq('id', id);

    if (!error) {
      setDuyurular((prev) => prev.filter((d) => d.id !== id));
    } else {
      alert('Duyuru silinirken hata oluştu: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">📢 Duyuru & İçerik Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">Mükelleflere sistem duyurusu yayınlayın, vergi hatırlatmaları ve mevzuat güncellemeleri paylaşın.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            + Yeni Duyuru Yayınla
          </button>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Duyurular Supabase'den çekiliyor...</div>
          ) : duyurular.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Henüz yayınlanmış bir duyuru bulunmuyor.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Kategori</th>
                    <th className="p-4">Başlık</th>
                    <th className="p-4">İçerik Özeti</th>
                    <th className="p-4">Yayın Tarihi</th>
                    <th className="p-4 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {duyurular.map((d) => (
                    <tr key={d.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4">
                        <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {d.category || 'Duyuru'}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-slate-100">{d.title}</td>
                      <td className="p-4 text-slate-400 text-xs max-w-md truncate">{d.content}</td>
                      <td className="p-4 text-slate-400 text-xs">{new Date(d.created_at).toLocaleDateString('tr-TR')}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDuyuruSil(d.id)}
                          className="text-xs bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 px-3 py-1.5 rounded transition"
                        >
                          Sil
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

      {/* Modal - Yeni Duyuru Ekle */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-amber-400 mb-4">Yeni Duyuru Yayınla</h2>
            <form onSubmit={handleDuyuruEkle} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Duyuru</option>
                  <option>Vergi Hatırlatması</option>
                  <option>Mevzuat Güncellemesi</option>
                  <option>Sistem Bilgilendirmesi</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Duyuru Başlığı</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Örn: Ekim Ayı KDV Beyanname Hatırlatması"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Duyuru İçeriği</label>
                <textarea
                  rows={4}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Mükelleflerinize iletmek istediğiniz detaylı açıklama..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  {saving ? 'Yayınlanıyor...' : 'Yayınla'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
