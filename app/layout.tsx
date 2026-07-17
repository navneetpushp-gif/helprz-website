import type { Metadata } from "next";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/800.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.helprz.in"),
  title: {
    default: "Helprz — Verified Home Help Across Delhi/NCR | Maids, Cooks, Drivers & Care",
    template: "%s",
  },
  description:
    "Book background-verified maids, cooks, drivers, nannies and elder-care professionals for your home across Delhi/NCR. Trusted by thousands. 24/7 support.",
  verification: {
    google: "Pc-7YVYCENxtE4XY742U6xuyNxBHOYSboBcaQZBYjI0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteChrome />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
