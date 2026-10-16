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
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* ÜST MENÜ (NAVBAR) */}
      <header style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)' }}>
              HB
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', margin: 0, color: '#fff', letterSpacing: '0.5px' }}>BAŞOL</h3>
              <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '800', letterSpacing: '1px' }}>MALİ MÜŞAVİRLİK</span>
            </div>
          </Link>

          {/* MENÜ LİNKLERİ VE BUTONLAR */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Ana Sayfa</Link>
            <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Hakkımızda</Link>
            <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Hizmetlerimiz</Link>
            <Link href="/blog" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>Blog</Link>
            <Link href="/iletisim" style={{ color: '#cbd5e1', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>İletişim</Link>
            
            {/* MÜŞTERİ PORTALI BUTONU */}
            <Link href="/dashboard" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.55rem 1.1rem', borderRadius: '0.5rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.85rem' }}>
              Müşteri Portalı
            </Link>

            {/* ADMİN GİRİŞİ BUTONU */}
            <Link href="/admin" style={{ backgroundColor: '#131f37', color: '#f59e0b', border: '1px solid #f59e0b', padding: '0.55rem 1.1rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🔐</span>
              <span>Admin Panel</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* 1. HERO (KARŞILAMA) BÖLÜMÜ */}
      <section style={{ padding: '5rem 1rem 4rem 1rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
          STRATEJİK FİNANSAL ÇÖZÜMLER
        </span>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginTop: '1.5rem', lineHeight: '1.2' }}>
          Geleceğe Güvenle Bakan Şirketler İçin <br />
          <span style={{ color: '#f59e0b' }}>Stratejik Mali Danışmanlık & Denetim</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '1.2rem', maxWidth: '750px', margin: '1.2rem auto 0 auto', lineHeight: '1.6' }}>
          Hatice Başol liderliğinde vergi yönetimi, finansal danışmanlık ve e-dönüşüm süreçlerinizde işletmenizin yanındayız.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.2rem' }}>
          <Link href="/hizmetlerimiz" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.85rem 1.75rem', borderRadius: '0.6rem', fontWeight: '900', textDecoration: 'none', fontSize: '0.95rem' }}>
            Hizmetlerimizi İnceleyin →
          </Link>
          <Link href="/iletisim" style={{ backgroundColor: '#131f37', color: '#fff', border: '1px solid #334155', padding: '0.85rem 1.75rem', borderRadius: '0.6rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>
            Bize Ulaşın
          </Link>
        </div>

        {/* İSTATİSTİKLER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '4rem' }}>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.75rem', borderRadius: '1rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#f59e0b' }}>15+</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.3rem' }}>Yıl Sektörel Deneyim</div>
          </div>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.75rem', borderRadius: '1rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#f59e0b' }}>%99.8</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.3rem' }}>Müşteri Memnuniyeti</div>
          </div>
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.75rem', borderRadius: '1rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#f59e0b' }}>250+</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '700', marginTop: '0.3rem' }}>Aktif Kurumsal Mükellef</div>
          </div>
        </div>
      </section>

      {/* 2. HİZMETLERİMİZ ÖZETİ */}
      <section style={{ backgroundColor: '#070d1e', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>UZMANLIK ALANLARIMIZ</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', marginTop: '0.3rem' }}>Sunduğumuz Profesyonel Hizmetler</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {hizmetler.map((h, index) => (
              <div key={index} style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.75rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{h.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>{h.baslik}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>{h.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HAKKIMIZDA & NEDEN BİZ? */}
      <section style={{ padding: '5rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>KURUMSAL YAKLAŞIM</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', marginTop: '0.3rem', lineHeight: '1.3' }}>
              İşletmenizi Şeffaf ve Güvenli Mali Yönetimle Büyütüyoruz
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '1rem' }}>
              Başol Mali Müşavirlik, modern muhasebe teknolojilerini klasik mali müşavirlik tecrübesiyle birleştirir. Mükelleflerimizin beyanname süreçlerini aksatmadan, dijital portal üzerinden şeffaf şekilde takip etmelerini sağlıyoruz.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/hakkimizda" style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none' }}>
                Detaylı Hakkımızda Sayfası →
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nedenBiz.map((item, index) => (
              <div key={index} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem 1.5rem', borderRadius: '0.75rem' }}>
                <h4 style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '800', margin: 0 }}>✓ {item.baslik}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem', margin: 0 }}>{item.detay}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. İLETİŞİM BÖLÜMÜ */}
      <section style={{ backgroundColor: '#070d1e', borderTop: '1px solid #1e293b', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>BİZE ULAŞIN</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', marginTop: '0.3rem' }}>Mali Sorularınız İçin Yanınızdayız</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>Ofisimizi ziyaret edebilir veya hemen online randevu oluşturabilirsiniz.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>Adres</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>Merkez Mah. Atatürk Cad. No: 42 İstanbul / Türkiye</p>
            </div>
            <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>Telefon</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>+90 (212) 555 01 23</p>
            </div>
            <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✉️</div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>E-Posta</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.3rem' }}>info@basol-muhasebe.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#050914', borderTop: '1px solid #1e293b', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ color: '#fff', fontWeight: '800', fontSize: '0.95rem' }}>Başol Serbest Muhasebeci Mali Müşavirlik</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.2rem' }}>© 2026 Tüm Hakları Saklıdır.</div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
            <Link href="/hakkimizda" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hakkımızda</Link>
            <Link href="/hizmetlerimiz" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hizmetler</Link>
            <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
            <Link href="/iletisim" style={{ color: '#94a3b8', textDecoration: 'none' }}>İletişim</Link>
            <Link href="/admin" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: '700' }}>Admin Girişi</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}