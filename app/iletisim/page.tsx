'use client';

import Link from 'next/link';

export default function IletisimPage() {
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
          <Link href="/duyurular" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Duyurular</Link>
          <Link href="/blog" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Blog</Link>
          <Link href="/iletisim" style={{ color: '#f59e0b', textDecoration: 'none' }}>İletişim</Link>
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
        <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>BİZE ULAŞIN</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>İletişim & Randevu</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Sorularınız, mali danışmanlık hizmeti ve teklif talepleriniz için bizimle iletişime geçin.
        </p>
      </section>

      {/* İLETİŞİM FORMU VE BİLGİLERİ */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        
        {/* SOL: BİLGİ KARTLARI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
            <div style={{ color: '#f59e0b', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍 Adres</div>
            <h4 style={{ color: '#fff', fontWeight: '800', margin: '0 0 0.5rem 0' }}>Ofis Adresimiz</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>Atatürk Cad. Başol İş Merkezi No:12 Kat:4 <br />İstanbul / Türkiye</p>
          </div>

          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
            <div style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞 Telefon & E-Posta</div>
            <h4 style={{ color: '#fff', fontWeight: '800', margin: '0 0 0.5rem 0' }}>İletişim Hatları</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>Tel: +90 (212) 000 00 00</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>E-Posta: info@basol-muhasebe.com</p>
          </div>

          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem' }}>
            <div style={{ color: '#34d399', fontSize: '1.5rem', marginBottom: '0.5rem' }}>⏰ Çalışma Saatleri</div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}>Pazartesi - Cuma: 08:30 - 18:00</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Cumartesi: 09:00 - 13:00</p>
          </div>
        </div>

        {/* SAĞ: MESAJ FORMU */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', marginBottom: '1.5rem' }}>Bize Mesaj Gönderin</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Mesajınız başarıyla iletildi!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>Adınız Soyadınız</label>
              <input type="text" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff', outline: 'none' }} placeholder="Örn: Ahmet Yılmaz" />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>E-Posta Adresiniz</label>
              <input type="email" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff', outline: 'none' }} placeholder="ahmet@sirketiniz.com" />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '600' }}>Mesajınız</label>
              <textarea rows={4} required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff', outline: 'none' }} placeholder="Danışmanlık almak istediğiniz konu..." />
            </div>
            <button type="submit" style={{ backgroundColor: '#f59e0b', color: '#0b1329', border: 'none', padding: '0.85rem', borderRadius: '0.5rem', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer' }}>
              Gönder →
            </button>
          </form>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', borderTop: '1px solid #1e293b', padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        © 2026 Başol Mali Müşavirlik & Danışmanlık. Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}