'use client';

import Link from 'next/link';

export default function HakkimizdaPage() {
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
          <Link href="/hakkimizda" style={{ color: '#f59e0b', textDecoration: 'none' }}>Hakkımızda</Link>
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

      {/* 3. BAŞLIK BANNERI */}
      <section style={{ backgroundColor: '#070d1e', borderBottom: '1px solid #1e293b', padding: '3.5rem 2rem', textAlign: 'center' }}>
        <span style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>KURUMSAL</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginTop: '0.5rem', marginBottom: '1rem' }}>Hakkımızda</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          10 yılı aşkın tecrübemizle işletmenizin finansal süreçlerinde güvenilir ve teknoloji odaklı çözüm ortağınızız.
        </p>
      </section>

      {/* 4. VİZYON & MİSYON KARTLARI */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2.5rem', position: 'relative' }}>
            <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              🎯
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '1rem' }}>Vizyonumuz</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Teknolojik gelişmelere hızla adapte olarak, e-dönüşüm ve dijital muhasebe süreçlerinde mükelleflerimize en hızlı, güvenilir ve sürdürülebilir mali danışmanlık hizmetini sunmak.
            </p>
          </div>

          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2.5rem' }}>
            <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              🚀
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '1rem' }}>Misyonumuz</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Mevzuat değişikliklerini anlık takip ederek işletmelerin vergi yükümlülüklerini eksiksiz yerine getirmelerini sağlamak ve doğru finansal planlama ile büyümelerine katkıda bulunmak.
            </p>
          </div>

        </div>

        {/* 5. NEDEN BİZİMLE ÇALIŞMALISINIZ (GÖRSEL DETAYLI BÖLÜM) */}
        <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1.25rem', padding: '3rem 2rem', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', marginBottom: '2.5rem' }}>Neden Bizimle Çalışmalısınız?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#34d399', margin: 0 }}>%100</h3>
              <p style={{ color: '#fff', fontWeight: '800', margin: '0.5rem 0 0.25rem 0' }}>Şeffaf & Doğru Raporlama</p>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Finansal verileriniz anlık kontrol altında</span>
            </div>

            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#f59e0b', margin: 0 }}>7/24</h3>
              <p style={{ color: '#fff', fontWeight: '800', margin: '0.5rem 0 0.25rem 0' }}>Mevzuat Danışmanlığı</p>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Sorularınıza hızlı çözümler</span>
            </div>

            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#38bdf8', margin: 0 }}>Dijital</h3>
              <p style={{ color: '#fff', fontWeight: '800', margin: '0.5rem 0 0.25rem 0' }}>E-Dönüşüm Entegrasyonu</p>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>e-Fatura ve e-Defter çözümleri</span>
            </div>
          </div>
        </div>

        {/* 6. HIZLI LİNKLER & AKSİYON BARI */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', margin: 0 }}>Siz de İşletmenizi Dijital Çağa Taşıyın</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>Hizmetlerimiz hakkında detaylı bilgi alın veya bizimle iletişime geçin.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/hizmetlerimiz" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.875rem' }}>
              Hizmetlerimiz →
            </Link>
            <Link href="/iletisim" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid #1e293b', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.875rem' }}>
              İletişim
            </Link>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', borderTop: '1px solid #1e293b', padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        © 2026 Başol Mali Müşavirlik & Danışmanlık. Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}