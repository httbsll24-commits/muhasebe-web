'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DocumentItem {
  id: number;
  docTitle: string;
  docCategory: string;
  uploadDate: string;
  fileSize: string;
  status: string;
}

export default function EvraklarDashboardPage() {
  const [docs, setDocs] = useState<DocumentItem[]>([
    { id: 1, docTitle: '2026 Vergi Levhası.pdf', docCategory: 'Vergi Levhası', uploadDate: '10.10.2026', fileSize: '1.2 MB', status: 'Onaylandı' },
    { id: 2, docTitle: 'Eylül 2026 KDV Beyannamesi Tahakkuk.pdf', docCategory: 'Beyanname & Tahakkuk', uploadDate: '15.10.2026', fileSize: '850 KB', status: 'İncelendi' },
    { id: 3, docTitle: 'Ticaret Sicil Gazetesi Örneği.pdf', docCategory: 'Sicil & Kuruluş', uploadDate: '01.09.2026', fileSize: '2.4 MB', status: 'Onaylandı' },
  ]);

  const [docTitle, setDocTitle] = useState('');
  const [docCategory, setDocCategory] = useState('Vergi Levhası');

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docTitle) return;

    const newDoc: DocumentItem = {
      id: Date.now(),
      docTitle,
      docCategory,
      uploadDate: new Date().toLocaleDateString('tr-TR'),
      fileSize: '1.5 MB',
      status: 'Yüklendi',
    };

    setDocs([newDoc, ...docs]);
    setDocTitle('');
    alert('Evrak başarıyla sisteminize eklendi ve SMMM onayına gönderildi!');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', color: '#fff' }}>
      
      {/* Üst Başlık */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#f59e0b', margin: 0 }}>📁 Dijital Evrak & Belgelerim</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>Müşavirliğinizle paylaşılan veya sistemden indirebileceğiniz resmi evraklar.</p>
        </div>
        <Link href="/dashboard" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
          ← Portala Dön
        </Link>
      </div>

      {/* Müşkellef Evrak Yükleme Alanı */}
      <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.1rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1rem' }}>📤 Yeni Evrak / Fiş Yükle</h2>
        <form onSubmit={handleUpload} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.3rem' }}>EVRAK / DOKÜMAN ADI</label>
            <input
              type="text"
              placeholder="Örn: Ekim_Gider_Faturasi.pdf"
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
              required
              style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.3rem' }}>KATEGORİ</label>
            <select
              value={docCategory}
              onChange={(e) => setDocCategory(e.target.value)}
              style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}
            >
              <option value="Vergi Levhası">📜 Vergi Levhası</option>
              <option value="Beyanname & Tahakkuk">📄 Beyanname / Tahakkuk</option>
              <option value="Sicil & Kuruluş">🏢 Sicil & Sözleşme</option>
              <option value="Gider Fişi / Fatura">🧾 Gider Fişi / Fatura</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button type="submit" style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>
              ⬆️ Yükle
            </button>
          </div>
        </form>
      </div>

      {/* Evrak Listesi */}
      <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>📑 Sistemdeki Belgeler ({docs.length})</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {docs.map((item) => (
            <div key={item.id} style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1rem 1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '800' }}>{item.docCategory}</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginTop: '0.2rem' }}>{item.docTitle}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>Tarih: {item.uploadDate} • Boyut: {item.fileSize}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.3rem 0.6rem', borderRadius: '0.4rem', fontSize: '0.75rem', fontWeight: '800' }}>
                  {item.status}
                </span>
                <button onClick={() => alert(`${item.docTitle} indiriliyor...`)} style={{ backgroundColor: '#1e293b', color: '#3b82f6', border: '1px solid #334155', padding: '0.4rem 0.8rem', borderRadius: '0.4rem', fontWeight: '700', fontSize: '0.75rem', cursor: 'pointer' }}>
                  ⬇️ İndir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}