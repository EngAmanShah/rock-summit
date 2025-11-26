import { getServiceDetails } from '@/lib/services-data';
import Link from 'next/link';

export default async function ServiceDetail({ params }) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;

  const service = await getServiceDetails(id, lang);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {lang === 'en' ? 'Service Overview' : 'نظرة عامة على الخدمة'}
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    {service.fullDescription || service.description}
                  </p>
                  
                  {/* Add more service details here */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      {lang === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {(service.features || []).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    href={`/${lang}/contact`}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    {lang === 'en' ? 'Get Quote' : 'اطلب عرض سعر'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services or Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {lang === 'en' ? 'Ready to Start Your Project?' : 'مستعد لبدء مشروعك؟'}
          </h2>
          <Link
            href={`/${lang}/contact`}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {lang === 'en' ? 'Contact Us Today' : 'اتصل بنا اليوم'}
          </Link>
        </div>
      </section>
    </div>
  );
}