import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agri Supply Chain",
  description: "",
};

interface RootLayoutProps {
    showHeader: boolean;
    showFooter: boolean;
    children: React.ReactNode;
}

export default function RootLayout({
    showHeader,
    showFooter,
    children,
}: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {showHeader && <Header />}
                {children}
                {showFooter && <Footer />}
            </body>
        </html>
    );
}
