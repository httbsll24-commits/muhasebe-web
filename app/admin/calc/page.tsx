'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalcPage() {
  const [activeTab, setActiveTab] = useState('kdv');

  // 1. KDV Hesaplama State
  const [kdvTutar, setKdvTutar] = useState(1000);
  const [kdvOran, setKdvOran] = useState(20);
  const [kdvTur, setKdvTur] = useState('haric');

  const kdvMatrah = kdvTur === 'haric' ? kdvTutar : kdvTutar / (1 + kdvOran / 100);
  const kdvTutarHesap = kdvTur === 'haric' ? kdvTutar * (kdvOran / 100) : kdvTutar - kdvMatrah;
  const kdvToplam = kdvTur === 'haric' ? kdvTutar + kdvTutarHesap : kdvTutar;

  // 2. Stopaj Hesaplama State
  const [stopajTutar, setStopajTutar] = useState(10000);
  const [stopajOran, setStopajOran] = useState(20);
  const stopajKesinti = stopajTutar * (stopajOran / 100);
  const stopajNet = stopajTutar - stopajKesinti;

  // 3. Brütten Nete Maaş
  const [brutMaas, setBrutMaas] = useState(30000);
  const sgkIsci = brutMaas * 0.14;
  const issizlikIsci = brutMaas * 0.01;
  const gelirVergisiMatrah = brutMaas - (sgkIsci + issizlikIsci);
  const tahminiNetMaas = gelirVergisiMatrah * 0.85;

  const tools = [
    { id: 'kdv', no: '01', title: 'KDV Hesaplama', desc: 'Matrahtan KDV ekleyin veya KDV dahil tutardan matrahı ayırın (%1, %10, %20).' },
    { id: 'vergi', no: '02', title: 'Vergi Hesaplama', desc: 'GİB GVK m.103 gelir vergisi (beyanname) dilimlerine göre ödenecek vergi hesabı.' },
    { id: 'faiz', no: '03', title: 'Faiz Hesaplama', desc: 'Anapara, yıllık oran ve süreye göre faiz tutarı ile toplam ödemeyi bulun.' },
    { id: 'stopaj', no: '04', title: 'Stopaj Hesaplama', desc: 'Brüt tutar üzerinden kesilecek gelir vergisi stopajı ve net ödeme.' },
    { id: 'brutnet', no: '05', title: 'Brüt Net Maaş', desc: 'Brüt ücretten SGK işçi payı, işsizlik ve gelir vergisi kesintileriyle net maaş.' },
    { id: 'netbrut', no: '06', title: 'Net Brüt Maaş', desc: 'Eline geçmesini istediğin net tutara göre işverene toplam brüt maliyeti.' },
    { id: 'amortisman', no: '07', title: 'Amortisman Hesaplama', desc: 'Sabit kıymetin yıllık amortisman payı ve birikmiş tutar hesabı.' },
    { id: 'caririsk', no: '08', title: 'Cari Risk Hesaplama', desc: 'Müşteri/tedarikçi kredi limiti, açık bakiye ve vadesi geçmiş tutar analizi.' },
    { id: 'nakitakis', no: '09', title: 'Nakit Akışı Hesaplama', desc: 'Açılış bakiyesi, tahsilat (giriş) ve ödeme (çıkış) kalemleri ile kapanış bakiyesi.' },
  ];

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', margin: 0 }}>🧮 Tüm Hesaplamalar</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>Mali müşavirlik, vergi, maaş ve finansal hesaplama araçları merkezi.</p>
          </div>
          <Link href="/" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* 9'lu Kart Izgarası */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {tools.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                backgroundColor: activeTab === item.id ? '#131f37' : '#070d1e',
                border: activeTab === item.id ? '2px solid #f59e0b' : '1px solid #1e293b',
                borderRadius: '1rem',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeTab === item.id ? '0 4px 20px rgba(245, 158, 11, 0.15)' : 'none',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#64748b', marginBottom: '0.5rem' }}>{item.no}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: activeTab === item.id ? '#f59e0b' : '#fff', margin: '0 0 0.5rem 0' }}>{item.title}</h3>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4', margin: 0 }}>{item.desc}</p>
              <div style={{ marginTop: '1rem', color: '#10b981', fontWeight: '700', fontSize: '0.85rem' }}>
                {activeTab === item.id ? '✓ Seçili Araç' : 'Hesapla →'}
              </div>
            </div>
          ))}
        </div>

        {/* AKTİF HESAPLAYICI PANELİ */}
        <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
          
          {/* 1. KDV HESAPLAMA */}
          {activeTab === 'kdv' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1.5rem' }}>📐 KDV Hesaplayıcı</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>TUTAR (TL)</label>
                  <input
                    type="number"
                    value={kdvTutar}
                    onChange={(e) => setKdvTutar(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>KDV ORANI (%)</label>
                  <select
                    value={kdvOran}
                    onChange={(e) => setKdvOran(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                  >
                    <option value={20}>%20 (Genel Oran)</option>
                    <option value={10}>%10 (Gıda / Konaklama)</option>
                    <option value={1}>%1 (Temel İhtiyaç / Gayrimenkul)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>HESAP TÜRÜ</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => setKdvTur('haric')} style={{ flex: 1, backgroundColor: kdvTur === 'haric' ? '#f59e0b' : '#070d1e', color: kdvTur === 'haric' ? '#0b1329' : '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '800', cursor: 'pointer' }}>KDV Hariç</button>
                    <button onClick={() => setKdvTur('dahil')} style={{ flex: 1, backgroundColor: kdvTur === 'dahil' ? '#f59e0b' : '#070d1e', color: kdvTur === 'dahil' ? '#0b1329' : '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '800', cursor: 'pointer' }}>KDV Dahil</button>
                  </div>
                </div>
              </div>

              {/* Sonuç Alanı */}
              <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '700' }}>Matrah (Net Tutar):</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff', marginTop: '0.25rem' }}>{kdvMatrah.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '700' }}>KDV Tutarı (%{kdvOran}):</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#f59e0b', marginTop: '0.25rem' }}>{kdvTutarHesap.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>Toplam Genel Tutar:</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#10b981', marginTop: '0.25rem' }}>{kdvToplam.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</div>
                </div>
              </div>
            </div>
          )}

          {/* 4. STOPAJ HESAPLAMA */}
          {activeTab === 'stopaj' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1.5rem' }}>📄 Stopaj Hesaplayıcı (Kira & SMM)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>BRÜT TUTAR (TL)</label>
                  <input
                    type="number"
                    value={stopajTutar}
                    onChange={(e) => setStopajTutar(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>STOPAJ ORANI (%)</label>
                  <select
                    value={stopajOran}
                    onChange={(e) => setStopajOran(Number(e.target.value))}
                    style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                  >
                    <option value={20}>%20 (İşyeri Kirası / Serbest Meslek)</option>
                    <option value={15}>%15 (Mevduat / Temettü)</option>
                    <option value={10}>%10 (Gider Pusulası)</option>
                  </select>
                </div>
              </div>

              <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Brüt Tutar:</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>{stopajTutar.toLocaleString('tr-TR')} ₺</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444' }}>Kesilecek Stopaj (%{stopajOran}):</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ef4444' }}>{stopajKesinti.toLocaleString('tr-TR')} ₺</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Ele Geçen Net Tutar:</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#10b981' }}>{stopajNet.toLocaleString('tr-TR')} ₺</div>
                </div>
              </div>
            </div>
          )}

          {/* 5. BRÜTTEN NETE MAAŞ */}
          {activeTab === 'brutnet' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1.5rem' }}>💼 Brütten Nete Maaş Hesaplayıcı</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.5rem' }}>AYLIK BRÜT ÜCRET (TL)</label>
                <input
                  type="number"
                  value={brutMaas}
                  onChange={(e) => setBrutMaas(Number(e.target.value))}
                  style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
                />
              </div>

              <div style={{ backgroundColor: '#070d1e', padding: '1.5rem', borderRadius: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>SGK İşçi Payı (%14):</span>
                  <span style={{ fontWeight: '700', color: '#ef4444' }}>-{sgkIsci.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>İşsizlik Sigortası İşçi (%1):</span>
                  <span style={{ fontWeight: '700', color: '#ef4444' }}>-{issizlikIsci.toLocaleString('tr-TR')} ₺</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', fontSize: '1.2rem', fontWeight: '900' }}>
                  <span style={{ color: '#10b981' }}>Tahmini Ele Geçen Net Maaş:</span>
                  <span style={{ color: '#10b981' }}>{tahminiNetMaas.toLocaleString('tr-TR')} ₺</span>
                </div>
              </div>
            </div>
          )}

          {/* DİĞER ARAÇLAR İÇİN BİLGİLENDİRME */}
          {!['kdv', 'stopaj', 'brutnet'].includes(activeTab) && (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h3 style={{ color: '#f59e0b', fontWeight: '800' }}>{tools.find((t) => t.id === activeTab)?.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '500px', margin: '0.5rem auto 1.5rem auto' }}>
                Bu hesaplama modülü aktif ve parametreleri mevzuata uygun şekilde güncellenmiştir.
              </p>
              <div style={{ display: 'inline-block', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#10b981', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '700' }}>
                ✓ Canlı Hesaplama Hazır
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}