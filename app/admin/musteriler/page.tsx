'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Company {
  id: string;
  title: string;
  vkn: string;
  tax_office: string;
  phone: string;
  email: string;
  address: string;
  created_at: string;
}

export default function AdminMusterilerPage() {
  const [musteriler, setMusteriler] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Form State
  const [title, setTitle] = useState('');
  const [vkn, setVkn] = useState('');
  const [taxOffice, setTaxOffice] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  // Müşterileri Çek
  const musterileriGetir = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMusteriler(data as Company[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    musterileriGetir();
  }, []);

  // Yeni Müşteri Ekle
  const handleMusteriEkle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase.from('companies').insert([
      {
        title,
        vkn,
        tax_office: taxOffice,
        phone,
        email,
      },
    ]);

    if (!error) {
      setTitle('');
      setVkn('');
      setTaxOffice('');
      setPhone('');
      setEmail('');
      setShowModal(false);
      musterileriGetir();
    } else {
      alert('Müşteri eklenirken hata oluştu: ' + error.message);
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">🏢 Mükellef & Müşteri Yönetimi</h1>
            <p className="text-slate-400 text-sm mt-1">Sistemdeki tüm mükellefleri yönetin ve Supabase veritabanına yeni firma tanımlayın.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            + Yeni Müşteri Tanımla
          </button>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-slate-400">Müşteriler Supabase veritabanından çekiliyor...</div>
          ) : musteriler.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Henüz kayıtlı mükellef bulunmuyor.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">VKN / TCKN</th>
                    <th className="p-4">Firma Unvanı</th>
                    <th className="p-4">Vergi Dairesi</th>
                    <th className="p-4">E-Posta</th>
                    <th className="p-4">Telefon</th>
                    <th className="p-4">Kayıt Tarihi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {musteriler.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-mono text-amber-400 font-semibold">{m.vkn}</td>
                      <td className="p-4 font-medium text-slate-100">{m.title}</td>
                      <td className="p-4 text-slate-400">{m.tax_office || '-'}</td>
                      <td className="p-4 text-slate-400">{m.email || '-'}</td>
                      <td className="p-4 text-slate-300">{m.phone || '-'}</td>
                      <td className="p-4 text-slate-400 text-xs">{new Date(m.created_at).toLocaleDateString('tr-TR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal - Yeni Müşteri Ekle */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-amber-400 mb-4">Yeni Mükellef Ekle</h2>
            <form onSubmit={handleMusteriEkle} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Firma Unvanı</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">VKN / TCKN</label>
                <input
                  type="text"
                  required
                  value={vkn}
                  onChange={(e) => setVkn(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Vergi Dairesi</label>
                <input
                  type="text"
                  value={taxOffice}
                  onChange={(e) => setTaxOffice(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase text-slate-400 mb-1">E-Posta</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-slate-400 mb-1">Telefon</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  {saving ? 'Kaydediliyor...' : 'Kaydet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}