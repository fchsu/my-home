import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Frontend Portfolio",
    default: "Frontend Engineer Portfolio & Blog",
  },
  description: "A professional frontend engineer portfolio and technical blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              UI Base
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#portfolio" className="transition-colors hover:text-foreground/80 text-foreground/60">
                作品集
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
                技術部落格
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
        <footer className="py-6 md:py-8 border-t">
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              Built with React 19, Next.js App Router, TailwindCSS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
