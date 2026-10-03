'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function MusteriGirisiPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('Giriş başarısız: ' + error.message);
      setLoading(false);
    } else {
      // Başarılı girişte doğrudan müşteri dashboard'una yönlendir
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-amber-400 mb-2 text-center">Müşteri Portalı Girişi</h1>
        <p className="text-slate-400 text-xs text-center mb-6">Mali müşavir portalınıza erişmek için bilgilerinizi giriniz.</p>

        {errorMsg && (
          <div className="p-3 mb-4 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase text-slate-400 mb-1">E-Posta Adresi</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-400"
              placeholder="ornek@firma.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-400 mb-1">Şifre</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-lg text-sm transition disabled:opacity-50"
          >
            {loading ? 'Giriş Yapılıyor...' : 'Portal Girişi Yap'}
          </button>
        </form>
      </div>
    </div>
  );
}