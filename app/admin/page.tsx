'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, title: '2026/3. Dönem Geçici Vergi Hatırlatması', category: 'Duyuru', date: '05.10.2026' },
    { id: 2, title: 'Yeni E-Fatura Düzenlemeleri Rehberi', category: 'Blog', date: '01.10.2026' }
  ]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      category,
      date: new Date().toLocaleDateString('tr-TR')
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
    alert('Post/Duyuru başarıyla yayınlandı!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Yönetim (Admin) Paneli</h1>
            <p className="text-xs text-slate-400">Mali Müşavir İçerik & Duyuru Yönetimi</p>
          </div>
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
            Yönetici Modu
          </span>
        </div>

        {/* Post / Duyuru Ekleme Formu */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
          <h2 className="text-lg font-semibold text-white">Yeni Post / Duyuru Yayınla</h2>
          <form onSubmit={handleCreatePost} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-400 mb-1">Başlık</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Örn: 2026 KDV Beyanname Süreleri"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white"
                >
                  <option value="Duyuru">Duyuru</option>
                  <option value="Blog">Blog Yazısı</option>
                  <option value="Mevzuat">Mevzuat Güncellemesi</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">İçerik Detayı</label>
              <textarea
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Yayınlamak istediğiniz duyuru veya blog içeriğini giriniz..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Yayınla
            </button>
          </form>
        </div>

        {/* Yayınlanan Postlar Listesi */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
          <h2 className="text-lg font-semibold text-white">Yayınlanan İçerikler</h2>
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="p-4 bg-slate-800/50 rounded-lg flex justify-between items-center border border-slate-700/50">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">{post.category}</span>
                    <h3 className="font-semibold text-sm">{post.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Yayın Tarihi: {post.date}</p>
                </div>
                <button
                  onClick={() => setPosts(posts.filter((p) => p.id !== post.id))}
                  className="text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10 px-3 py-1.5 rounded transition-colors"
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}