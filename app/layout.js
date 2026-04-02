import './globals.css'

export const metadata = {
  title: 'Larko Foods — Authentic Ghanaian Snacks, Spiced Meats & Sauces | Ships to UK, USA & Canada',
  description: 'Handmade Ghanaian foods: Larko Bites, Spiced Pork & Chicken, Shito Sauce, Peanut Butter, Banku Mix, Palmnut Pulp. Ships from Ghana to UK, USA & Canada. Fresh Ghanaian dishes every Friday in Liverpool.',
  keywords: 'Ghanaian food, Ghana snacks, shito sauce, banku mix, jollof rice, waakye, Larko Foods, African food UK, Ghanaian food USA, Ghanaian food Canada, spiced meat Ghana, peanut butter Ghana, hausa koko, garri, kelewele, plantain chips, Ghanaian food Liverpool, African food delivery, West African food online, buy Ghanaian food online, Ghanaian food near me',
  authors: [{ name: 'Larko Foods' }],
  metadataBase: new URL('https://larkofoods.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Larko Foods — Taste the Authentic Flavors of Ghana',
    description: 'Handmade Ghanaian snacks, spiced meats & sauces shipped worldwide. Fresh dishes every Friday in Liverpool.',
    url: 'https://larkofoods.com',
    siteName: 'Larko Foods',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larko Foods — Authentic Ghanaian Foods',
    description: 'Handmade Ghanaian snacks, spiced meats & sauces. Ships to UK, USA & Canada.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: {
    google: '9Rohj6_xiXusiZnhrW3f26e7tPL4lJDfrn6WSqnk0KQ',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Larko Foods',
    description: 'Authentic handmade Ghanaian foods. Snacks, spiced meats, sauces, frozen packs. Ships to UK, USA & Canada. Friday dishes in Liverpool.',
    url: 'https://larkofoods.com',
    telephone: ['+233509145145', '+447351547775'],
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
      { '@type': 'PostalAddress', addressLocality: 'Liverpool', addressCountry: 'GB' },
    ],
    servesCuisine: 'Ghanaian',
    priceRange: '£-££',
    sameAs: ['https://instagram.com/larkofoods', 'https://tiktok.com/@larkofoodsgh', 'https://snapchat.com/add/larkofoodsgh'],
    areaServed: [{ '@type': 'Country', name: 'Ghana' }, { '@type': 'Country', name: 'United Kingdom' }, { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }],
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2E8B3C" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
