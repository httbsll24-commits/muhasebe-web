import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Muhasebe & Mali Müşavirlik</h3>
          <p className="text-sm text-gray-400">
            Mali süreçlerinizde güvenilir, hızlı ve mevzuata uygun profesyonel çözümler.
          </p>
        </div>

        <div>
          <h4 className="text-white text-md font-semibold mb-3">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/hakkimizda" className="hover:text-white transition">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz" className="hover:text-white transition">Hizmetlerimiz</Link>
            </li>
            <li>
              <Link href="/musteri-girisi" className="hover:text-white transition text-blue-400 font-medium">Müşteri Girişi</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-md font-semibold mb-3">İletişim</h4>
          <p className="text-sm text-gray-400">Adres: Merkez Mh. Atatürk Cd. No:123</p>
          <p className="text-sm text-gray-400">E-Posta: info@muhasebeweb.com</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Muhasebe Web. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}