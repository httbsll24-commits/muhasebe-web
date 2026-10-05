'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TrackerItem {
  id: string;
  clientName: string;
  month: string;
  feeAmount: number;
  status: 'Bekliyor' | 'Ödendi';
  taxType: string;
}

export default function AdminCalcPage() {
  // KDV HESAPLAMA STATE
  const [amount, setAmount] = useState<number | ''>(1000);
  const [vatRate, setVatRate] = useState<number>(20);
  const [calcType, setCalcType] = useState<'hariç' | 'dahil'>('hariç');

  // AİDAT / VERGİ TAKİP STATE
  const [trackerList, setTrackerList] = useState<TrackerItem[]>([
    { id: '1', clientName: 'Ahmet Yılmaz - Tekstil Ltd.', month: 'Ekim 2026', feeAmount: 3500, status: 'Bekliyor', taxType: 'KDV / Muhtasar' },
    { id: '2', clientName: 'Kaya Otomotiv A.Ş.', month: 'Ekim 2026', feeAmount: 5000, status: 'Ödendi', taxType: 'Geçici Vergi' },
  ]);

  const [clientName, setClientName] = useState('');
  const [month, setMonth] = useState('Ekim 2026');
  const [feeAmount, setFeeAmount] = useState<number | ''>('');
  const [taxType, setTaxType] = useState('KDV Beyannamesi');

  // KDV HESAPLAMA MANTIĞI
  const numAmount = typeof amount === 'number' ? amount : 0;
  let vatAmount = 0;
  let totalAmount = 0;
  let baseAmount = 0;

  if (calcType === 'hariç') {
    baseAmount = numAmount;
    vatAmount = (numAmount * vatRate) / 100;
    totalAmount = numAmount + vatAmount;
  } else {
    totalAmount = numAmount;
    baseAmount = numAmount / (1 + vatRate / 100);
    vatAmount = totalAmount - baseAmount;
  }

  // YENİ TAKİP KAYDI EKLEME
  const handleAddTracker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !feeAmount) return;

    const newItem: TrackerItem = {
      id: Date.now().toString(),
      clientName,
      month,
      feeAmount: Number(feeAmount),
      status: 'Bekliyor',
      taxType,
    };

    setTrackerList([newItem, ...trackerList]);
    setClientName('');
    setFeeAmount('');
  };

  // DURUM DEĞİŞTİRME
  const toggleStatus = (id: string) => {
    setTrackerList(
      trackerList.map((item) =>
        item.id === id ? { ...item, status: item.status === 'Ödendi' ? 'Bekliyor' : 'Ödendi' } : item
      )
    );
  };

  // SILME
  const handleDelete = (id: string) => {
    setTrackerList(trackerList.filter((item) => item.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b1329', color: '#f8fafc', padding: '2.5rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* GEZİNTİ VE BAŞLIK */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', margin: 0 }}>
              🧮 KDV Hesaplama & Aidat Takip
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Hızlı KDV matrah hesaplamaları yapın ve müşteri aidat/vergi durumlarını takip edin.
            </p>
          </div>
          <Link href="/admin" style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f1f5f9', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '700' }}>
            ← Ana Panele Dön
          </Link>
        </div>

        {/* 1. BÖLÜM: KDV HESAPLAMA KARTI */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '1.25rem', padding: '2rem', marginBottom: '2.5rem', boxShadow: '0 20px 30px -10px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#38bdf8', marginTop: 0, marginBottom: '1.5rem' }}>
            📐 Pratik KDV Hesaplayıcı
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Tutar (TL)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="0"
                style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '0.85rem 1rem', color: '#ffffff', fontSize: '1rem', fontWeight: '700', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                KDV Oranı (%)
              </label>
              <select
                value={vatRate}
                onChange={(e) => setVatRate(Number(e.target.value))}
                style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '0.85rem 1rem', color: '#ffffff', fontSize: '1rem', fontWeight: '700', outline: 'none', boxSizing: 'border-box' }}
              >
                <option value={20}>%20 (Genel Oran)</option>
                <option value={10}>%10 (Gıda / Hizmet)</option>
                <option value={1}>%1 (Temel İhtiyaç)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Hesap Türü
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setCalcType('hariç')}
                  style={{ flex: 1, backgroundColor: calcType === 'hariç' ? '#38bdf8' : '#070d1e', color: calcType === 'hariç' ? '#0b1329' : '#94a3b8', border: '1px solid #1e293b', padding: '0.85rem', borderRadius: '0.75rem', fontWeight: '800', cursor: 'pointer' }}
                >
                  KDV Hariç
                </button>
                <button
                  type="button"
                  onClick={() => setCalcType('dahil')}
                  style={{ flex: 1, backgroundColor: calcType === 'dahil' ? '#38bdf8' : '#070d1e', color: calcType === 'dahil' ? '#0b1329' : '#94a3b8', border: '1px solid #1e293b', padding: '0.85rem', borderRadius: '0.75rem', fontWeight: '800', cursor: 'pointer' }}
                >
                  KDV Dahil
                </button>
              </div>
            </div>
          </div>

          {/* HESAP SONUÇLARI KARTI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', backgroundColor: '#070d1e', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600' }}>Matrah (Net Tutar):</span>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', margin: '0.25rem 0 0 0' }}>
                {baseAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '600' }}>KDV Tutarı (%{vatRate}):</span>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#f59e0b', margin: '0.25rem 0 0 0' }}>
                {vatAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '600' }}>Toplam Genel Tutar:</span>
              <p style={{ fontSize: '1.25rem', fontWeight: '900', color: '#34d399', margin: '0.25rem 0 0 0' }}>
                {totalAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺
              </p>
            </div>
          </div>
        </div>

        {/* 2. BÖLÜM: AİDAT VE VERGİ TAKİBİ */}
        <div style={{ backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '1.25rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginTop: 0, marginBottom: '1.5rem' }}>
            💼 Müşteri Aidat & Vergi Takip Listesi
          </h2>

          {/* YENİ TAKİP EKLEME FORMU */}
          <form onSubmit={handleAddTracker} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem', backgroundColor: '#070d1e', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #1e293b' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Müşteri / Firma</label>
              <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Örn: ABC A.Ş." style={{ width: '100%', backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.65rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Dönem / Ay</label>
              <input type="text" required value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Ekim 2026" style={{ width: '100%', backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.65rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Vergi / İşlem Türü</label>
              <select value={taxType} onChange={(e) => setTaxType(e.target.value)} style={{ width: '100%', backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.65rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }}>
                <option value="KDV Beyannamesi">KDV Beyannamesi</option>
                <option value="Geçici Vergi">Geçici Vergi</option>
                <option value="Aylık Müşavir Aidatı">Aylık Müşavir Aidatı</option>
                <option value="Muhtasar / SGK">Muhtasar / SGK</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#cbd5e1', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Tutar (TL)</label>
              <input type="number" required value={feeAmount} onChange={(e) => setFeeAmount(e.target.value === '' ? '' : Number(e.target.value))} placeholder="3500" style={{ width: '100%', backgroundColor: '#111c38', border: '1px solid #1e293b', borderRadius: '0.5rem', padding: '0.65rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button type="submit" style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0b1329', border: 'none', padding: '0.7rem', borderRadius: '0.5rem', fontWeight: '900', cursor: 'pointer' }}>
                + Kaydı Ekle
              </button>
            </div>
          </form>

          {/* LİSTE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {trackerList.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '0.85rem', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                      {item.taxType}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>• {item.month}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ffffff', margin: '0.4rem 0 0.2rem 0' }}>{item.clientName}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: '700', margin: 0 }}>{item.feeAmount.toLocaleString('tr-TR')} ₺</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={() => toggleStatus(item.id)}
                    style={{
                      backgroundColor: item.status === 'Ödendi' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                      color: item.status === 'Ödendi' ? '#34d399' : '#f59e0b',
                      border: `1px solid ${item.status === 'Ödendi' ? '#34d399' : '#f59e0b'}`,
                      padding: '0.4rem 0.85rem',
                      borderRadius: '0.5rem',
                      fontWeight: '800',
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item.status === 'Ödendi' ? '✓ Ödendi' : '⏳ Bekliyor'}
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700' }}
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}