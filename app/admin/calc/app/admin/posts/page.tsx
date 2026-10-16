'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'Ekim 2026 Mali Takvim & KDV-1 Hatırlatması',
      category: 'Duyuru',
      summary: 'Eylül dönemi vergilendirme ve SGK bildirgeleri son ödeme tarihleri açıklandı.',
      content: 'Eylül 2026 dönemine ait KDV-1 beyannameleri ve SGK prim bildirgeleri 26 Ekim tarihine kadar verilecektir...',
      date: '16.10.2026',
    },
    {
      id: 2,
      title: 'Yeni E-Fatura ve E-Defter Düzenlemeleri Rehberi',
      category: 'Blog',
      summary: 'GİB tarafından yayımlanan son tebliğ kapsamında e-dönüşüm süreçlerindeki yenilikler.',
      content: 'Dijitalleşen finansal dünyada işletmelerin dikkat etmesi gereken yeni tebliğ esasları...',
      date: '12.10.2026',
    },
  ]);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Duyuru');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost: Post = {
      id: Date.now(),
      title,
      category,
      summary: summary || title,
      content,
      date: new Date().toLocaleDateString('tr-TR'),
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setSummary('');
    setContent('');
    alert('Haber/Duyuru başarıyla yayımlandı!');
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu gönderiyi silmek istediğinize emin misiniz?')) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', margin: 0 }}>📢 Haber & Duyuru Yönetimi</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>Web sitenizde yayımlanacak yeni haber, duyuru ve blog yazılarını buradan paylaşın.</p>
          </div>
          <Link href="/" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Form */}
        <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1.25rem' }}>➕ Yeni Haber / Duyuru Ekle</h2>
          
          <form onSubmit={handleAddPost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>BAŞLIK</label>
                <input
                  type="text"
                  placeholder="Örn: 2026 Asgari Ücret Desteği Genelgesi"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>KATEGORİ</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                >
                  <option value="Duyuru">📣 Resmi Duyuru</option>
                  <option value="Blog">📝 Blog / Makale</option>
                  <option value="Mevzuat">🏛️ Mevzuat Değişikliği</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>KISA ÖZET</label>
              <input
                type="text"
                placeholder="Listelemede görünecek kısa açıklama..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>DETAYLI İÇERİK</label>
              <textarea
                rows={4}
                placeholder="Yazının detaylı metnini buraya girin..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600', fontFamily: 'inherit' }}
              />
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', padding: '0.85rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.95rem', marginTop: '0.5rem' }}
            >
              🚀 Yayımla ve Web Sitesinde Göster
            </button>
          </form>
        </div>

        {/* Liste */}
        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>📋 Yayımlanan Haber ve Duyurular ({posts.length})</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ backgroundColor: post.category === 'Duyuru' ? '#3b82f6' : '#10b981', color: '#fff', fontSize: '0.65rem', fontWeight: '800', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>• {post.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff', margin: '0 0 0.4rem 0' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>{post.summary}</p>
                </div>

                <button
                  onClick={() => handleDelete(post.id)}
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.4rem 0.8rem', borderRadius: '0.4rem', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer', flexShrink: 0, marginLeft: '1rem' }}
                >
                  🗑️ Sil
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}