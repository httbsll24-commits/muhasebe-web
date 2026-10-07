'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. ÜST BİLGİ BARI */}
      <div style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b', padding: '0.5rem 2rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8' }}>
        <div style={{ display: 'flex', gap: '1.5rem', fontWeight: '700' }}>
          <span>USD/TRY: <span style={{ color: '#f59e0b' }}>34.20 ₺</span></span>
          <span>EUR/TRY: <span style={{ color: '#f59e0b' }}>37.50 ₺</span></span>
          <span>BİST 100: <span style={{ color: '#34d399' }}>9,150</span></span>
        </div>
        <div>Başol Mali Müşavirlik & Danışmanlık</div>
      </div>

      {/* 2. HEADER / NAVİGASYON */}
      <header style={{ borderBottom: '1px solid #1e293b', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0b1329', sticky: 'top', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.75rem', height: '2.75rem', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            M
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0, color: '#fff' }}>YÜKSEL</h2>
            <span style={{ fontSize: '0.65rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>MALİ MÜŞAVİRLİK</span>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
          <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none' }}>Ana Sayfa</Link>
          <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hakkımızda</Link>
          <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hizmetlerimiz</Link>
          <Link href="/duyurular" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Duyurular</Link>
          <Link href="/blog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Blog</Link>
          <Link href="/iletisim" style={{ color: '#cbd5e1', textDecoration: 'none' }}>İletişim</Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/dashboard" style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.6rem 1.25rem', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.875rem' }}>
            Müşteri Portalı
          </Link>
          <Link href="/admin" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.6rem 1.25rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.875rem' }}>
            Yönetici Girişi
          </Link>
        </div>
      </header>

      {/* 3. HERO BÖLÜMÜ */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          STRATEJİK FİNANSAL ÇÖZÜMLER
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: 1.2, marginTop: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>
          Geleceğe Güvenle Bakan Şirketler İçin <br />
          <span style={{ color: '#f59e0b' }}>Stratejik Mali Danışmanlık & Denetim</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          10 yılı aşkın tecrübemiz ile vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/hizmetlerimiz" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.85rem 2rem', borderRadius: '0.6rem', fontWeight: '800', textDecoration: 'none', fontSize: '1rem' }}>
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link href="/iletisim" style={{ backgroundColor: '#111c38', color: '#f8fafc', border: '1px solid #1e293b', padding: '0.85rem 2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}>
            Bize Ulaşın
          </Link>
        </div>
      </section>

      {/* 4. İSTATİSTİK BÖLÜMÜ */}
      <section style={{ padding: '0 2rem 4rem 2rem', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#f59e0b', margin: 0 }}>+500</h3>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0', fontWeight: '600' }}>Kurumsal Müşteri</p>
        </div>
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#f59e0b', margin: 0 }}>%99.8</h3>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0', fontWeight: '600' }}>Müşteri Memnuniyeti</p>
        </div>
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#f59e0b', margin: 0 }}>25+</h3>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 0 0', fontWeight: '600' }}>Uzman Kadro</p>
        </div>
      </section>

      {/* 5. ÖNE ÇIKAN HİZMETLER BÖLÜMÜ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#070d1e', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HİZMETLERİMİZ</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem' }}>İşletmeniz İçin Uçtan Uca Mali Çözümler</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem' }}>Mali Danışmanlık & Muasebe</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>Şirketinizin tüm mevzuata uygun defter tutma, vergi beyannamesi ve finansal raporlama süreçlerini eksiksiz yönetiyoruz.</p>
              <Link href="/hizmetlerimiz" style={{ color: '#f59e0b', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Detayları İncele →</Link>
            </div>

            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem' }}>Vergi Planlaması & Denetim</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>Vergi risklerinizi minimize ediyor, kanuni hak ve muafiyetlerinizi en verimli şekilde kullanmanızı sağlıyoruz.</p>
              <Link href="/hizmetlerimiz" style={{ color: '#f59e0b', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Detayları İncele →</Link>
            </div>

            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem' }}>E-Dönüşüm & Dijital Müşavirlik</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>e-Fatura, e-Arşiv, e-Irsaliye ve dijital portal entegrasyonlarınızla muhasebenizi dijital çağa taşıyoruz.</p>
              <Link href="/hizmetlerimiz" style={{ color: '#f59e0b', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Detayları İncele →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GÜNCEL MEVZUAT & BLOG PANELİ */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GÜNCEL YAZILAR</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem', margin: 0 }}>Mevzuat ve Blog Haberleri</h2>
          </div>
          <Link href="/blog" style={{ color: '#f59e0b', fontWeight: '800', textDecoration: 'none', fontSize: '0.9rem' }}>Tümünü Gör →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '700' }}>2026 Mevzuatı</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0' }}>Eylul 2026 KDV ve Vergi Takvimi Değişiklikleri</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Yeni dönem vergi beyannamesi süreleri ve mükelleflerin dikkat etmesi gereken kritik maddeler...</p>
              <Link href="/blog" style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>Devamını Oku</Link>
            </div>
          </div>

          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '700' }}>Şirket Yönetimi</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0' }}>Limited ve Anonim Şirketlerde Sermaye Artırımı</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Şirketlerin büyüme süreçlerinde tercih ettiği finansal yöntemler ve mali müşavirlik tavsiyeleri...</p>
              <Link href="/blog" style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>Devamını Oku</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BİZE ULAŞIN / İLETİŞİM BÖLÜMÜ */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#020617', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>M</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: 0 }}>Başol Mali Müşavirlik</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>Güvenilir, şeffaf ve teknoloji odaklı mali müşavirlik ve danışmanlık hizmetleri.</p>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>Hızlı Bağlantılar</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <Link href="/hakkimizda" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hakkımızda</Link>
              <Link href="/hizmetlerimiz" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hizmetlerimiz</Link>
              <Link href="/duyurular" style={{ color: '#94a3b8', textDecoration: 'none' }}>Duyurular</Link>
              <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
              <Link href="/iletisim" style={{ color: '#94a3b8', textDecoration: 'none' }}>İletişim</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>İletişim</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>📍 İstanbul / Türkiye</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>📞 +90 (212) 000 00 00</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>✉️ info@basol-muhasebe.com</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', color: '#64748b', fontSize: '0.8rem' }}>
          © 2026 Başol Mali Müşavirlik & Danışmanlık. Tüm Hakları Saklıdır.
        </div>
      </section>

    </div>
  );
}