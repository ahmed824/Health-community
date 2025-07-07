import { Petrona, Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Health Community",
  description: "A comprehensive health community platform for wellness and medical information",
  keywords: ["health", "community", "wellness", "medical", "fitness"],
  authors: [{ name: "Health Community Team" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${petrona.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
