'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', padding: '2.5rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '2rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{ height: '10px', width: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block', boxShadow: '0 0 10px #f59e0b' }}></span>
              <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                BAŞOL MALİ MÜŞAVİRLİK • SMMM PANELİ
              </span>
            </div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '900', color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Yönetim (Admin) Paneli
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Müşteri duyurularını, finansal hesaplama araçlarını ve yayın akışını buradan yönetebilirsiniz.
            </p>
          </div>

          <Link
            href="/"
            style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#cbd5e1', padding: '0.65rem 1.25rem', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600' }}
          >
            🌐 Ana Sayfaya Git
          </Link>
        </div>

        {/* MODÜL KARTLARI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* HABER VE DUYURU KARTI */}
          <Link 
            href="/admin/posts"
            style={{
              backgroundColor: '#111c38',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '1.25rem',
              padding: '2rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                📢
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#f59e0b', margin: '0 0 0.6rem 0' }}>
                Haber & Duyuru Yönetimi
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Sitede yayınlanacak vergi hatırlatmalarını, mali duyuruları ve haberleri anında ekleyin, düzenleyin veya silin.
              </p>
            </div>
            <div style={{ marginTop: '2rem', color: '#38bdf8', fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              İçerikleri Yönet →
            </div>
          </Link>

          {/* KDV & AİDAT TAKİBİ KARTI */}
          <div
            style={{
              backgroundColor: '#111c38',
              border: '1px solid #1e293b',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: 0.9
            }}
          >
            <div>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                🧮
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8', margin: '0 0 0.6rem 0' }}>
                KDV & Aylık Aidat Takibi
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Müşavir aidat ödemelerini, KDV Dahil/Hariç hesaplama araçlarını ve vergi takvimini yönetin.
              </p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ display: 'inline-block', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '700', padding: '0.35rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                Sıradaki Modül
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}