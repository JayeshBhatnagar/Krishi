import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { TopAppbar } from "@/components/TopAppbar";
import Provider from "./provider";
import { Toaster } from "@/components/ui/toaster";

const nohito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AgriTech",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={nohito.className}>
                <Provider>
                    <main>
                        <TopAppbar />
                        {children}
                        {/* <Footer /> */}
                    </main>
                    <Toaster />
                </Provider>
            </body>
        </html>
    );
}
