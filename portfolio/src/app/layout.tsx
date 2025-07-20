import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], 
  display: "swap", 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-montserrat',
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Nelson Adegbasa – Fullstack Developer",
  description:
    "Explore the portfolio of Nelson Favour, a frontend developer and fullstack developer. Discover projects, skills, and contact information to collaborate on modern, responsive web applications.",
  keywords: [
    "Nelson Adegbasa",
    "Frontend Developer",
    "Fullstack Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Nigeria",
    "JavaScript Developer",
  ],
  openGraph: {
    title: "Nelson Adegbasa – Fullstack Developer",
    description:
      "Browse the portfolio of Nelson Favour showcasing modern web development projects and skills.",
    url: "https://nelson-ade.vercel.app/", 
    siteName: "Nelson Favour Portfolio",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}