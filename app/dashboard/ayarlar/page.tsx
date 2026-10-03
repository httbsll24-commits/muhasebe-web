'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function AyarlarPage() {
  const [tab, setTab] = useState<'firma' | 'guvenlik' | 'bildirim'>('firma');

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">⚙️ Hesap & Profil Ayarları</h1>
            <p className="text-slate-400 text-sm mt-1">Firma bilgilerinizi güncelleyin, güvenlik ayarlarınızı ve bildirim tercihlerinizi yönetin.</p>
          </div>
        </div>

        {/* Sekme Butonları */}
        <div className="flex space-x-2 border-b border-slate-800 mb-8">
          <button
            onClick={() => setTab('firma')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'firma'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🏢 Firma Bilgileri
          </button>
          <button
            onClick={() => setTab('guvenlik')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'guvenlik'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🔒 Şifre & Güvenlik
          </button>
          <button
            onClick={() => setTab('bildirim')}
            className={`pb-3 px-4 font-semibold text-sm transition border-b-2 ${
              tab === 'bildirim'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🔔 Bildirim Tercihleri
          </button>
        </div>

        {/* 1. SEKMELER: FİRMA BİLGİLERİ */}
        {tab === 'firma' && (
          <div className="max-w-3xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-100 mb-6 border-b border-slate-800 pb-3">Mükellef Kayıt Detayları</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Firma Unvanı / Ad Soyad</label>
                  <input type="text" defaultValue="Başol Teknoloji & Yazılım Ltd. Şti." className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Vergi Kimlik No (VKN / TCKN)</label>
                  <input type="text" defaultValue="1234567890" disabled className="w-full bg-slate-800/50 border border-slate-800 rounded-lg p-3 text-sm text-slate-400 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Vergi Dairesi</label>
                  <input type="text" defaultValue="Selçuk Vergi Dairesi" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">E-Posta Adresi</label>
                  <input type="email" defaultValue="iletisim@basol.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Telefon Numarası</label>
                  <input type="text" defaultValue="+90 532 000 00 00" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Mali Müşaviriniz</label>
                  <input type="text" defaultValue="SMMM Yüksel Başol" disabled className="w-full bg-slate-800/50 border border-slate-800 rounded-lg p-3 text-sm text-amber-400/80 cursor-not-allowed font-semibold" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Firma Adresi</label>
                <textarea rows={3} defaultValue="Atatürk Cad. No:123 Seydişehir / KONYA" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition text-sm">
                  Değişiklikleri Kaydet
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 2. SEKMELER: GÜVENLİK */}
        {tab === 'guvenlik' && (
          <div className="max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-100 mb-6 border-b border-slate-800 pb-3">Giriş Şifresini Değiştir</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Mevcut Şifre</label>
                <input type="password" placeholder="••••••••" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Yeni Şifre</label>
                <input type="password" placeholder="••••••••" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Yeni Şifre (Tekrar)</label>
                <input type="password" placeholder="••••••••" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" />
              </div>
              <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition text-sm">
                Şifreyi Güncelle
              </button>
            </form>
          </div>
        )}

        {/* 3. SEKMELER: BİLDİRİM */}
        {tab === 'bildirim' && (
          <div className="max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-3">Kanal Tercihleri</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-800 cursor-pointer">
                <div>
                  <span className="font-semibold text-sm text-slate-200 block">E-Posta Bildirimleri</span>
                  <span className="text-xs text-slate-400">Beyanname ve tahakkuk fişleri hazır olduğunda mail al.</span>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-amber-500" />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-800 cursor-pointer">
                <div>
                  <span className="font-semibold text-sm text-slate-200 block">SMS Hatırlatmaları</span>
                  <span className="text-xs text-slate-400">Son ödeme gününden 2 gün önce SMS uyarısı al.</span>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-amber-500" />
              </label>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
