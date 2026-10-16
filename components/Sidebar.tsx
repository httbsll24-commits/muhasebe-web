'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/dashboard' },
    { name: 'Faturalar', icon: '📑', href: '/dashboard/faturalar' },
    { name: 'Beyannameler', icon: '🏛️', href: '/dashboard/beyannameler' },
    { name: 'Evraklar', icon: '📁', href: '/dashboard/evraklar' },
    { name: 'Gelir / Gider', icon: '💰', href: '/dashboard/gelir-gider' },
    { name: 'Raporlar', icon: '📈', href: '/dashboard/raporlar' },
    { name: 'Tahsilat & Aidat', icon: '💳', href: '/dashboard/tahsilat' },
    { name: 'Bildirimler', icon: '🔔', href: '/dashboard/bildirimler' },
    { name: 'Hesap Ayarları', icon: '⚙️', href: '/dashboard/ayarlar' },
  ];

  return (
    <aside style={{ width: '280px', backgroundColor: '#070d1e', borderRight: '1px solid #1e293b', minHeight: '100vh', padding: '1.5rem 1rem', color: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', paddingLeft: '0.5rem' }}>
          <div style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', width: '2.5rem', height: '2.5rem', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)' }}>
            HB
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0, color: '#fff', letterSpacing: '0.5px' }}>BAŞOL</h3>
            <span style={{ fontSize: '0.65rem', color: '#f59e0b', fontWeight: '800', letterSpacing: '1px' }}>MALİ MÜŞAVİRLİK</span>
          </div>
        </div>

        {/* Müşteri Profil Özeti */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', padding: '0.85rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MÜŞTERİ PORTALI</div>
          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginTop: '0.25rem' }}>Hatice Başol</div>
        </div>

        {/* Ana Navigasyon */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  backgroundColor: isActive ? '#f59e0b' : 'transparent',
                  color: isActive ? '#0b1329' : '#cbd5e1',
                  boxShadow: isActive ? '0 4px 12px rgba(245, 158, 11, 0.25)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Yönetim Araçları */}
      <div style={{ marginTop: '2rem', borderTop: '1px solid #1e293b', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '800', letterSpacing: '1px', marginBottom: '0.25rem', paddingLeft: '0.5rem' }}>
          YÖNETİM ARAÇLARI
        </div>
        
        <Link href="/admin/calc" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', borderRadius: '0.6rem', backgroundColor: '#131f37', border: '1px solid #334155', color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
          <span>🧮</span>
          <span>KDV / Hesaplayıcı</span>
        </Link>

        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', borderRadius: '0.6rem', backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
          <span>⚙️</span>
          <span>Admin Paneli</span>
        </Link>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '0.6rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none', marginTop: '0.5rem' }}>
          <span>🏠</span>
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>
    </aside>
  );
}