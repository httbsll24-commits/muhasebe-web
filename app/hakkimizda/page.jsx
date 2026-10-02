import Link from 'next/link';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Hakkımızda</h1>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Büromuz, mali müşavirlik, vergi danışmanlığı, e-dönüşüm süreçleri ve şirket kurulumu alanlarında profesyonel çözümler sunmaktadır.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Güvenilir, mevzuata uygun ve şeffaf çalışma ilkelerimizle mükelleflerimizin mali süreçlerini en verimli şekilde yönetmelerine destek oluyoruz.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <h3 className="font-semibold text-blue-900">Vizyonumuz</h3>
          <p className="text-blue-800 text-sm mt-1">
            Dijitalleşen mali sistemlere öncülük ederek, mükelleflerimize zaman ve maliyet tasarrufu sağlayan yenilikçi danışmanlık hizmeti vermek.
          </p>
        </div>

        <Link href="/" className="inline-block text-blue-600 font-medium hover:underline">
          &larr; Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}