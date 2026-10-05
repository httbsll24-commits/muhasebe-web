'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Mevcut postları getirme
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
    setMessage('');

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, content }),
      });

      if (res.ok) {
        setMessage('✅ Haber/Duyuru başarıyla yayınlandı!');
        setTitle('');
        setContent('');
        fetchPosts();
      } else {
        setMessage('❌ Bir hata oluştu.');
      }
    } catch (err) {
      setMessage('❌ Sunucu hatası oluştu.');
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
      alert('Silinirken hata oluştu.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md my-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        📢 Admin Haber & Duyuru Yönetimi
      </h1>

      {message && (
        <div className="p-3 mb-4 text-sm font-medium rounded-lg bg-blue-50 text-blue-700">
          {message}
        </div>
      )}

      {/* YENİ POST EKLEME FORMU */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10 bg-gray-50 p-4 rounded-lg border">
        <h2 className="text-lg font-semibold text-gray-700">Yeni İçerik Paylaş</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Başlık</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Örn: 2026 Yılı KDV Oranları Hakkında Duyuru"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="Duyuru">Duyuru</option>
            <option value="Haber">Mali Haber</option>
            <option value="Mevzuat">Mevzuat / Vergi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">İçerik Detayı</label>
          <textarea
            required
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="İçerik detaylarını buraya yazın..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
        >
          {loading ? 'Yayınlanıyor...' : 'Yayınla'}
        </button>
      </form>

      {/* MEVCUT POSTLAR LİSTESİ */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Paylaşılan İçerikler</h2>
      <div className="space-y-3">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-sm">Henüz eklenmiş haber veya duyuru yok.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800 mb-1">
                  {post.category}
                </span>
                <h3 className="font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{post.content}</p>
              </div>

              <button
                onClick={() => handleDelete(post.id)}
                className="ml-4 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 rounded-md transition"
              >
                Sil
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}