'use client';
import ContactForm from '@/components/ContactForm';

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#0b1329] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">İletişime Geçin</h1>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Sorularınız, randevu talepleriniz ve danışmanlık hizmetlerimiz için bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-amber-400 font-bold mb-2">Adres</h3>
            <p className="text-slate-300 text-sm">Merkez Mah. Atatürk Cad. No:123/4 KONYA</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-amber-400 font-bold mb-2">E-Posta</h3>
            <p className="text-slate-300 text-sm">info@basolmuhasebe.com</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center">
            <h3 className="text-amber-400 font-bold mb-2">Telefon</h3>
            <p className="text-slate-300 text-sm">+90 (332) 000 00 00</p>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2 sm:p-6">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}