import React from 'react';
import type {Metadata} from "next";
import {Cormorant_Garamond} from 'next/font/google';

import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

const geistMono = Cormorant_Garamond({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Luxury Cashmere Clothing | Cobi",
  description: "Gobi Cashmere",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <title></title>
    </head>
    <body
      className={`${geistMono.variable} antialiased text-baseContent bg-baseBG`}
    >
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
