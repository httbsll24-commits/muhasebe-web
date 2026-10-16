'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Örnek Veriler
  const faturalar = [
    { id: 'FTR-2026-001', firma: 'ABC Teknoloji Ltd. Şti.', tur: 'E-Fatura Kesilen', matrah: '45.000,00 ₺', kdv: '9.000,00 ₺', toplam: '54.000,00 ₺', durum: 'Onaylandı', tarih: '12.10.2026' },
    { id: 'FTR-2026-002', firma: 'XYZ Lojistik A.Ş.', tur: 'Gelen Alış Faturası', matrah: '18.500,00 ₺', kdv: '3.700,00 ₺', toplam: '22.200,00 ₺', durum: 'İşlendi', tarih: '14.10.2026' },
    { id: 'FTR-2026-003', firma: 'Başol Danışmanlık', tur: 'SMM Hizmet Faturası', matrah: '3.500,00 ₺', kdv: '700,00 ₺', toplam: '4.200,00 ₺', durum: 'Ödendi', tarih: '15.10.2026' },
  ];

  const beyannameler = [
    { ad: 'KDV-1 Beyannamesi', donem: 'Eylül 2026', sonGun: '26 Ekim 2026', tutar: '9.450,00 ₺', durum: 'Tahakkuk Edildi' },
    { ad: 'Muhtasar ve Prim Hizmet (MUHSGK)', donem: 'Eylül 2026', sonGun: '26 Ekim 2026', tutar: '14.200,00 ₺', durum: 'Onay Bekliyor' },
    { ad: 'Geçici Vergi (3. Dönem)', donem: '2026 / Q3', sonGun: '17 Kasım 2026', tutar: '32.100,00 ₺', durum: 'Hazırlanıyor' },
  ];

  const [evraklar, setEvraklar] = useState([
    { id: 1, ad: '2026 Vergi Levhası.pdf', kat: 'Vergi Levhası', tarih: '10.10.2026', durum: 'Onaylandı' },
    { id: 2, ad: 'Eylül KDV Tahakkuku.pdf', kat: 'Tahakkuk', tarih: '15.10.2026', durum: 'İncelendi' },
    { id: 3, ad: 'Ticaret Sicil Gazetesi.pdf', kat: 'Sicil', tarih: '01.09.2026', durum: 'Onaylandı' },
  ]);

  const [yeniEvrak, setYeniEvrak] = useState('');

  const handleEvrakEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yeniEvrak) return;
    setEvraklar([{ id: Date.now(), ad: yeniEvrak, kat: 'Gider Fişi / Fatura', tarih: new Date().toLocaleDateString('tr-TR'), durum: 'Yüklendi' }, ...evraklar]);
    setYeniEvrak('');
    alert('Evrak eklendi!');
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'faturalar', name: 'Faturalar', icon: '📑' },
    { id: 'beyannameler', name: 'Beyannameler', icon: '🏛️' },
    { id: 'evraklar', name: 'Evraklar', icon: '📁' },
    { id: 'gelir-gider', name: 'Gelir / Gider', icon: '💰' },
    { id: 'raporlar', name: 'Raporlar', icon: '📈' },
    { id: 'tahsilat', name: 'Tahsilat & Aidat', icon: '💳' },
    { id: 'bildirimler', name: 'Bildirimler', icon: '🔔' },
    { id: 'ayarlar', name: 'Hesap Ayarları', icon: '⚙️' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      
      {/* SOL MENÜ (SABİT & TEK) */}
      <aside style={{ width: '280px', backgroundColor: '#070d1e', borderRight: '1px solid #1e293b', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexShrink: 0 }}>
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

          {/* Profil */}
          <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', padding: '0.85rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: '700', textTransform: 'uppercase' }}>MÜŞTERİ PORTALI</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginTop: '0.25rem' }}>Hatice Başol</div>
          </div>

          {/* Sekme Butonları */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    backgroundColor: isActive ? '#f59e0b' : 'transparent',
                    color: isActive ? '#0b1329' : '#cbd5e1',
                    boxShadow: isActive ? '0 4px 12px rgba(245, 158, 11, 0.25)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Alt Araçlar */}
        <div style={{ marginTop: '2rem', borderTop: '1px solid #1e293b', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <Link href="/admin/calc" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', borderRadius: '0.6rem', backgroundColor: '#131f37', border: '1px solid #334155', color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
            <span>🧮</span>
            <span>Mali Hesaplayıcı</span>
          </Link>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '0.6rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#f59e0b', fontWeight: '800', fontSize: '0.85rem', textDecoration: 'none' }}>
            <span>🏠</span>
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </aside>

      {/* SAĞ TARAF - TIKLANAN SEKMENİN DOLU DOKU İÇERİĞİ */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        
        {/* 1. DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>📊 Genel Bakış & Finansal Özet</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.85rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ekim Ciro</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#10b981', marginTop: '0.3rem' }}>185.000,00 ₺</div>
              </div>
              <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.85rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Vergi Durumu</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#10b981', marginTop: '0.3rem' }}>Borçsuz ✅</div>
              </div>
              <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.85rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Ödenecek Aidat</div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#f59e0b', marginTop: '0.3rem' }}>3.500,00 ₺</div>
              </div>
            </div>
          </div>
        )}

        {/* 2. FATURALAR */}
        {activeTab === 'faturalar' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>📑 E-Fatura & E-Arşiv İşlemleri</h1>
            <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {faturalar.map((f) => (
                  <div key={f.id} style={{ backgroundColor: '#131f37', padding: '1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '800' }}>{f.id} • {f.tur}</span>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: '800', margin: '0.2rem 0' }}>{f.firma}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tarih: {f.tarih}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#fff' }}>{f.toplam}</div>
                      <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.2rem 0.6rem', borderRadius: '0.3rem', fontSize: '0.75rem', fontWeight: '800' }}>{f.durum}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. BEYANNAMELER */}
        {activeTab === 'beyannameler' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>🏛️ Resmi Beyanname & Tahakkuk Fişleri</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {beyannameler.map((b, i) => (
                <div key={i} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '800' }}>{b.donem} • Son Gün: {b.sonGun}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0.2rem 0' }}>{b.ad}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Tahakkuk Tutarı: <strong style={{ color: '#fff' }}>{b.tutar}</strong></span>
                  </div>
                  <button onClick={() => alert('Tahakkuk PDF indiriliyor...')} style={{ backgroundColor: '#1e293b', color: '#3b82f6', border: '1px solid #334155', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '700', cursor: 'pointer' }}>
                    ⬇️ Tahakkuk PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. EVRAKLAR */}
        {activeTab === 'evraklar' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>📁 Dijital Evrak & Müşellef Belgeleri</h1>
            
            <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '0.85rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '0.75rem' }}>📤 Yeni Belge / Evrak Yükle</h3>
              <form onSubmit={handleEvrakEkle} style={{ display: 'flex', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Örn: Ekim_Gider_Faturasi.pdf"
                  value={yeniEvrak}
                  onChange={(e) => setYeniEvrak(e.target.value)}
                  style={{ flex: 1, backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem' }}
                />
                <button type="submit" style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', cursor: 'pointer' }}>Yükle</button>
              </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {evraklar.map((e) => (
                <div key={e.id} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1rem 1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '800' }}>{e.kat}</span>
                    <h4 style={{ fontSize: '1rem', margin: '0.2rem 0' }}>{e.ad}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tarih: {e.tarih}</span>
                  </div>
                  <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.3rem 0.6rem', borderRadius: '0.3rem', fontSize: '0.75rem', fontWeight: '800' }}>{e.durum}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. GELİR / GİDER */}
        {activeTab === 'gelir-gider' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>💰 Gelir & Gider Analizi</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>📈 Toplam Gelir</h3>
                <div style={{ fontSize: '2rem', fontWeight: '900' }}>185.000,00 ₺</div>
              </div>
              <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
                <h3 style={{ color: '#ef4444', margin: '0 0 0.5rem 0' }}>📉 Toplam Gider</h3>
                <div style={{ fontSize: '2rem', fontWeight: '900' }}>112.400,00 ₺</div>
              </div>
            </div>
          </div>
        )}

        {/* 6. RAPORLAR */}
        {activeTab === 'raporlar' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>📈 Finansal Bilanço Raporu</h1>
            <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b' }}>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                <strong>Hatice Başol Müşavirlik Notu:</strong> 3. Çeyrek faaliyet kârlılığınız %36.5 seviyesindedir. Yıl sonu geçici vergi matrahını dengelemek adına planlanan Ar-Ge ve demirbaş alımlarınızı 4. çeyreğe kaydırmanız vergi optimizasyonu sağlayacaktır.
              </p>
            </div>
          </div>
        )}

        {/* 7. TAHSİLAT & AİDAT */}
        {activeTab === 'tahsilat' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>💳 Müşavir Aidatı & Online Ödeme</h1>
            <div style={{ backgroundColor: '#131f37', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b', maxWidth: '500px' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Dönem: Ekim 2026 Aidatı</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', margin: '0.5rem 0' }}>3.500,00 ₺</div>
              <button onClick={() => alert('Ödeme başarıyla alındı!')} style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', border: 'none', padding: '0.85rem', borderRadius: '0.5rem', cursor: 'pointer', marginTop: '1rem' }}>
                🔒 Kredi Kartı ile Güvenli Öde
              </button>
            </div>
          </div>
        )}

        {/* 8. BİLDİRİMLER */}
        {activeTab === 'bildirimler' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>🔔 Duyuru & Bildirimler</h1>
            <div style={{ backgroundColor: '#070d1e', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
              <div style={{ color: '#f59e0b', fontWeight: '800', fontSize: '0.8rem' }}>📣 SMMM BİLDİRİMİ</div>
              <h3 style={{ margin: '0.3rem 0' }}>Eylül KDV Tahakkuku Sisteme Yüklendi</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Eylül dönemi KDV tahakkuk fişinizi Beyannameler sekmesinden indirebilirsiniz.</p>
            </div>
          </div>
        )}

        {/* 9. AYARLAR */}
        {activeTab === 'ayarlar' && (
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginBottom: '1.5rem' }}>⚙️ Müşellef Profil Ayarları</h1>
            <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.85rem', border: '1px solid #1e293b', maxWidth: '600px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>FİRMA UNVANI</label>
                <input type="text" defaultValue="Hatice Başol - BorusanBT Müşteşarlık" style={{ width: '100%', backgroundColor: '#131f37', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem' }} />
              </div>
              <button onClick={() => alert('Profil güncellendi!')} style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', cursor: 'pointer' }}>💾 Kaydet</button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}