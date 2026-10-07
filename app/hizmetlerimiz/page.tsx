'use client';

import Link from 'next/link';

export default function HizmetlerimizPage() {
  const hizmetler = [
    {
      icon: '📊',
      title: 'Mali Danışmanlık & Muhasebe',
      desc: 'Şirketinizin tüm mevzuata uygun defter tutma, vergi beyannamesi, SGK bildirgeleri ve dönemsel finansal raporlama süreçlerini eksiksiz yönetiyoruz.',
      features: ['Genel Muhasebe & Defter Tutma', 'Vergi Beyannameleri (KDV, Muhtasar, Kurumlar)', 'SGK & Bordrolama Hizmetleri', 'Dönemsel Finansal Raporlama']
    },
    {
      icon: '🛡️',
      title: 'Vergi Planlaması & Denetim',
      desc: 'Vergi risklerinizi minimize ediyor, kanuni hak ve muafiyetlerinizi en verimli şekilde kullanmanızı sağlayacak stratejik planlamalar yapıyoruz.',
      features: ['Vergi Risk Analizi & Denetim', 'Teşvik ve Muafiyet Danışmanlığı', 'Mali İnceleme Danışmanlığı', 'Revizyon & İç Denetim']
    },
    {
      icon: '🚀',
      title: 'E-Dönüşüm & Dijital Müşavirlik',
      desc: 'e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter entegrasyonlarınızla işletmenizi kağıtsız, hızlı ve güvenli dijital muhasebe çağına taşıyoruz.',
      features: ['e-Fatura & e-Arşiv Kurulumu', 'e-Defter Entegrasyonu & Gönderimi', 'Bulut Tabanlı Müşteri Portalı', 'Dijital Evrak Arşivleme']
    },
    {
      icon: '🏢',
      title: 'Şirket Kuruluşu & Danışmanlık',
      desc: 'Şahıs, Limited ve Anonim şirket kuruluş süreçlerinizi en hızlı şekilde tamamlıyor, ana sözleşme ve tescil işlemlerinizi uçtan uca yürütüyoruz.',
      features: ['Yerli & Yabancı Şirket Kuruluşu', 'Sermaye Artırımı & Tür Değişikliği', 'Şube Açılışı & Adres Değişikliği', 'Şirket Tasfiye İşlemleri']
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* ÜST BİLGİ BARI */}
      <div style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b', padding: '0.5rem 2rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8' }}>
        <div style={{ display: 'flex', gap: '1.5rem', fontWeight: '700' }}>
          <span>USD/TRY: <span style={{ color: '#f59e0b' }}>34.20 ₺</span></span>
          <span>EUR/TRY: <span style={{ color: '#f59e0b' }}>37.50 ₺</span></span>
          <span>BİST 100: <span style={{ color: '#34d399' }}>9,150</span></span>
        </div>
        <div>Başol Mali Müşavirlik & Danışmanlık</div>
      </div>

      {/* HEADER */}
      <header style={{ borderBottom: '1px solid #1e293b', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0b1329' }}>
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
          <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Ana Sayfa</Link>
          <Link href="/hakkimizda" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hakkımızda</Link>
          <Link href="/hizmetlerimiz" style={{ color: '#f59e0b', textDecoration: 'none' }}>Hizmetlerimiz</Link>
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

      {/* BANNER */}
      <section style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '3.5rem 2rem', textAlign: 'center' }}>
        <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>UZMAN HİZMETLER</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>Hizmetlerimiz</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
          İşletmenizin ihtiyacı olan tüm mali, hukuki, vergesel ve dijital çözümleri tek çatı altında sunuyoruz.
        </p>
      </section>

      {/* HİZMET KARTLARI */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
          {hizmetler.map((h, i) => (
            <div key={i} style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{h.icon}</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', marginBottom: '0.75rem' }}>{h.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{h.desc}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {h.features.map((f, j) => (
                  <li key={j} style={{ color: '#cbd5e1', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link href="/iletisim" style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.6rem 1.25rem', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
                Teklif Alın →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', borderTop: '1px solid #1e293b', padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        © 2026 Başol Mali Müşavirlik & Danışmanlık. Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}