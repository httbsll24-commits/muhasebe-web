'use client';
import Link from 'next/link';

export default function BildirimlerPage() {
  const bildirimler = [
    { başlık: 'Eylül KDV Tahakkuku Yüklendi', detay: 'Hatice Başol Müşavirlik tarafından Eylül ayı KDV tahakkuk fişiniz sisteme eklendi.', zaman: '2 saat önce' },
    { başlık: 'SGK Prim Ödemesi Hatırlatması', detay: 'Eylül dönemi sigorta primlerinin son ödeme günü 31 Ekim tarihine kadardır.', zaman: '1 gün önce' },
    { başlık: 'E-Defter Berat Yüklemesi Tamamlandı', detay: '3. Çeyrek e-defter beratları Gelir İdaresi Başkanlığına başarıyla iletildi.', zaman: '3 gün önce' },
  ];

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>🔔 Müşavir Duyuru & Bildirimler</h1>
          <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none' }}>← Portala Dön</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bildirimler.map((b, i) => (
            <div key={i} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f59e0b', fontSize: '0.8rem', fontWeight: '800' }}>
                <span>📣 SMMM BİLDİRİMİ</span>
                <span style={{ color: '#64748b' }}>{b.zaman}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0.4rem 0' }}>{b.başlık}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{b.detay}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}