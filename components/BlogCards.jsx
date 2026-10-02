'use client';
import Link from 'next/link';

export default function BlogCards() {
  const blogs = [
    {
      id: '1',
      title: '2026 Vergi Takvimi ve SMMM Beyanname Süreleri',
      summary: 'Yeni yılda mükelleflerin ve işletmelerin dikkat etmesi gereken kritik vergi ve beyanname tarihlerinin özet rehberi.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
      date: '02 Ekim 2026',
      author: 'Başol Muhasebe'
    },
    {
      id: '2',
      title: 'E-Fatura ve E-Defter Uygulamalarında Yeni Dönem',
      summary: 'Gelir İdaresi Başkanlığı tarafından yayımlanan e-dönüşüm tebliğleri ve dijital muhasebe süreçlerindeki güncellemeler.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      date: '28 Eylül 2026',
      author: 'Başol Muhasebe'
    },
    {
      id: '3',
      title: 'Genç Girişimci Teşvikleri ve Vergi Muafiyeti',
      summary: 'Şahıs şirketi kuracak olan genç girişimcilere sağlanan Bağ-Kur desteği ve 3 yıl süreli gelir vergisi istatistiği detayları.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
      date: '15 Eylül 2026',
      author: 'Başol Muhasebe'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Güncel Blog ve Makaleler</h2>
          <p className="text-slate-600 mt-2">Mali mevzuat, vergi rehberi ve finansal dünyadan son gelişmeler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col justify-between">
              <div>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                    <span>{blog.date}</span>
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                    {blog.summary}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="#" 
                  className="inline-block text-blue-600 font-semibold text-sm hover:text-blue-700 transition"
                >
                  Devamını Oku →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}