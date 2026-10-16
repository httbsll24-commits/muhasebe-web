'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Döviz Barı */}
      <div style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1rem', color: '#f59e0b', fontWeight: 'bold' }}>
          <span>USD/TRY: 34.20 ₺</span>
          <span>EUR/TRY: 37.50 ₺</span>
          <span style={{ color: '#10b981' }}>BİST 100: 9,150</span>
        </div>
        <div style={{ color: '#94a3b8' }}>Başol Mali Müşavirlik & Danışmanlık</div>
      </div>

      {/* Header */}
      <header style={{ borderBottom: '1px solid #1e293b', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', fontSize: '1.2rem', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            B
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontStyle: 'normal', fontWeight: '800', margin: 0, color: '#fff' }}>BAŞOL</h1>
            <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '700', letterSpacing: '1px' }}>MALİ MÜŞAVİRLİK</span>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
          <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none' }}>Ana Sayfa</Link>
          <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hakkımızda</Link>
          <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hizmetlerimiz</Link>
          <Link href="/duyurular" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Duyurular</Link>
          <Link href="/blog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Blog</Link>
          <Link href="/iletisim" style={{ color: '#cbd5e1', textDecoration: 'none' }}>İletişim</Link>
        </nav>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link href="/dashboard" style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid #f59e0b', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            Müşteri Portalı
          </Link>
          <Link href="/admin" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.85rem' }}>
            Yönetici Girişi
          </Link>
        </div>
      </header>

      {/* Hero Alanı */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '700', marginBottom: '1.5rem' }}>
          STRATEJİK FİNANSAL ÇÖZÜMLER
        </div>

        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', lineHeight: '1.2', marginBottom: '1.5rem' }}>
          Geleceğe Güvenle Bakan Şirketler İçin <br />
          <span style={{ color: '#f59e0b' }}>Stratejik Mali Danışmanlık & Denetim</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
          Hatice Başol liderliğinde vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/hizmetlerimiz" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.9rem 2rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none' }}>
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link href="/iletisim" style={{ backgroundColor: '#1e293b', color: '#fff', padding: '0.9rem 2rem', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none', border: '1px solid #334155' }}>
            Bize Ulaşın
          </Link>
        </div>

        {/* İstatistikler */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '5rem' }}>
          <div style={{ backgroundColor: '#131f37', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#f59e0b' }}>15+</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '600' }}>Yıl Deneyim</div>
          </div>
          <div style={{ backgroundColor: '#131f37', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#f59e0b' }}>%99.8</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '600' }}>Müşteri Memnuniyeti</div>
          </div>
          <div style={{ backgroundColor: '#131f37', padding: '2rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#f59e0b' }}>250+</div>
            <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '600' }}>Aktif Mükellef</div>
          </div>
        </div>
      </main>
    </div>
  );
}