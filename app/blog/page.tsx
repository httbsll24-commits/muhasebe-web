'use client';

import Link from 'next/link';

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
      
      {/* ÜST MENÜ (NAVBAR / HEADER) */}
      <header style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              HB
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', margin: 0, color: '#fff', letterSpacing: '0.5px' }}>BAŞOL</h3>
              <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '800', letterSpacing: '1px' }}>MALİ MÜŞAVİRLİK</span>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Ana Sayfa</Link>
            <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Hakkımızda</Link>
            <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Hizmetlerimiz</Link>
            <Link href="/blog" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Blog</Link>
            <Link href="/iletisim" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>İletişim</Link>
            <Link href="/dashboard" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.85rem' }}>Müşteri Portalı</Link>
          </nav>
        </div>
      </header>

      {/* BLOG İÇERİĞİ */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '3rem 1rem', flex: 1 }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
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
                  }}
                >
                  {post.category}
                </span>
              </div>

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
      </main>

      {/* ALT BİLGİ (FOOTER) */}
      <footer style={{ backgroundColor: '#070d1e', borderTop: '1px solid #1e293b', padding: '2rem 1rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ color: '#fff', fontWeight: '800', fontSize: '0.95rem' }}>Başol Serbest Muhasebeci Mali Müşavirlik</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.2rem' }}>© 2026 Tüm Hakları Saklıdır.</div>
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            📍 İstanbul, Türkiye • ✉️ info@basol-muhasebe.com
          </div>
        </div>
      </footer>

    </div>
  );
}