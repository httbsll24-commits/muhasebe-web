'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'gelir' | 'gider';
  category: string;
  date: string;
}

export default function GelirGiderPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Form State
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'gelir' | 'gider'>('gider');
  const [category, setCategory] = useState('Genel');
  const [saving, setSaving] = useState(false);

  // Kayıtları Çek
  const kayitlariGetir = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .order('date', { ascending: false });

    if (!error && data) {
      setTransactions(data as Transaction[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    kayitlariGetir();
  }, []);

  // Yeni Gelir/Gider Ekle
  const handleKayitEkle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase.from('expenses').insert([
      {
        title,
        amount: parseFloat(amount),
        type,
        category,
        date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (!error) {
      setTitle('');
      setAmount('');
      setType('gider');
      setCategory('Genel');
      setShowModal(false);
      kayitlariGetir();
    } else {
      alert('Kayıt eklenirken hata oluştu: ' + error.message);
    }
    setSaving(false);
  };

  const toplamGelir = transactions.filter(t => t.type === 'gelir').reduce((acc, t) => acc + (Number(t.amount) || 0), 0);
  const toplamGider = transactions.filter(t => t.type === 'gider').reduce((acc, t) => acc + (Number(t.amount) || 0), 0);
  const netBakiye = toplamGelir - toplamGider;

  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-amber-400">💰 Gelir / Gider Takibi</h1>
            <p className="text-slate-400 text-sm mt-1">İşletmenizin kasa/banka hareketlerini ve net nakit akışını yönetin.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            + Yeni İşlem Ekle
          </button>
        </div>

        {/* Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Toplam Gelir</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">+{toplamGelir.toLocaleString('tr-TR')} ₺</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Toplam Gider</span>
            <div className="text-2xl font-bold text-rose-400 mt-1">-{toplamGider.toLocaleString('tr-TR')} ₺</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-400 uppercase font-semibold">Net Durum / Bakiye</span>
            <div className={`text-2xl font-bold mt-1 ${netBakiye >= 0 ? 'text-amber-400' : 'text-rose-500'}`}>
              {netBakiye.toLocaleString('tr-TR')} ₺
            </div>
          </div>
        </div>

        {/* Tablo */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-slate-400">İşlemler Supabase'den çekiliyor...</div>
          ) : transactions.length === 0 ? (
            <div className="p-8 text-center text-slate-400">Henüz kayıtlı gelir veya gider işlemi bulunmuyor.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">Açıklama</th>
                    <th className="p-4">Kategori</th>
                    <th className="p-4">Tür</th>
                    <th className="p-4">Tarih</th>
                    <th className="p-4 text-right">Tutar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-medium text-slate-100">{t.title}</td>
                      <td className="p-4 text-slate-400">{t.category || 'Genel'}</td>
                      <td className="p-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            t.type === 'gelir'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}
                        >
                          {t.type === 'gelir' ? 'Gelir' : 'Gider'}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 text-xs">{t.date}</td>
                      <td className={`p-4 font-bold text-right ${t.type === 'gelir' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {t.type === 'gelir' ? '+' : '-'}{Number(t.amount).toLocaleString('tr-TR')} ₺
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Modal - Yeni Kayıt */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-amber-400 mb-4">Yeni Gelir / Gider Kaydı</h2>
            <form onSubmit={handleKayitEkle} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">İşlem Türü</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setType('gelir')}
                    className={`py-2 text-xs font-bold rounded-lg transition ${
                      type === 'gelir' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    + Gelir
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('gider')}
                    className={`py-2 text-xs font-bold rounded-lg transition ${
                      type === 'gider' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    - Gider
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Açıklama</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ofis Kira Ödemesi"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Tutar (₺)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-slate-400 mb-1">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Genel</option>
                  <option>Kira / Aidat</option>
                  <option>Personel / Maaş</option>
                  <option>Fatura / Hizmet</option>
                  <option>Satış / Gelir</option>
                </select>
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