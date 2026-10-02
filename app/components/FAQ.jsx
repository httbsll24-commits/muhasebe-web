'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Şirket kuruluşu ne kadar sürer ve gerekli evraklar nelerdir?',
      a: 'LTD veya Şahıs şirketi kuruluşları gerekli evraklar (kimlik, ikametgah, kira kontratı) tamamlandıktan sonra ortalama 1-2 iş günü içerisinde tamamlanmaktadır.'
    },
    {
      q: 'E-Fatura ve E-Defter sistemine geçiş zorunluluğu nedir?',
      a: 'Gelir İdaresi Başkanlığı tarafından belirlenen yıllık ciro limitlerini aşan mükellefler için E-Fatura ve E-Defter uygulamalarına geçiş zorunludur. Büromuz tüm e-dönüşüm süreçlerini sizin adınıza yönetmektedir.'
    },
    {
      q: 'Mali müşavirlik hizmet ücretleri nasıl belirlenir?',
      a: 'Hizmet ücretleri, Hazine ve Maliye Bakanlığı ile TÜRMOB tarafından her yıl yayımlanan Asgari Ücret Tarifesi esas alınarak, şirketinizin işlem hacmine göre belirlenir.'
    },
    {
      q: 'Vergi teşviklerinden ve istisnalarından nasıl yararlanabilirim?',
      a: 'Sektörünüze ve istihdam durumunuza uygun SGK indirimleri, Ar-Ge ve genç girişimci teşvikleri taranarak işletmenize özel vergi planlaması yapılmaktadır.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
          <p className="text-sm text-gray-600 mt-2">Müşterilerimizin en çok merak ettiği mali ve idari konular</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition font-semibold text-gray-800"
              >
                <span>{faq.q}</span>
                <span className="text-lg font-bold text-blue-600">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
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