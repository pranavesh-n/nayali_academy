import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Noto_Sans_Tamil, Mukta_Malar } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '@/lib/dictionary';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: '--font-tamil',
  subsets: ['tamil', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const muktaMalar = Mukta_Malar({
  variable: '--font-mukta',
  subsets: ['tamil', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nayali-tamil-academy.vercel.app'),
  title: 'Nayali Tamil Academy | Best Tamil Tuition & Online Classes in Pallavaram, Chennai',
  description:
    'Women-owned premier Tamil tuition centre in Pallavaram, Chennai. Personalized 1-to-1 & group classes, interactive reading, handwriting drills, and spoken Tamil for kids, adults & NRI overseas families. 5.0★ Google rated.',
  keywords: [
    'Tamil Tuition Pallavaram',
    'Nayali Tamil Academy',
    'Tamil tuition classes Chennai',
    'Tamil classes for CBSE ICSE kids',
    'Learn Tamil Online for NRI kids',
    'Spoken Tamil classes for adults Chennai',
    'Tamil handwriting improvement',
    'Anitha Mam Tamil Tuition',
    'Zamin Pallavaram tuition centre',
  ],
  authors: [{ name: 'Nayali Tamil Academy' }, { name: 'Pranavesh N' }],
  creator: 'Pranavesh N',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['ta_IN'],
    url: 'https://nayali-tamil-academy.vercel.app',
    title: 'Nayali Tamil Academy | Joyful Tamil Tuition in Pallavaram & Online',
    description:
      'Learn Tamil the easy, joyful way. 5.0★ rated Tamil coaching for school students, adults, and overseas families in Pallavaram, Chennai.',
    siteName: 'Nayali Tamil Academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nayali Tamil Academy | Pallavaram, Chennai',
    description: 'Learn Tamil the easy way with Anitha Mam. 5.0★ Google Rated Tamil Tuition.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': 'https://nayali-tamil-academy.vercel.app/#organization',
        name: BUSINESS_INFO.name,
        alternateName: ['Nayali Tamil Tuition', 'நயலி தமிழ் அகாடமி'],
        description:
          'Women-owned Tamil tuition centre and online academy in Pallavaram, Chennai. Offering 1-to-1 & group classes for school kids, handwriting coaching, and adult spoken Tamil.',
        url: 'https://nayali-tamil-academy.vercel.app',
        telephone: BUSINESS_INFO.phone,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Block-14, Dharga Rd, Zamin Pallavaram, Dargah Colony',
          addressLocality: 'Pallavaram, Chennai',
          addressRegion: 'Tamil Nadu',
          postalCode: '600043',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.97868,
          longitude: 80.14494,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '05:00',
            closes: '21:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '21:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          ratingCount: '78',
          reviewCount: '78',
        },
        areaServed: [
          { '@type': 'Place', name: 'Pallavaram' },
          { '@type': 'Place', name: 'Tambaram' },
          { '@type': 'Place', name: 'Chromepet' },
          { '@type': 'Place', name: 'Chennai' },
          { '@type': 'Place', name: 'Worldwide Online' },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${notoSansTamil.variable} ${muktaMalar.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-amber-200 selection:text-amber-950 dark:selection:bg-amber-900 dark:selection:text-amber-100">
        {children}
      </body>
    </html>
  );
}
