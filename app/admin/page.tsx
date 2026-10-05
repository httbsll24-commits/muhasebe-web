'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
        setMessage('✅ İçerik başarıyla yayınlandı!');
        setTitle('');
        setContent('');
        fetchPosts();
      } else {
        setMessage('❌ Bir hata oluştu.');
      }
    } catch (err) {
      setMessage('❌ Bağlantı hatası.');
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
      alert('Silinemedi.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', padding: '2.5rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* GEZİNTİ VE BAŞLIK */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', margin: 0 }}>
              📢 Haber & Duyuru Merkezi
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Müşterilerinize görünecek mevzuat, vergi duyuruları ve haber içerikleri.
            </p>
          </div>
          <Link href="/admin" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f1f5f9', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '700' }}>
            ← Panele Dön
          </Link>
        </div>

        {message && (
          <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.9rem', fontWeight: '600' }}>
            {message}
          </div>
        )}

        {/* EKLENME FORMU */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '2.5rem', boxShadow: '0 20px 30px -10px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#f59e0b', marginTop: 0, marginBottom: '1.5rem' }}>
            ✍️ Yeni İçerik Paylaş
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Başlık
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Örn: 2026/3. Dönem Geçici Vergi Hatırlatması"
                  style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '0.85rem 1rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '0.85rem 1rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                >
                  <option value="Duyuru">📌 Duyuru</option>
                  <option value="Haber">📰 Mali Haber</option>
                  <option value="Mevzuat">⚖️ Vergi Mevzuatı</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                İçerik Metni
              </label>
              <textarea
                required
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Yayınlanmasını istediğiniz detayları buraya ekleyin..."
                style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '0.85rem 1rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#f59e0b',
                color: '#0b1329',
                border: 'none',
                padding: '1rem',
                borderRadius: '0.75rem',
                fontWeight: '900',
                cursor: 'pointer',
                fontSize: '1rem',
                marginTop: '0.5rem',
                boxShadow: '0 10px 20px -5px rgba(245, 158, 11, 0.4)'
              }}
            >
              {loading ? 'Yayınlanıyor...' : 'Sitede Anında Yayınla'}
            </button>
          </form>
        </div>

        {/* LİSTELEME */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1.25rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginTop: 0, marginBottom: '1.25rem' }}>
            📋 Yayındaki Tüm İçerikler ({posts.length})
          </h2>

          {posts.length === 0 ? (
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Henüz kayıtlı içerik bulunmuyor.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {posts.map((post) => (
                <div key={post.id} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '0.25rem 0.6rem', borderRadius: '0.35rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f8fafc', margin: '0.6rem 0 0.3rem 0' }}>{post.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>{post.content}</p>
                  </div>

                  <button
                    onClick={() => handleDelete(post.id)}
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700' }}
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