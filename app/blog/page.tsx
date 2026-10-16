'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '2026 Vergi Takvimi ve SMMM Beyanname Süreleri',
      category: 'Mevzuat & Vergi',
      date: '02 Ekim 2026',
      author: 'Başol Muhasebe',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60',
      summary: 'Yeni yılda mükelleflerin ve işletmelerin dikkat etmesi gereken kritik vergi ve beyanname tarihlerinin özet rehberi.',
    },
    {
      id: 2,
      title: 'E-Fatura ve E-Defter Geçiş Şartları Güncellendi',
      category: 'E-Dönüşüm',
      date: '28 Eylül 2026',
      author: 'Başol Muhasebe',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
      summary: 'Gelir İdaresi Başkanlığı tarafından yayımlanan son tebliğ kapsamındaki zorunlu e-fatura ciro limitleri.',
    },
    {
      id: 3,
      title: 'Şirketlerde Maliyet Analizi ve Vergi Optimizasyonu',
      category: 'Finansal Yönetim',
      date: '15 Eylül 2026',
      author: 'Başol Muhasebe',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60',
      summary: 'İşletmenizin gider kalemlerini yasal çerçevede optimize ederek vergi yükünü azaltmanın yolları.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'sans-serif' }}>
      
      {/* Üst Gezinti Menüsü (Navbar) */}
      <Navbar />

      {/* Blog İçeriği */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '3rem 1rem flexGrow: 1' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid #1e293b', paddingBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>MALİ REHBER</div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#fff', margin: '0.25rem 0 0 0' }}>Güncel Blog & Makaleler</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.4rem' }}>İşletmenizi büyütecek finansal ipuçları, vergi rehberleri ve sektörel analizler.</p>
          </div>
          <Link
            href="/"
            style={{
              backgroundColor: '#1e293b',
              color: '#f59e0b',
              border: '1px solid #334155',
              padding: '0.65rem 1.25rem',
              borderRadius: '0.6rem',
              fontWeight: '800',
              textDecoration: 'none',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>🏠</span>
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>

        {/* Blog Kartları Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: '#070d1e',
                border: '1px solid #1e293b',
                borderRadius: '1rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            >
              {/* Resim */}
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(11, 19, 41, 0.85)',
                    color: '#f59e0b',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '0.4rem',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* İçerik */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', marginBottom: '0.5rem' }}>
                    📅 {post.date} • ✍️ {post.author}
                  </div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', margin: '0 0 0.75rem 0', lineHeight: '1.4' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    {post.summary}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1e293b' }}>
                  <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                    Devamını Oku →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Alt Kurumsal Bilgi (Footer) */}
      <Footer />

    </div>
  );
}