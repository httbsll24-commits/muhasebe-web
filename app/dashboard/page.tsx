'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (!isLoggedIn) {
      router.push('/musteri-girisi');
    } else {
      setUser('Hatice Başol');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    router.push('/musteri-girisi');
  };

  const navItems = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'faturalar', label: '🧾 Faturalar' },
    { id: 'beyannameler', label: '📄 Beyannameler' },
    { id: 'evraklar', label: '📁 Evraklar' },
    { id: 'gelir-gider', label: '💰 Gelir / Gider' },
    { id: 'raporlar', label: '📈 Raporlar' },
    { id: 'bildirimler', label: '🔔 Bildirimler' },
    { id: 'ayarlar', label: '⚙️ Hesap Ayarları' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sol Menü (Sidebar) */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-amber-400">Müşteri Portalı</h2>
            <p className="text-xs text-slate-400 mt-1">{user || 'Müşteri Paneli'}</p>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 py-2.5 rounded-lg text-sm transition-colors mt-6 font-medium flex items-center justify-center gap-2"
        >
          <span>🚪</span> Çıkış Yap
        </button>
      </aside>

      {/* Sağ İçerik Alanı */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* 1. DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Genel Bakış</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <p className="text-slate-400 text-xs uppercase font-medium">Vergi Durumu</p>
                <p className="text-2xl font-bold text-emerald-400 mt-2">Borçsuz</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <p className="text-slate-400 text-xs uppercase font-medium">Yaklaşan Ödemeler</p>
                <p className="text-2xl font-bold text-amber-400 mt-2">₺14,250</p>
                <p className="text-xs text-slate-500 mt-1">Son Gün: 26 Ekim</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <p className="text-slate-400 text-xs uppercase font-medium">Bekleyen Beyanname</p>
                <p className="text-2xl font-bold text-sky-400 mt-2">1 Adet</p>
                <p className="text-xs text-slate-500 mt-1">KDV 1 Beyannamesi</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <p className="text-slate-400 text-xs uppercase font-medium">Okunmamış Bildirim</p>
                <p className="text-2xl font-bold text-rose-400 mt-2">2 Adet</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Son Hareketler</h2>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-800/50 rounded-lg flex justify-between items-center">
                  <span>Eylül 2026 KDV1 Beyannamesi Onaylandı</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded">Tamamlandı</span>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-lg flex justify-between items-center">
                  <span>Müşteri Danışmanlık Hizmeti Faturası Kesildi</span>
                  <span className="text-xs bg-sky-500/20 text-sky-400 px-2.5 py-1 rounded">Faturalandı</span>
                </div>
                <div className="p-3 bg-slate-800/50 rounded-lg flex justify-between items-center">
                  <span>Eylül Ayı Banka Ekstreleri Yüklendi</span>
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded">İncelemede</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. FATURALAR */}
        {activeTab === 'faturalar' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Faturalar</h1>
              <button className="bg-amber-500 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-amber-400 transition-colors">
                + Yeni Fatura Oluştur
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs text-slate-400 uppercase">
                  <tr>
                    <th className="p-4">Fatura No</th>
                    <th className="p-4">Müşteri / Firma</th>
                    <th className="p-4">Tarih</th>
                    <th className="p-4">Tutar</th>
                    <th className="p-4">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-mono text-amber-400">GIB202600000101</td>
                    <td className="p-4 font-medium">Yılmaz Lojistik A.Ş.</td>
                    <td className="p-4 text-slate-400">01.10.2026</td>
                    <td className="p-4 font-semibold">₺48,000.00</td>
                    <td className="p-4"><span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Ödendi</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-amber-400">GIB202600000102</td>
                    <td className="p-4 font-medium">Demir Makine Ltd. Şti.</td>
                    <td className="p-4 text-slate-400">03.10.2026</td>
                    <td className="p-4 font-semibold">₺12,500.00</td>
                    <td className="p-4"><span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">Bekliyor</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. BEYANNAMELER (DETAYLANDIRILDI) */}
        {activeTab === 'beyannameler' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Beyannameler & Vergi Takibi</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Onaylandı</span>
                <h3 className="font-bold text-lg mt-3 text-white">KDV 1 (Eylül 2026)</h3>
                <p className="text-xs text-slate-400 mt-1">Son Ödeme: 26 Ekim 2026</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tahakkuk Tutar:</span>
                  <span className="font-bold text-amber-400">₺8,450.00</span>
                </div>
                <button className="w-full mt-3 bg-slate-800 hover:bg-slate-700 text-xs py-2 rounded text-slate-200 transition-colors">
                  📄 Tahakkuk Fişi İndir (PDF)
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <span className="text-xs bg-sky-500/20 text-sky-400 px-2 py-1 rounded font-medium">Hazırlanıyor</span>
                <h3 className="font-bold text-lg mt-3 text-white">Muhtasar (3. Çeyrek)</h3>
                <p className="text-xs text-slate-400 mt-1">Son Ödeme: 26 Ekim 2026</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-sm">
                  <span className="text-slate-400">Tahmini Tutar:</span>
                  <span className="font-bold text-amber-400">₺5,800.00</span>
                </div>
                <button className="w-full mt-3 bg-slate-800/50 cursor-not-allowed text-xs py-2 rounded text-slate-500">
                  ⏳ Onay Bekleniyor
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-medium">Onaylandı</span>
                <h3 className="font-bold text-lg mt-3 text-white">Geçici Vergi (2. Dönem)</h3>
                <p className="text-xs text-slate-400 mt-1">Ödeme Yapıldı</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-sm">
                  <span className="text-slate-400">Ödenen Tutar:</span>
                  <span className="font-bold text-emerald-400">₺21,300.00</span>
                </div>
                <button className="w-full mt-3 bg-slate-800 hover:bg-slate-700 text-xs py-2 rounded text-slate-200 transition-colors">
                  📄 Beyanname İndir (PDF)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. EVRAKLAR */}
        {activeTab === 'evraklar' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Evrak Yönetimi & Dosya Yükleme</h1>
            
            <div className="border-2 border-dashed border-slate-700 bg-slate-900/50 rounded-xl p-8 text-center hover:border-amber-400 transition-colors cursor-pointer">
              <p className="text-3xl mb-2">📁</p>
              <p className="font-semibold text-slate-200">Dosyalarınızı buraya sürükleyin veya seçin</p>
              <p className="text-xs text-slate-500 mt-1">PDF, PNG, JPG veya XLSX (Maks. 25MB)</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-sm">Yüklü Evrak Arşivi</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-800/40 rounded-lg flex justify-between items-center">
                  <span className="flex items-center gap-2">📄 Eylül_E-Arsiv_Listesi.xlsx</span>
                  <span className="text-xs text-slate-400">2.4 MB</span>
                </div>
                <div className="p-3 bg-slate-800/40 rounded-lg flex justify-between items-center">
                  <span className="flex items-center gap-2">📄 Kira_Kontrat_2026.pdf</span>
                  <span className="text-xs text-slate-400">1.1 MB</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. GELİR / GİDER */}
        {activeTab === 'gelir-gider' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Gelir & Gider Analizi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <p className="text-slate-400 text-sm">Toplam Gelir (Bu Ay)</p>
                <p className="text-3xl font-bold text-emerald-400 mt-2">₺184,500.00</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <p className="text-slate-400 text-sm">Toplam Gider (Bu Ay)</p>
                <p className="text-3xl font-bold text-rose-400 mt-2">₺62,100.00</p>
              </div>
            </div>
          </div>
        )}

        {/* 6. RAPORLAR */}
        {activeTab === 'raporlar' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Mali Raporlar</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-amber-400">Mizan Raporu (Eylül 2026)</h3>
                  <p className="text-xs text-slate-400 mt-1">Detaylı hesap bakiyeleri</p>
                </div>
                <button className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-2 rounded transition-colors">İndir</button>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-amber-400">Kar / Zarar Tablosu</h3>
                  <p className="text-xs text-slate-400 mt-1">3. Çeyrek finansal durum</p>
                </div>
                <button className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-2 rounded transition-colors">İndir</button>
              </div>
            </div>
          </div>
        )}

        {/* 7. BİLDİRİMLER */}
        {activeTab === 'bildirimler' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Bildirimler</h1>
            <div className="space-y-3">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
                <span className="text-xl">🔔</span>
                <div>
                  <p className="font-medium text-sm">Yeni Vergi Düzenlemesi Hatırlatması</p>
                  <p className="text-xs text-slate-400 mt-1">E-Fatura limitlerinde güncel yapılan değişiklikler sisteminize tanımlanmıştır.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. HESAP AYARLARI (DETAYLANDIRILDI & HESAPTAN ÇIKIŞ EKLENDİ) */}
        {activeTab === 'ayarlar' && (
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-2xl font-bold">Hesap & Firma Ayarları</h1>

            {/* Profil Bilgileri */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold border-b border-slate-800 pb-3 text-amber-400">Firma & Kullanıcı Bilgileri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Ad Soyad</label>
                  <input type="text" readOnly value="Hatice Başol" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">E-Posta</label>
                  <input type="email" readOnly value="hatice@muhasebe.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Firma Unvanı</label>
                  <input type="text" readOnly value="Başol Danışmanlık ve Yazılım" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Vergi Dairesi / No</label>
                  <input type="text" readOnly value="Merkez / 1234567890" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white" />
                </div>
              </div>
            </div>

            {/* Bildirim Tercihleri */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
              <h2 className="text-lg font-semibold border-b border-slate-800 pb-3 text-amber-400">Bildirim Tercihleri</h2>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-amber-500 w-4 h-4" />
                <span>Beyanname onaylandığında SMS ile bilgilendir</span>
              </label>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-amber-500 w-4 h-4" />
                <span>Son ödeme tarihinden 3 gün önce e-posta gönder</span>
              </label>
            </div>

            {/* Oturum & Çıkış İşlemi */}
            <div className="bg-slate-900 border border-rose-500/20 rounded-xl p-6 space-y-3">
              <h2 className="text-lg font-semibold text-rose-400 border-b border-slate-800 pb-3">Oturum Yönetimi</h2>
              <p className="text-xs text-slate-400">Portal oturumunuzu güvenli bir şekilde kapatmak için aşağıdaki butonu kullanabilirsiniz.</p>
              <button
                onClick={handleLogout}
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Hesaptan Çıkış Yap
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}