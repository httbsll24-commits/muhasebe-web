'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070d1e', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* ÜST DÖVİZ / BİST BARI */}
      <div style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b', padding: '0.5rem 1.5rem', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
        <div style={{ display: 'flex', gap: '1.5rem', fontWeight: '700' }}>
          <span>USD/TRY: <span style={{ color: '#f59e0b' }}>34.20 ₺</span></span>
          <span>EUR/TRY: <span style={{ color: '#f59e0b' }}>37.50 ₺</span></span>
          <span>BİST 100: <span style={{ color: '#34d399' }}>9,150</span></span>
        </div>
        <div>Başol Mali Müşavirlik & Danışmanlık</div>
      </div>

      {/* HEADER NAVİGASYON */}
      <div style={{ backgroundColor: '#0b1329', borderBottom: '1px solid #1e293b', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
            M
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0, color: '#fff' }}>YÜKSEL</h2>
            <span style={{ fontSize: '0.65rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>MALİ MÜŞAVİRLİK</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Ana Sayfa</Link>
          <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hakkımızda</Link>
          <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hizmetlerimiz</Link>
          <Link href="/duyurular" style={{ color: '#94a3b8', textDecoration: 'none' }}>Duyurular</Link>
          <Link href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link>
          <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>İletişim</Link>
        </div>

        <Link href="/login" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.5rem 1.25rem', borderRadius: '0.5rem', fontWeight: '800', textDecoration: 'none', fontSize: '0.875rem' }}>
          Müşteri Girişi
        </Link>
      </div>

      {/* ANA İÇERİK GOVDESİ */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 'calc(100vh - 110px)' }}>
        
        {/* SOL MENÜ (SIDEBAR) */}
        <div style={{ backgroundColor: '#0b1329', borderRight: '1px solid #1e293b', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ marginBottom: '1rem', paddingLeft: '0.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#f59e0b', margin: 0 }}>Müşteri Portalı</h3>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Hatice Başol</span>
          </div>

          <Link href="/dashboard" style={{ backgroundColor: '#f59e0b', color: '#0b1329', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
            📊 Dashboard
          </Link>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            📄 Faturalar
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            📑 Beyannameler
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            📁 Evraklar
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            💰 Gelir / Gider
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            ☑️ Raporlar
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            🔔 Bildirimler
          </a>

          <a href="#" style={{ color: '#cbd5e1', padding: '0.75rem 1rem', borderRadius: '0.75rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: '600' }}>
            ⚙️ Hesap Ayarları
          </a>

          {/* YÖNETİM VE KDV ARAÇLARI */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', paddingLeft: '0.5rem', letterSpacing: '0.05em' }}>
              Yönetim Araçları
            </span>

            <Link
              href="/admin/calc"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '0.65rem 1rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.85rem',
                fontWeight: '800'
              }}
            >
              <span>🧮</span>
              <span>KDV Hesaplama</span>
            </Link>

            <Link
              href="/admin"
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '0.65rem 1rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.85rem',
                fontWeight: '800'
              }}
            >
              <span>⚙️</span>
              <span>Admin Paneli</span>
            </Link>
          </div>

        </div>

        {/* SAĞ İÇERİK ALANI */}
        <div style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginTop: 0, marginBottom: '1.5rem', color: '#fff' }}>Genel Bakış</h1>

          {/* İSTATİSTİK KARTLARI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>VERGİ DURUMU</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#34d399', margin: '0.5rem 0 0 0' }}>Borçsuz</h2>
            </div>

            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>YAKLAŞAN ÖDEMELER</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#f59e0b', margin: '0.5rem 0 0 0' }}>₺14,250</h2>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Son Gün: 26 Ekim</span>
            </div>

            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>BEKLEYEN BEYANNAME</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#38bdf8', margin: '0.5rem 0 0 0' }}>1 Adet</h2>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>KDV 1 Beyannamesi</span>
            </div>

            <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase' }}>OKUNMAMIŞ BİLDİRİM</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fb7185', margin: '0.5rem 0 0 0' }}>2 Adet</h2>
            </div>
          </div>

          {/* SON HAREKETLER */}
          <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0 0 1rem 0' }}>Son Hareketler</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ backgroundColor: '#070d1e', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Eylül 2026 KDV1 Beyannamesi Onaylandı</span>
                <span style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', color: '#34d399', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.6rem', borderRadius: '0.35rem' }}>Tamamlandı</span>
              </div>
              <div style={{ backgroundColor: '#070d1e', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Müşteri Danışmanlık Hizmeti Faturası Kesildi</span>
                <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.6rem', borderRadius: '0.35rem' }}>Faturalandı</span>
              </div>
              <div style={{ backgroundColor: '#070d1e', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Eylül Ayı Banka Ekstreleri Yüklendi</span>
                <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.6rem', borderRadius: '0.35rem' }}>İncelemede</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}