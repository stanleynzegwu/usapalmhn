import type { Metadata, Viewport } from "next"
import { DM_Sans, Noto_Sans_Arabic, Playfair_Display, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import "./styles/shared.css"
import { Newsletter, SiteFooter, SiteNav } from "@/components/site-nav"

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["300", "400", "500", "600"] })
const playfair = Playfair_Display({ variable: "--font-playfair-display", subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"] })
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"], weight: ["300", "400", "600"], style: ["normal", "italic"] })
const notoArabic = Noto_Sans_Arabic({ variable: "--font-noto-sans-arabic", subsets: ["arabic"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "USA Palestine Mental Health Network",
  description: "A volunteer-led network of U.S. mental health professionals in solidarity with Palestinian communities.",
  icons: { icon: "/assets/logo.png" },
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#28390d" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${sourceSerif.variable} ${notoArabic.variable}`}>
      <body>
        <SiteNav />
        {children}
        <Newsletter />
        <SiteFooter />
      </body>
    </html>
  )
}
