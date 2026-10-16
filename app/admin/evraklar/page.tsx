'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DocumentItem {
  id: number;
  clientName: string;
  docTitle: string;
  docCategory: string;
  uploadDate: string;
  fileSize: string;
  status: string;
}

export default function EvraklarAdminPage() {
  const [docs, setDocs] = useState<DocumentItem[]>([
    { id: 1, clientName: 'ABC Teknoloji A.Ş.', docTitle: '2026 Vergi Levhası.pdf', docCategory: 'Vergi Levhası', uploadDate: '10.10.2026', fileSize: '1.2 MB', status: 'Paylaşıldı' },
    { id: 2, clientName: 'Özkan Lojistik Ltd.', docTitle: 'Eylül 2026 KDV Beyannamesi Tahakkuk.pdf', docCategory: 'Beyanname & Tahakkuk', uploadDate: '15.10.2026', fileSize: '850 KB', status: 'Incelendi' },
  ]);

  const [clientName, setClientName] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [docCategory, setDocCategory] = useState('Vergi Levhası');

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !docTitle) return;

    const newDoc: DocumentItem = {
      id: Date.now(),
      clientName,
      docTitle,
      docCategory,
      uploadDate: new Date().toLocaleDateString('tr-TR'),
      fileSize: '1.5 MB',
      status: 'Paylaşıldı',
    };

    setDocs([newDoc, ...docs]);
    setClientName('');
    setDocTitle('');
    alert('Evrak başarıyla mükellef dosyasına yüklendi!');
  };

  return (
    <div style={{ backgroundColor: '#0b1329', color: '#f8fafc', minHeight: '100vh', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', margin: 0 }}>📁 Mükellef Evrak Yönetimi</h1>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>Mükelleflerinize ait vergi levhası, imza sirküleri ve beyannameleri yükleyin ve paylaşın.</p>
          </div>
          <Link href="/" style={{ backgroundColor: '#1e293b', color: '#f59e0b', border: '1px solid #334155', padding: '0.6rem 1.2rem', borderRadius: '0.6rem', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Ana Sayfaya Dön
          </Link>
        </div>

        {/* Yükleme Formu */}
        <div style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#f59e0b', fontWeight: '800', marginBottom: '1.25rem' }}>📤 Yeni Dijital Evrak Yükle</h2>
          <form onSubmit={handleUpload} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>MÜKELLEF / FİRMA</label>
              <input type="text" placeholder="Örn: ABC A.Ş." value={clientName} onChange={(e) => setClientName(e.target.value)} required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>EVRAK KATEGORİSİ</label>
              <select value={docCategory} onChange={(e) => setDocCategory(e.target.value)} style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '700' }}>
                <option value="Vergi Levhası">📜 Vergi Levhası</option>
                <option value="Beyanname & Tahakkuk">📄 Beyanname / Tahakkuk</option>
                <option value="İmza Sirküleri & Sicil">🏢 İmza Sirküleri / Ticaret Sicil</option>
                <option value="Sözleşme & Protokol">📑 Mali Müşavirlik Sözleşmesi</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem' }}>EVRAK ADI (PDF/GÖRSEL)</label>
              <input type="text" placeholder="Örn: 2026_Vergi_Levhasi.pdf" value={docTitle} onChange={(e) => setDocTitle(e.target.value)} required style={{ width: '100%', backgroundColor: '#070d1e', border: '1px solid #334155', color: '#fff', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: '600' }} />
            </div>
            <div style={{ gridColumn: 'span 3', marginTop: '0.5rem' }}>
              <button type="submit" style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0b1329', fontWeight: '900', padding: '0.85rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>
                ⬆️ Evrağı Güvenli Portala Yükle ve Paylaş
              </button>
            </div>
          </form>
        </div>

        {/* Liste */}
        <div style={{ backgroundColor: '#070d1e', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', marginBottom: '1rem' }}>📑 Portaldaki Yüklü Evraklar ({docs.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {docs.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#131f37', border: '1px solid #1e293b', padding: '1rem 1.25rem', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '800' }}>{item.clientName} • {item.docCategory}</div>
                  <div style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginTop: '0.2rem' }}>{item.docTitle}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>Yükleme: {item.uploadDate} • Boyut: {item.fileSize}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.4rem 0.8rem', borderRadius: '0.4rem', fontSize: '0.75rem', fontWeight: '800' }}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}