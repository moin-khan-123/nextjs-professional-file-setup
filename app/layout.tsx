/**
 * Root Layout
 *
 * Main layout wrapper for the entire application.
 * - Loads Geist fonts (sans and mono) from Google Fonts
 * - Sets up global CSS and theme variables
 * - Wraps app with LenisProvider for smooth scrolling
 * - Defines metadata (title, description)
 *
 * @component
 * @returns {JSX.Element} Root HTML structure with providers and fonts
 */

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '../components/LenisProvider';

// Load sans-serif font (primary)
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Load monospace font (for code/technical elements)
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Define page metadata for SEO
export const metadata: Metadata = {
  title: 'Freelancing Company | Smooth Scroll Demo',
  description: 'Experience professional smooth scrolling powered by Lenis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap entire app with Lenis provider for smooth scrolling */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
