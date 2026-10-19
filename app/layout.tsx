import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'La Grande Galaxie | Practical learning and professional support',
    template: '%s | La Grande Galaxie'
  },
  description: 'Explore practical training and professional support from La Grande Galaxie for learners, teams, and growing organizations.',
  keywords: ['La Grande Galaxie', 'LGGx', 'professional training Nigeria', 'data skills training', 'technology services'],
  openGraph: {
    type: 'website',
    siteName: 'La Grande Galaxie',
    title: 'La Grande Galaxie | Practical learning and professional support',
    description: 'Explore practical training and professional support for people and organizations building useful capability.',
    images: [{ url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519664032434622/TdpCNdGEhjUMHpBn.png', width: 1072, height: 508, alt: 'La Grande Galaxie logo' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Grande Galaxie | Practical learning and professional support',
    description: 'Explore practical training and professional support for people and organizations building useful capability.',
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310519664032434622/TdpCNdGEhjUMHpBn.png']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
