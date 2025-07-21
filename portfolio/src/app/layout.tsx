import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head"; 



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
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
      <Head>
        <meta
          name="google-site-verification"
          content="mr6DpKGyOAKnB0eQH0DQByStxObAfiiRoG9BWEtTkAs"
        />
      </Head>
      <body className={` ${montserrat.variable} font-montserrat antialiased`}>

        <Analytics />
        {children}
      </body>
    </html>
  );
}
