import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agri Supply Chain",
  description: "",

  authors: [
    {
      name: "deleter",
    },
  ],
  creator: "deleter",

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}


interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({  children, }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased",inter.className)}>
                <div vaul-drawer-wrapper="">
                    <div className="relative flex min-h-screen flex-col bg-background">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
