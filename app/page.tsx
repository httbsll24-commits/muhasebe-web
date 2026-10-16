'use client';

import Link from 'next/link';

export default function HomePage() {
  const hizmetler = [
    { icon: '📊', baslik: 'Mali Müşavirlik & Defter Tutma', aciklama: 'Şirketinizin tüm finansal kayıtlarının yasal mevzuata uygun şekilde tutulması ve raporlanması.' },
    { icon: '🏛️', baslik: 'Vergi Danışmanlığı & Planlama', aciklama: 'KDV, Muhtasar, Geçici ve Kurumlar Vergisi süreçlerinin en uygun vergi avantajlarıyla yönetilmesi.' },
    { icon: '🚀', baslik: 'Şirket Kuruluşu & E-Dönüşüm', aciklama: 'Şahıs, Limited ve Anonim şirket kuruluşları ile E-Fatura, E-Defter geçiş süreçlerinin uçtan uca takibi.' },
    { icon: '💼', baslik: 'SGK & Bordro Danışmanlığı', aciklama: 'Personel işe giriş/çıkış, aylık prim hizmet belgeleri ve SGK teşvik analizlerinin yapılması.' },
  ];

  const nedenBiz = [
    { baslik: 'Güvenilir & Zamanında', detay: 'Beyanname ve ödemeleriniz son güne bırakılmadan zamanında eksiksiz tamamlanır.' },
    { baslik: 'Dijital & Kesintisiz', detay: '7/24 Müşteri Portalı üzerinden fatura, tahakkuk ve evraklarınıza anında erişim sağlarsınız.' },
    { baslik: 'Stratejik Vergi Optimizasyonu', detay: 'Şirketinizin yasal sınırlar dâhilinde en düşük vergi yüküyle büyümesini destekleriz.' },
  ];

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden', width: '100%' }}>
      
      {/* ÜST MENÜ (MOBİL UYUMLU NAVBAR) */}
      <header style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '1rem', position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)' }}>
              HB
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', margin: 0, color: '#fff', letterSpacing: '0.5px' }}>BAŞOL</h3>
              <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '800', letterSpacing: '1px' }}>MALİ MÜŞAVİRLİK</span>
            </div>
          </Link>

          {/* MOBİL HİZALANABİLİR NAVİGASYON */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: '800', fontSize: '0.85rem' }}>Ana Sayfa</Link>
            <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Hakkımızda</Link>
            <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Hizmetlerimiz</Link>
            <Link href="/blog" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>Blog</Link>
            <Link href="/iletisim" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem' }}>İletişim</Link>
            
            <Link href="/dashboard" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.45rem 0.85rem', borderRadius: '0.5rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.8rem' }}>
              Müşteri Portalı
            </Link>

            <Link href="/admin" style={{ backgroundColor: '#131f37', color: '#f59e0b', border: '1px solid #f59e0b', padding: '0.45rem 0.85rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>🔐</span>
              <span>Admin</span>
            </Link>
          </nav>

        </div>
      </header>

      {/* 1. HERO BÖLÜMÜ */}
      <section style={{ padding: '3rem 1rem 2rem 1rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.4rem 0.8rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          STRATEJİK FİNANSAL ÇÖZÜMLER
        </span>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', marginTop: '1.2rem', lineHeight: '1.3' }}>
          Geleceğe Güvenle Bakan Şirketler İçin <br />
          <span style={{ color: '#f59e0b' }}>Stratejik Mali Danışmanlık & Denetim</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '1rem', maxWidth: '750px', margin: '1rem auto 0 auto', lineHeight: '1.5' }}>
          Hatice Başol liderliğinde vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
          <Link href="/hizmetlerimiz" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.75rem 1.25rem', borderRadius: '0.6rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.85rem' }}>
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link href="/iletisim" style={{ backgroundColor: '#131f37', color: '#fff', border: '1px solid #334155', padding: '0.75rem 1.25rem', borderRadius: '0.6rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.85rem' }}>
            Bize Ulaşın
          </Link>
        </div>

        {/* İSTATİSTİKLER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.85rem' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>15+</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.2rem' }}>Yıl Deneyim</div>
          </div>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.85rem' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>%99.8</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.2rem' }}>Memnuniyet</div>
          </div>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.85rem' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>250+</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.2rem' }}>Mükellef</div>
          </div>
        </div>
      </section>

      {/* 2. HİZMETLERİMİZ ÖZETİ */}
      <section style={{ backgroundColor: '#070d1e', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px' }}>UZMANLIK ALANLARIMIZ</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', marginTop: '0.3rem' }}>Sunduğumuz Profesyonel Hizmetler</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {hizmetler.map((h, index) => (
              <div key={index} style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.85rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{h.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '0.4rem' }}>{h.baslik}</h3>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>{h.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HAKKIMIZDA & NEDEN BİZ */}
      <section style={{ padding: '3rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px' }}>KURUMSAL YAKLAŞIM</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', marginTop: '0.3rem', lineHeight: '1.3' }}>
              İşletmenizi Şeffaf ve Güvenli Mali Yönetimle Büyütüyoruz
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '0.75rem' }}>
              Başol Mali Müşavirlik, modern muhasebe teknolojilerini klasik mali müşavirlik tecrübesiyle birleştirir.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {nedenBiz.map((item, index) => (
              <div key={index} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1rem', borderRadius: '0.6rem' }}>
                <h4 style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '800', margin: 0 }}>✓ {item.baslik}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem', margin: 0 }}>{item.detay}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#050914', borderTop: '1px solid #1e293b', padding: '1.5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ color: '#fff', fontWeight: '800', fontSize: '0.85rem' }}>Başol SMMM</div>
            <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.1rem' }}>© 2026 Tüm Hakları Saklıdır.</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', flexWrap: 'wrap' }}>
            <Link href="/hakkimizda" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hakkımızda</Link>
            <Link href="/hizmetlerimiz" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hizmetler</Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <Link href="/iletisim" style={{ color: '#94a3b8', textDecoration: 'none' }}>İletişim</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}