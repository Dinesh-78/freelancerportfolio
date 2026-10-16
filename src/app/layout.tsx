import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const font = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: "Dinesh Veerapareddy — Software Consultant | Full-Stack & AI Solutions",
    template: "%s | Dinesh Veerapareddy"
  },
  description: "I help businesses and startups build production-grade software solutions — from scratch development to end-to-end applications. Full-stack development, mobile apps, AI automation, and cloud engineering. Book a free strategy call.",
  keywords: [
    "software consultant",
    "full-stack developer",
    "AI automation solutions",
    "custom web application development",
    "react native app developer",
    "next.js developer",
    "business process automation",
    "MVP development",
    "startup software development",
    "enterprise software solutions",
    "MERN stack developer",
    "Spring Boot developer",
    "AWS certified developer",
    "software engineering consultant India",
  ],
  authors: [{ name: "Dinesh Veerapareddy", url: "https://dineshportfolio-alpha.vercel.app/" }],
  creator: "Dinesh Veerapareddy",
  publisher: "Dinesh Veerapareddy",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dineshportfolio-alpha.vercel.app/",
    title: "Dinesh Veerapareddy — Software Consultant | Full-Stack & AI Solutions",
    description: "I help businesses build software that drives growth. From MVPs to enterprise-grade applications — book a free strategy call.",
    siteName: "Dinesh Veerapareddy — Software Consultant",
    images: [
      {
        url: "https://dineshportfolio-alpha.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dinesh Veerapareddy — Software Consultant",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Veerapareddy — Software Consultant | Full-Stack & AI Solutions",
    description: "I help businesses build software that drives growth. Book a free strategy call.",
    creator: "@vdinesh2222",
    images: ["https://dineshportfolio-alpha.vercel.app/twitter-image.jpg"],
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
  
  alternates: {
    canonical: "https://dineshportfolio-alpha.vercel.app/",
  },
  
  applicationName: "Dinesh Veerapareddy — Software Consultant",
  category: "Technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dinesh Veerapareddy",
              "jobTitle": "Software Consultant & Full-Stack Developer",
              "description": "I help businesses and startups build production-grade software solutions — from scratch development to end-to-end applications, AI automation, and cloud engineering.",
              "url": "https://dineshportfolio-alpha.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/dinesh-veerapareddy/",
                "https://github.com/Dinesh-78",
                "https://x.com/vdinesh2222"
              ],
              "knowsAbout": [
                "Full-Stack Development",
                "React Native Development",
                "AI Automation",
                "Business Process Automation",
                "Cloud Engineering (AWS)",
                "Next.js",
                "Spring Boot",
                "System Design",
                "TypeScript"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": "Software Consulting & Development",
                "areaServed": "",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Software Solutions",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Application Development",
                        "description": "Full-stack web applications built with Next.js, React, and Node.js"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "description": "Cross-platform mobile apps with React Native"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI & Automation Solutions",
                        "description": "AI chatbots, business process automation, and intelligent data analytics"
                      }
                    }
                  ]
                }
              }
            })
          }}
        />
        
      
      </head>
      <body
        className={`${font.className} ${font.variable} antialiased`}
      >
        <CustomCursor />
        {children}

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dinesh Veerapareddy — Software Consultant",
              "url": "https://dineshportfolio-alpha.vercel.app/",
              "description": "I help businesses and startups build production-grade software solutions — full-stack development, mobile apps, AI automation, and cloud engineering.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dineshportfolio-alpha.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
