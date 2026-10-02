'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Şirket kuruluşu ne kadar sürer?',
      a: 'Şahıs şirketleri 1 iş günü, limited ve anonim şirketler ise ortalama 2-3 iş günü içerisinde tescil edilerek faaliyete geçer.'
    },
    {
      q: 'E-Fatura sistemine geçiş zorunlu mu?',
      a: 'Belirli ciro limitlerini aşan mükellefler ve e-ticaret yapan işletmeler için e-fatura / e-arşiv kullanımı zorunludur.'
    },
    {
      q: 'Aylık beyanname takvimi nasıl takip edilir?',
      a: 'KDV, Muhtasar, Geçici Vergi ve Kurumlar Vergisi beyanname tarihleri mali takvime göre büromuzca takip edilir ve bilgilendirme yapılır.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-800 flex justify-between items-center transition"
              >
                <span>{faq.q}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-slate-600 border-t border-slate-200 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}