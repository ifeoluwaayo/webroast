import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inconsolata = localFont({
  src: "./font/Inconsolata.otf",
  variable: "--font-inconsolata",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title:
    "Web Roast || Roast your website and get optimal suggestions within seconds",
  description:
    "Welcome to Web Roast. Roast your website and receive instant, tailored suggestions to enhance its performance. Our expert analysis ensures your site is at its best, driving optimal results. Transform your online presence with Web Roast - where insightful suggestions meet swift solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${nunito.variable} font-nunito`}>
        {children}
      </body>
    </html>
  );
}
