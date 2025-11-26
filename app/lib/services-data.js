// Services data for both languages
const servicesData = {
  en: {
    'building-construction': {
      id: 'building-construction',
      title: 'Building Construction',
      image: '/services/BC.png',
      description: 'Construction of residential, government, educational, and healthcare buildings with global quality standards.',
      fullDescription: 'We specialize in constructing high-quality residential, government, educational, and healthcare facilities. Our team ensures that every project meets international standards while adhering to local regulations and client specifications.',
      features: [
        'Residential building construction',
        'Government facility development',
        'Educational institution buildings',
        'Healthcare facility construction',
        'Quality assurance protocols',
        'Timely project delivery'
      ]
    },
    'road-works-infrastructure': {
      id: 'road-works-infrastructure',
      title: 'Road Works & Infrastructure',
      image: '/services/RW.png',
      description: 'Complete road solutions including paving, traffic signals, road markings, and lighting systems.',
      fullDescription: 'Our comprehensive road works and infrastructure services cover everything from initial planning to final implementation, ensuring durable and efficient transportation networks.',
      features: [
        'Road paving and surfacing',
        'Traffic signal installation',
        'Road marking and signage',
        'Lighting systems',
        'Drainage solutions',
        'Infrastructure planning'
      ]
    },
    // Add other services similarly...
  },
  ar: {
    'building-construction': {
      id: 'building-construction',
      title: 'إنشاء المباني',
      image: '/services/BC.png',
      description: 'إنشاء المباني السكنية والحكومية والتعليمية والصحية بمعايير جودة عالمية.',
      fullDescription: 'نتخصص في إنشاء المرافق السكنية والحكومية والتعليمية والصحية عالية الجودة. يضمن فريقنا أن كل مشروع يلبي المعايير الدولية مع الالتزام باللوائح المحلية ومواصفات العميل.',
      features: [
        'إنشاء المباني السكنية',
        'تطوير المرافق الحكومية',
        'مباني المؤسسات التعليمية',
        'إنشاء المرافق الصحية',
        'بروتوكولات ضمان الجودة',
        'تسليم المشروع في الوقت المحدد'
      ]
    },
    'road-works-infrastructure': {
      id: 'road-works-infrastructure',
      title: 'أعمال الطرق والبنية التحتية',
      image: '/services/RW.png',
      description: 'حلول متكاملة لأعمال الطرق تشمل السفلته، الإشارات المرورية، تخطيط الطرق، وأنظمة الإنارة.',
      fullDescription: 'تغطي خدمات أعمال الطرق والبنية التحتية الشاملة لدينا كل شيء من التخطيط الأولي إلى التنفيذ النهائي، مما يضمن شبكات نقل متينة وفعالة.',
      features: [
        'رصف الطرق والتسوية',
        'تركيب الإشارات المرورية',
        'تخطيط الطرق واللافتات',
        'أنظمة الإضاءة',
        'حلول الصرف الصحي',
        'تخطيط البنية التحتية'
      ]
    },
    // Add other services similarly...
  }
};

// Function to get service details
export async function getServiceDetails(serviceId, lang) {
  const langData = servicesData[lang] || servicesData.en;
  return langData[serviceId] || null;
}

// Function to get all services for listing
export async function getAllServices(lang) {
  const langData = servicesData[lang] || servicesData.en;
  return Object.values(langData);
}