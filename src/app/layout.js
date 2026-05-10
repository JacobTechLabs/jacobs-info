import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/providers/AuthProvider";

// Luxury Editorial Typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Jacob Tech Info | Web Development Insights & Tutorials",
    template: "%s | Jacob Tech Info",
  },
  description: "Jacob Tech Info is a leading web development agency sharing expert insights, tutorials, and industry updates. Learn modern web technologies from professionals.",
  keywords: ["web development", "JavaScript", "React", "Next.js", "frontend", "backend", "tutorials", "tech blog"],
  authors: [{ name: "Jacob Tech Info" }],
  creator: "Jacob Tech Info",
  publisher: "Jacob Tech Info",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jacobtechinfo.com',
    siteName: 'Jacob Tech Info',
    title: 'Jacob Tech Info | Web Development Insights & Tutorials',
    description: 'Leading web development agency sharing expert insights and tutorials.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Tech Info - Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Tech Info | Web Development Insights & Tutorials',
    description: 'Leading web development agency sharing expert insights and tutorials.',
    images: ['/og-image.jpg'],
    creator: '@jacobtechinfo',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-body`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32 max-w-[1400px] flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
