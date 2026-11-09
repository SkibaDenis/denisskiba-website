import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://denisskiba.ru"),
  title: "Денис Скиба — 3D Generalist для бизнеса | CAD под производство, CGI и Анимация",
  description:
    "Коммерческий 3D-специалист широкого профиля. 3D CAD и DFM моделирование под производство и печать, предметный 3D CGI рендеринг для маркетплейсов и брендов, техническая анимация. 250+ проектов, работа по B2B договору с юрлицами.",
  keywords: [
    "Денис Скиба",
    "3D Generalist",
    "3D CAD моделирование",
    "моделирование под производство",
    "DFM 3D печать",
    "пресс-формы молды",
    "предметный 3D рендер",
    "CGI визуализация",
    "Blender 3D",
    "техническая 3D анимация",
    "exploded view",
    "разработка маскота"
  ],
  authors: [{ name: "Денис Скиба", url: "https://denisskiba.ru" }],
  creator: "Денис Скиба",
  publisher: "Денис Скиба",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://denisskiba.ru",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://denisskiba.ru",
    siteName: "Денис Скиба — 3D Generalist для бизнеса",
    title: "Денис Скиба — 3D Generalist для бизнеса | CAD, CGI и Анимация",
    description:
      "Твердое коммерческое 3D для бизнеса: от DFM-проектирования корпусов и пресс-форм до фотореалистичного CGI и взрыв-схем. 250+ проектов, отзывы юрлиц.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Денис Скиба — 3D Generalist для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Денис Скиба — 3D Generalist для бизнеса",
    description:
      "Коммерческий 3D-специалист: CAD под производство, предметный CGI, техническая анимация. 250+ проектов.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Денис Скиба — 3D Generalist для бизнеса",
    "url": "https://denisskiba.ru",
    "image": "https://denisskiba.ru/og-image.jpg",
    "description": "3D CAD моделирование под производство, предметный CGI рендеринг, техническая анимация и 3D маскоты для бизнеса.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "founder": {
      "@type": "Person",
      "name": "Денис Скиба",
      "jobTitle": "3D Generalist / CAD & CGI Specialist",
      "sameAs": [
        "https://t.me/denisskiba"
      ]
    },
    "knowsAbout": [
      "3D Modeling",
      "CAD Design",
      "DFM (Design for Manufacturing)",
      "Blender 3D",
      "CGI Product Rendering",
      "Technical 3D Animation"
    ]
  };

  return (
    <html lang="ru" className={`h-full antialiased ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0A0B0D] text-slate-100 selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
