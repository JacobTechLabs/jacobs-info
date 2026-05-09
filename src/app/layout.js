import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

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
      <body className={outfit.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
