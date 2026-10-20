import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'La Grande Galaxie | Learn practical skills. Get professional solutions.',
    template: '%s | La Grande Galaxie'
  },
  description: 'Build valuable skills in technology, data, digital marketing, and professional development. Find practical support for your business or project.',
  keywords: ['La Grande Galaxie', 'LGGx', 'professional training Nigeria', 'data skills training', 'technology services'],
  openGraph: {
    type: 'website',
    siteName: 'La Grande Galaxie',
    title: 'La Grande Galaxie | Learn practical skills. Get professional solutions.',
    description: 'Build valuable skills and find professional support for your business or project.',
    images: [{ url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519664032434622/TdpCNdGEhjUMHpBn.png', width: 1072, height: 508, alt: 'La Grande Galaxie logo' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Grande Galaxie | Learn practical skills. Get professional solutions.',
    description: 'Build valuable skills and find professional support for your business or project.',
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310519664032434622/TdpCNdGEhjUMHpBn.png']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
