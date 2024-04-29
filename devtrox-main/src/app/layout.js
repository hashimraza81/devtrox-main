import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

const grotesk = localFont({
    src: [
        {
            path: "../assets/fonts/ClashGrotesk-Extralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../assets/fonts/ClashGrotesk-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/ClashGrotesk-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/ClashGrotesk-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/ClashGrotesk-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/ClashGrotesk-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-grotesk",
});

export const metadata = {
    title: "Maa Teh ~ Innovate And Evolve",
    description:
        "Development and maintenance of computer software and hardware; Electronic product technology development, technology consulting, technology transfer, technology services, and wholesale and retail operations: import and export of goods or technologies (excluding goods and technologies prohibited by the state or involving administrative approval); Translation services. (The above business scope does not involve special management measures for foreign investment access) (For licensed business projects, permission from relevant departments must be obtained before operation)",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${grotesk.variable}`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
