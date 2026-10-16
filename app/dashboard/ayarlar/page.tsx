'use client';
import Link from 'next/link';

export default function AyarlarPage() {
  return (
    <div style={{ backgroundColor: '#0b1329', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b' }}>⚙️ Müşellef Profil & Sistem Ayarları</h1>
          <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none' }}>← Portala Dön</Link>
        </div>

        <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>MÜKELLEF / FİRMA UNVANI</label>
            <input type="text" defaultValue="Hatice Başol - BorusanBT Müşteşarlık" style={{ width: '100%', backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>VERGİ KİMLİK / TCKN</label>
              <input type="text" defaultValue="1234567890" style={{ width: '100%', backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>VERGİ DAİRESİ</label>
              <input type="text" defaultValue="Beylikdüzü V.D." style={{ width: '100%', backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }} />
            </div>
          </div>
          <button onClick={() => alert('Profil bilgileri güncellendi!')} style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', border: 'none', padding: '0.85rem', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '0.5rem' }}>
            💾 Ayarları Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}