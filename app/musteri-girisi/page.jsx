'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MusteriGirisiPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş simülasyonu -> Doğrudan Müşteri Portalı'na yönlendir
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-[#0b1329] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-amber-500 text-slate-950 font-black text-2xl w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
            M
          </div>
          <h1 className="text-2xl font-extrabold text-white">Müşteri Portalı Girişi</h1>
          <p className="text-slate-400 text-xs mt-1">Başol Mali Müşavirlik Mükellef Bilgi Sistemi</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">E-Posta veya VKN / TCKN</label>
            <input 
              type="text" 
              required 
              placeholder="ornek@sirket.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Şifre</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400" 
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
              <input type="checkbox" className="accent-amber-500 rounded" /> Beni Hatırla
            </label>
            <a href="#" className="text-amber-400 hover:underline">Şifremi Unuttum</a>
          </div>

          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-lg transition text-sm">
            Portal Portalına Giriş Yap
          </button>
        </form>
      </div>
    </main>
  );
}