'use client';

import Link from 'next/link';

export default function DuyurularPage() {
  const duyurular = [
    { date: '05 Ekim 2026', category: 'Vergi Takvimi', title: 'Eylül 2026 Beyanname Verme ve Ödeme Süreleri Hakkında Duyuru', desc: 'KDV1, Muhtasar ve Damga Vergisi beyannamelerinin son günü 26 Ekim 2026 mesai bitimine kadardır.' },
    { date: '28 Eylül 2026', category: 'Mevzuat Değişikliği', title: '7524 Sayılı Kanun Kapsamında Yeni Yıllık Asgari Kurumlar Vergisi Düzenlemesi', desc: 'Mükelleflerin yararlanabileceği istisna ve indirimler sonrası ödeyeceği asgari vergi oranları güncellenmiştir.' },
    { date: '15 Eylül 2026', category: 'E-Dönüşüm', title: 'E-Arşiv Fatura ve E-Defter Uygulamalarında Yeni Tebliğ Yayınlandı', desc: 'Aşamalı olarak zorunlu hale gelen e-fatura geçiş limitleri ve entegrasyon kuralları belirlenmiştir.' }
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
          <Link href="/hizmetlerimiz" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Hizmetlerimiz</Link>
          <Link href="/duyurular" style={{ color: '#f59e0b', textDecoration: 'none' }}>Duyurular</Link>
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
        <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>GÜNCEL BİLDİRİMLER</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>Duyurular & Sirküler</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          GİB, Resmi Gazete ve Vergi Mevzuatındaki en son sirküler ve duyuruları anlık takip edin.
        </p>
      </section>

      {/* DUYURU LİSTESİ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {duyurular.map((d, i) => (
            <div key={i} style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
                <span style={{ color: '#f59e0b', fontWeight: '800', backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>{d.category}</span>
                <span style={{ color: '#64748b' }}>📅 {d.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>{d.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
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