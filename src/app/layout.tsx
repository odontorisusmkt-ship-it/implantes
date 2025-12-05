import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Melhora a performance de carregamento da fonte
  variable: '--font-inter' // Permite uso da fonte como variável CSS
});

export const metadata: Metadata = {
  title: 'Implantes Dentários em Ceilândia | Clínica Odonto Risus',
  description: 'Transforme seu sorriso com implantes dentários de última geração. Atendimento humanizado, tecnologia avançada e condições especiais. Ambiente moderno e equipe especializada.',
  keywords: 'implante dentário, implantodontia, dentista especialista, implantes dentários preço, clínica de implantes, melhor implantodontista Ceilândia, prótese dentária, dentista implante',
  authors: [{ name: 'Clínica Odonto Risus' }],
  openGraph: {
    title: 'Implantes Dentários em Ceilândia | Clínica Odonto Risus',
    description: 'Transforme seu sorriso com implantes dentários de última geração. Ambiente moderno e equipe especializada.',
    url: 'https://implantes.odontorisus.com',
    siteName: 'Clínica Odonto Risus',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/implantes-dentarios_detalhes.jpg',
        width: 1200,
        height: 630,
        alt: 'Implantes Dentários de Alta Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implantes Dentários em Ceilândia | Clínica Odonto Risus',
    description: 'Transforme seu sorriso com implantes dentários de última geração.',
    images: ['/implantes-dentarios_detalhes.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Permite zoom até 5x para melhor acessibilidade
    minimumScale: 1,
    viewportFit: 'cover', // Melhor suporte para dispositivos com notch
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://implantes.odontorisus.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#4de49a', // Cor tema para browsers móveis
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#4de49a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <Script id="schema-dental" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Clínica Odonto Risus",
              "image": "https://implantes.odontorisus.com/logo_odonto_risus.png",
              "description": "Clínica especializada em implantes dentários com tecnologia de ponta e profissionais altamente qualificados.",
              "@id": "https://implantes.odontorisus.com",
              "url": "https://implantes.odontorisus.com",
              "telephone": "+551199999999",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Endereço da Clínica",
                "addressLocality": "Ceilândia",
                "addressRegion": "SP",
                "postalCode": "00000-000",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5505,
                "longitude": -46.6333
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100093514293882",
                "https://www.instagram.com/odonto.risus"
              ],
              "priceRange": "$$",
              "medicalSpecialty": "Implantodontia"
            }
          `}
        </Script>
        <Script id="schema-service" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Implantes Dentários",
              "description": "Procedimento de implante dentário com tecnologia avançada e recuperação rápida",
              "medicineSystem": "Implantodontia",
              "relevantSpecialty": {
                "@type": "MedicalSpecialty",
                "name": "Implantodontia"
              },
              "howPerformed": "Procedimento minimamente invasivo com tecnologia digital",
              "preparation": "Avaliação inicial gratuita e planejamento personalizado",
              "procedureType": "Cirúrgico",
              "status": "Disponível"
            }
          `}
        </Script>
      </head>
      <body 
        className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}
        style={{
          WebkitTapHighlightColor: 'transparent', // Remove highlight ao tocar em elementos em dispositivos móveis
        }}
      >
        <main className="flex-grow">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
