'use client';

import Link from 'next/link';

export default function RaporlarDashboardPage() {
  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', margin: 0 }}>📊 Finansal Sağlık & Bilanço Analiz Raporu</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>Şirketinizin 2026 yılı 3. Çeyrek finansal performans ve vergi özeti.</p>
          </div>
          <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Portala Dön
          </Link>
        </div>

        {/* Özet Skor Kartı */}
        <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700' }}>3. ÇEYREK TOPLAM CİRO</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10b981', marginTop: '0.25rem' }}>1.450.000 ₺</div>
            <div style={{ fontSize: '0.65rem', color: '#10b981', marginTop: '0.2rem' }}>▲ %12 Artış</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700' }}>TOPLAM GİDER & MALİYET</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ef4444', marginTop: '0.25rem' }}>920.000 ₺</div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '0.2rem' }}>Dengeli Görüntü</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700' }}>NET FAALİYET KÂRI</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#f59e0b', marginTop: '0.25rem' }}>530.000 ₺</div>
            <div style={{ fontSize: '0.65rem', color: '#10b981', marginTop: '0.2rem' }}>Kârlılık Oranı: %36.5</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700' }}>ÖDENECEK VERGİ YÜKÜ</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6', marginTop: '0.25rem' }}>106.000 ₺</div>
            <div style={{ fontSize: '0.65rem', color: '#3b82f6', marginTop: '0.2rem' }}>Optimize Edildi</div>
          </div>
        </div>

        {/* Detay Kartları */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1rem' }}>📈 KDV & Matrah Dengesi</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Hesaplanan KDV (Satışlar):</span>
                  <span style={{ fontWeight: '800', color: '#10b981' }}>290.000 ₺</span>
                </div>
                <div style={{ width: '100%', backgroundColor: '#1e293b', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', backgroundColor: '#10b981', height: '100%' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>İndirilecek KDV (Alışlar):</span>
                  <span style={{ fontWeight: '800', color: '#ef4444' }}>184.000 ₺</span>
                </div>
                <div style={{ width: '100%', backgroundColor: '#1e293b', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '55%', backgroundColor: '#ef4444', height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>💡 Mali Müşavir Vergi Tavsiyesi</h3>
            <div style={{ backgroundColor: '#131f37', border: '1px solid #334155', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
              <span style={{ color: '#f59e0b', fontWeight: '800' }}>Hatice Başol Notu:</span> Şirketinizin 3. çeyrek kârlılık oranı yüksek seyretmektedir. Yıl sonu geçici vergi matrahını dengelemek adına planlanan demirbaş ve Ar-Ge yatırımlarını 4. çeyreğe çekmeniz vergi optimizasyonu sağlayacaktır.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}