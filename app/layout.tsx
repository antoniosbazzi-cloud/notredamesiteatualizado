import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Hapvida NotreDame com 50% OFF - ALB Consultoria",
  description:
    "OFERTA LIMITADA! Hapvida NotreDame com 50% de desconto. O melhor plano de saúde do Brasil por metade do preço. Sem carência, cobertura nacional. Contrate já!",
  keywords:
    "Hapvida NotreDame, plano de saúde desconto, 50% off, sem carência, cobertura nacional, ALB Consultoria, melhor preço",
  authors: [{ name: "ALB Consultoria de Benefícios" }],
  creator: "ALB Consultoria de Benefícios",
  publisher: "ALB Consultoria de Benefícios",
  generator: "v0.dev",
  applicationName: "ALB Consultoria",
  referrer: "origin-when-cross-origin",
  category: "Saúde e Seguros",
  classification: "Consultoria em Benefícios",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://albconsultoria.com.br",
    siteName: "ALB Consultoria - Hapvida NotreDame",
    title: "Hapvida NotreDame com 50% OFF - Oferta Limitada",
    description:
      "ÚLTIMA CHANCE! Hapvida NotreDame com 50% de desconto. Sem carência, cobertura nacional, aprovação imediata. Garanta já!",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ALB Consultoria - Logo",
        type: "image/png",
      },
      {
        url: "/images/hero-family.png",
        width: 1200,
        height: 630,
        alt: "ALB Consultoria - Família Saudável",
        type: "image/png",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@albconsultoria",
    creator: "@albconsultoria",
    title: "Hapvida NotreDame 50% OFF - Oferta Limitada",
    description: "O melhor plano de saúde do Brasil com 50% de desconto. Sem carência, aprovação imediata!",
    images: ["/favicon.png"],
  },

  // Robots
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

  // Verification
  verification: {
    google: "google-site-verification-code", // Substitua pelo código real do Google Search Console
  },

  // Outros metadados
  alternates: {
    canonical: "https://albconsultoria.com.br",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALB Consultoria de Benefícios - Hapvida NotreDame",
    alternateName: "ALB Consultoria",
    url: "https://albconsultoria.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://albconsultoria.com.br/favicon.png",
      width: 512,
      height: 512,
    },
    image: "https://albconsultoria.com.br/favicon.png",
    description:
      "Representante autorizado Hapvida NotreDame oferecendo planos de saúde com até 50% de desconto. Sem carência, cobertura nacional, aprovação imediata.",
    foundingDate: "2014",
    founder: {
      "@type": "Person",
      name: "ALB Consultoria",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "SP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-97736-7924",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: ["https://wa.me/5511977367924"],
    serviceType: "Consultoria em Benefícios e Planos de Saúde",
    areaServed: "BR",
    knowsAbout: ["Planos de Saúde", "Seguro Saúde", "Benefícios Corporativos", "Consultoria em Saúde"],
    slogan: "Hapvida NotreDame com 50% OFF - Oferta Limitada",
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.style.fontFamily};
            --font-serif: ${playfair.style.fontFamily};
          }
        `}</style>

        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/favicon.png" />

        {/* Favicon melhorado */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17424404960"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17424404960');
            `,
          }}
        />

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1508619233814250');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1508619233814250&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
