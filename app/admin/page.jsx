'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Yeni haber ekleme formu state'leri
  const [title, setTitle] = useState('');
  const [badge, setBadge] = useState('Mevzuat');
  const [summary, setSummary] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      fetchNews();
    }
  }, [router]);

  // Haberleri Çek
  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      if (data.success) {
        setNewsList(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Yeni Haber Ekle
  const handleAddNews = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, badge, summary, isImportant }),
      });
      const data = await res.json();
      if (data.success) {
        setTitle('');
        setSummary('');
        setIsImportant(false);
        fetchNews(); // Listeyi güncelle
      }
    } catch (err) {
      alert('Ekleme başarısız!');
    }
  };

  // Haber Sil
  const handleDeleteNews = async (id) => {
    if (!confirm('Bu haberi silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchNews(); // Listeyi güncelle
      }
    } catch (err) {
      alert('Silme işlemi başarısız!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) return <div className="p-8 text-center">Yükleniyor...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Yönetim Paneli</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          >
            Çıkış Yap
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sol Kolon: Yeni Haber Ekleme Formu */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Yeni Haber/Mevzuat Ekle</h2>
            <form onSubmit={handleAddNews} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Başlık</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Kategori (Badge)</label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm"
                >
                  <option value="Mevzuat">Mevzuat</option>
                  <option value="E-Dönüşüm">E-Dönüşüm</option>
                  <option value="Duyuru">Duyuru</option>
                  <option value="Vergi">Vergi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Özet İçerik</label>
                <textarea
                  required
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="important"
                  checked={isImportant}
                  onChange={(e) => setIsImportant(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="important" className="text-sm font-medium text-gray-700">
                  Önemli Duyuru Olarak İşaretle
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 text-sm"
              >
                Haber Yayınla
              </button>
            </form>
          </div>

          {/* Sağ Kolon: Mevcut Haber Listesi & Silme */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Ekli Haberler ({newsList.length})</h2>
            <div className="space-y-4">
              {newsList.map((item) => (
                <div key={item._id} className="border border-gray-200 p-4 rounded flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                        {item.badge}
                      </span>
                      {item.isImportant && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded">
                          Önemli
                        </span>
                      )}
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{item.summary}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteNews(item._id)}
                    className="ml-4 px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded hover:bg-red-200"
                  >
                    Sil
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
