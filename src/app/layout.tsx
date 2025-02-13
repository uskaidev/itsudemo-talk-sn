import "./globals.css"
import { Inter, Zen_Maru_Gothic } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru-gothic",
})

export const metadata: Metadata = {
  title: "デジタルサイネージ - いつでもトーク",
  description: "Sharp PN-L401C向けに最適化されたデジタルサイネージアプリケーション",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${zenMaruGothic.variable} font-sans`}>{children}</body>
    </html>
  )
}

