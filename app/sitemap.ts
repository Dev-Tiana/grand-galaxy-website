import type { MetadataRoute } from 'next';
import { programmes, services } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/training', '/services', '/about', '/resources', '/faq', '/contact', '/register', '/legal/privacy', '/legal/terms', '/legal/academic-integrity'];
  return [
    ...routes.map((route) => ({ url: route || '/', lastModified: new Date('2026-10-19'), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...programmes.map((programme) => ({ url: `/training/${programme.slug}`, lastModified: new Date('2026-10-19'), changeFrequency: 'monthly' as const, priority: .6 })),
    ...services.map((service) => ({ url: `/services/${service.slug}`, lastModified: new Date('2026-10-19'), changeFrequency: 'monthly' as const, priority: .7 }))
  ];
}
