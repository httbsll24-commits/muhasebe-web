'use client';
import Link from 'next/link';

export default function GelirGiderPage() {
  return (
    <div style={{ backgroundColor: '#0b1329', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>💰 Müşteri Gelir & Gider Yönetimi</h1>
          <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none' }}>← Portala Dön</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ekim Toplam Gelir (Satışlar)</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#10b981', marginTop: '0.25rem' }}>185.000,00 ₺</div>
          </div>
          <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ekim Toplam Gider (Masraflar)</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#ef4444', marginTop: '0.25rem' }}>112.400,00 ₺</div>
          </div>
          <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Dönem Net Faaliyet Kârı</div>
            <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#f59e0b', marginTop: '0.25rem' }}>72.600,00 ₺</div>
          </div>
        </div>

        <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>➕ Hızlı İşletme Gideri Ekle</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="Gider Açıklaması (Örn: Ofis Kira Ödemesi)" style={{ backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem' }} />
            <input type="number" placeholder="Tutar (TL)" style={{ backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem' }} />
            <button onClick={() => alert('Gider SMMM işleme havuzuna eklendi!')} style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>Gider İşle</button>
          </div>
        </div>
      </div>
    </div>
  );
}