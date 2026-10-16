'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TahsilatDashboardPage() {
  const [selectedAmount, setSelectedAmount] = useState(3500);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
  };

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', margin: 0 }}>💳 Müşavir Aidat & Online Ödeme</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>Aylık mali müşavirlik ve danışmanlık hizmet aidatınızı güvenle ödeyin.</p>
          </div>
          <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Portala Dön
          </Link>
        </div>

        {paymentSuccess ? (
          <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', color: '#10b981', borderRadius: '1rem', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '900' }}>Ödeme Başarıyla Tamamlandı!</h2>
            <p style={{ color: '#cbd5e1', marginTop: '0.5rem' }}>Ekim 2026 dönemi danışmanlık aidatı dekontunuz e-posta adresinize gönderilmiştir.</p>
            <button onClick={() => setPaymentSuccess(false)} style={{ backgroundColor: '#10b981', color: '#0b1329', fontWeight: '900', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', marginTop: '1.5rem', cursor: 'pointer' }}>
              Yeni İşlem Yap
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            
            {/* Sol: Borç & Tutar Seçimi */}
            <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1rem' }}>📋 Ödenecek Aidat Bilgisi</h2>
              <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Dönem:</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>Ekim 2026 Dönemi Aidatı</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', marginTop: '0.5rem' }}>3.500,00 ₺</div>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', marginBottom: '0.5rem' }}>Banka Havale / EFT (İş Bankası IBAN):</div>
              <div style={{ backgroundColor: '#070d1e', padding: '0.75rem', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#10b981', border: '1px solid #1e293b', fontWeight: '700' }}>
                TR68 0006 4000 0011 2233 4455 66
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>Alıcı: Hatice Başol Serbest Müşavirlik</div>
            </div>

            {/* Sağ: Sanal POS Kredi Kartı Formu */}
            <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>💳 Kredi Kartı ile Hızlı Öde</h2>
              <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.25rem' }}>KART ÜZERİNDEKİ İSİM</label>
                  <input type="text" placeholder="HATİCE BAŞOL" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.6rem', borderRadius: '0.4rem', fontWeight: '600' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.25rem' }}>KART NUMARASI</label>
                  <input type="text" placeholder="4543 **** **** 1234" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.6rem', borderRadius: '0.4rem', fontWeight: '600' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.25rem' }}>SKT (AA/YY)</label>
                    <input type="text" placeholder="12/28" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.6rem', borderRadius: '0.4rem', fontWeight: '600' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.25rem' }}>CVC / CVV</label>
                    <input type="text" placeholder="321" required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.6rem', borderRadius: '0.4rem', fontWeight: '600' }} />
                  </div>
                </div>
                <button type="submit" style={{ backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', padding: '0.85rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                  🔒 3.500,00 ₺ Güvenli Öde
                </button>
              </form>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}