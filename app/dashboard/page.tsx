'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Mükellef Portalı</h1>
            <p className="text-slate-400 text-sm">Hoş geldiniz, {user || 'Değerli Müşterimiz'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Çıkış Yap
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Aktif Beyannameler</h3>
            <p className="text-3xl font-bold text-amber-400">3</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Son Evrak Durumu</h3>
            <p className="text-lg font-semibold text-emerald-400">Onaylandı</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Sistem Mesajları</h3>
            <p className="text-sm text-slate-300">Yeni dönem vergi bildirimi yüklendi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}