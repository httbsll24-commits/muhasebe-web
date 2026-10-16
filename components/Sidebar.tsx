'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{ width: '260px', backgroundColor: '#070d1e', borderRight: '1px solid #1e293b', minHeight: '100vh', padding: '1.5rem', color: '#f8fafc' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
          M
        </div>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '800', margin: 0, color: '#fff' }}>Başol Portal</h3>
          <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '700' }}>MÜŞTERİ PANELİ</span>
        </div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
        <Link href="/dashboard" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#fff', textDecoration: 'none', backgroundColor: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          📊 Genel Bakış
        </Link>
        <Link href="/dashboard/faturalar" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          📑 Faturalar
        </Link>
        <Link href="/dashboard/beyannameler" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          🏛️ Beyannameler
        </Link>
        <Link href="/dashboard/gelir-gider" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          💰 Gelir & Gider
        </Link>
        <Link href="/dashboard/evraklar" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          📁 Evraklar
        </Link>
        <Link href="/dashboard/bildirimler" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          🔔 Bildirimler
        </Link>
        <Link href="/dashboard/ayarlar" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
          ⚙️ Ayarlar
        </Link>
        
        <hr style={{ borderColor: '#1e293b', margin: '1rem 0' }} />
        
        <Link href="/" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#f59e0b', textDecoration: 'none' }}>
          🏠 Ana Sayfaya Dön
        </Link>
      </nav>
    </aside>
  );
}