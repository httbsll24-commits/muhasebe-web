'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function BildirimlerPage() {
  const [bildirimler, setBildirimler] = useState([
    { id: 'NTF-001', baslik: 'KDV1 Beyannamesi Onaylandı', icerik: 'Eylül 2026 dönemine ait KDV1 beyannamesi GİB sistemine iletilmiş ve tahakkuk fişi oluşturulmuştur.', tarih: '03.10.2026 - 10:15', kategori: 'Beyanname', okundu: false },
    { id: 'NTF-002', baslik: 'Ekim Ayı Vergi Takvimi Hatırlatması', icerik: '26 Ekim 2026 tarihine kadar KDV ve Muhtasar ödemelerinizi yapmayı unutmayınız.', tarih: '01.10.2026 - 09:00', kategori: 'Hatırlatma', okundu: false },
    { id: 'NTF-003', baslik: 'Yeni Fiş/Fatura Yükleme Onayı', icerik: 'Yüklediğiniz EVR-2026-044 kodlu Banka Dekontu mali müşaviriniz tarafından incelenip işlenmiştir.', tarih: '28.09.2026 - 16:30', kategori: 'Evrak', okundu: true },
    { id: 'NTF-004', baslik: 'Mevzuat Güncellemesi: E-Defter Takvimi', icerik: 'Resmi Gazete’de yayımlanan son tebliğe göre e-defter berat yükleme süreleri güncellenmiştir.', tarih: '20.09.2026 - 14:00', kategori: 'Mevzuat', okundu: true },
  ]);

  const tumunuOkunduYap = () => {
    setBildirimler(bildirimler.map(b => ({ ...b, okundu: true })));
  };

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">🔔 Bildirim Merkezi</h1>
            <p className="text-slate-400 text-sm mt-1">Mali müşavirinizden gelen sistem bildirimlerini, evrak durumlarını ve vergi hatırlatmalarını takip edin.</p>
          </div>
          <button 
            onClick={tumunuOkunduYap}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Tümünü Okundu İşaretle
          </button>
        </div>

        {/* Özet İstatistik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Toplam Bildirim</span>
            <div className="text-2xl font-bold text-slate-100 mt-1">{bildirimler.length} Adet</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Okunmamış Bildirim</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">
              {bildirimler.filter(b => !b.okundu).length} Adet
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase">Son Bildirim Tarihi</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">Bugün</div>
          </div>
        </div>

        {/* Bildirim Listesi */}
        <div className="space-y-4">
          {bildirimler.map((item) => (
            <div 
              key={item.id} 
              className={`p-6 rounded-xl border transition ${
                item.okundu 
                  ? 'bg-slate-900/60 border-slate-800/80 text-slate-400' 
                  : 'bg-slate-900 border-amber-500/40 text-slate-100 shadow-lg shadow-amber-500/5'
              }`}
            >
              <div className="flex justify-between items-start mb-2 gap-4">
                <div className="flex items-center gap-3">
                  {!item.okundu && (
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                  )}
                  <h3 className={`font-bold text-base ${item.okundu ? 'text-slate-300' : 'text-amber-400'}`}>
                    {item.baslik}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-700">
                  {item.kategori}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-3 pl-5">
                {item.icerik}
              </p>
              <div className="text-[11px] text-slate-400 pl-5">
                🕒 {item.tarih}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}