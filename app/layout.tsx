import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://serenequests.com'),

  title: 'SereneQuests — AI-Powered Wellness App',
  description:
    'Premium health guidance app providing safe home-care remedies, wellness information, and AI-powered health assistance. Not a substitute for professional medical advice.',

  keywords: ['health', 'wellness', 'remedies', 'home care', 'AI health assistant'],
  authors: [{ name: 'SereneQuests' }],

  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.jpg',
  },

  openGraph: {
    title: 'SereneQuests',
    description: 'An AI-Powered Wellness App',
    url: 'https://serenequests.com',
    siteName: 'SereneQuests',
    type: 'website',
    images: [
      {
        url: 'https://serenequests.com/serenequests.png?v=2', // ✅ FIXED
        width: 1200,
        height: 630,
        alt: 'SereneQuests preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SereneQuests',
    description: 'An AI-Powered Wellness App',
    images: ['https://serenequests.com/serenequests.png?v=2'], // ✅ SAME URL
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0fdf4' },
    { media: '(prefers-color-scheme: dark)', color: '#1a2e1a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}