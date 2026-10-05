'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt?: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Postlar çekilemedi:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, content }),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'İçerik başarıyla yayınlandı ve canlıya aktarıldı.' });
        setTitle('');
        setContent('');
        fetchPosts();
      } else {
        setMessage({ type: 'error', text: 'İçerik kaydedilirken bir hata oluştu.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Sunucu bağlantı hatası.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu içeriği silmek istediğinize emin misiniz?')) return;

    try {
      const res = await fetch(`/api/news?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      }
    } catch (err) {
      alert('Silme işleminde hata oluştu.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER / BAŞLIK BÖLÜMÜ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Başol Mali Müşavirlik • Yönetim
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-white mt-1">Haber & Duyuru Merkezi</h1>
            <p className="text-slate-400 text-sm mt-1">
              Sitede yayınlanacak vergi duyurularını, haberleri ve mevzuat değişikliklerini buradan yönetebilirsiniz.
            </p>
          </div>
          
          <a
            href="/admin"
            className="self-start md:self-auto px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition"
          >
            ← Panele Dön
          </a>
        </div>

        {/* İSTATİSTİK ÖZET KARTLARI */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <p className="text-slate-400 text-xs uppercase font-medium">Toplam Yayın</p>
            <p className="text-2xl font-bold text-white mt-1">{posts.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <p className="text-slate-400 text-xs uppercase font-medium">Duyurular</p>
            <p className="text-2xl font-bold text-amber-400 mt-1">
              {posts.filter((p) => p.category === 'Duyuru').length}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <p className="text-slate-400 text-xs uppercase font-medium">Mevzuat / Haber</p>
            <p className="text-2xl font-bold text-blue-400 mt-1">
              {posts.filter((p) => p.category !== 'Duyuru').length}
            </p>
          </div>
        </div>

        {/* FORM BÖLÜMÜ */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span>✍️</span> Yeni İçerik Oluştur
          </h2>

          {message && (
            <div
              className={`p-4 mb-6 rounded-lg text-sm font-medium border ${
                message.type === 'success'
                  ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
                  : 'bg-rose-950/60 border-rose-800 text-rose-300'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  İçerik Başlığı
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Örn: 2026 Yılı KDV Ve Geçici Vergi Düzenlemeleri"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                >
                  <option value="Duyuru">📌 Duyuru</option>
                  <option value="Haber">📰 Mali Haber</option>
                  <option value="Mevzuat">⚖️ Vergi Mevzuatı</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Detaylı İçerik Metni
              </label>
              <textarea
                required
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paylaşmak istediğiniz haber veya duyurunun tüm detaylarını buraya yazabilirsiniz..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition shadow-lg shadow-amber-500/10 disabled:opacity-50"
            >
              {loading ? 'Yayınlanıyor...' : 'İçeriği Sitede Yayınla'}
            </button>
          </form>
        </div>

        {/* PAYLAŞILAN İÇERİKLER TABLOSU */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📋</span> Yayındaki İçerikler ({posts.length})
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
              <p className="text-slate-500 text-sm">Henüz eklenmiş bir içerik bulunmuyor.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-slate-950 border border-slate-800/80 hover:border-amber-400/50 p-4 rounded-xl transition flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-100 text-lg group-hover:text-amber-400 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{post.content}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="self-end md:self-center px-4 py-2 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-800/50 rounded-lg text-xs font-semibold transition"
                  >
                    Sil
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}